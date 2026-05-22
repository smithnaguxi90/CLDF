import { SPECIAL_MISSIONS, SUBJECTS_QUEUE } from "./RoadmapData.js";
import RoadmapRules from "./RoadmapRules.js";
import RoadmapView from "../views/RoadmapView.js";
import RoadmapWorker from "../workers/cldf-worker.js?worker";

export default class RoadmapManager {
  constructor(appInstance) {
    this.app = appInstance;
    this.SPECIAL_MISSIONS = SPECIAL_MISSIONS;
    this.SUBJECTS_QUEUE = SUBJECTS_QUEUE;
    this.saveTimeout = null;

    this.view = new RoadmapView({
      SPECIAL_MISSIONS,
      SUBJECTS_QUEUE,
    });

    // Inicializa o Web Worker para processamento paralelo na Nuvem/Local
    this.worker = new RoadmapWorker();
    this.worker.addEventListener("message", (e) => {
      if (e.data.action === "RESULT_PROCESS_ROADMAP_DATA") {
        this.applyRender(e.data.payload);
      } else if (e.data.action === "ERROR_PROCESS_ROADMAP_DATA") {
        console.error(
          "[RoadmapManager] Erro no processamento do Worker:",
          e.data.payload.error,
        );
        if (this.app.ui) {
          this.app.ui.showToast(
            "Falha ao processar os dados do Roadmap.",
            "error",
          );
          if (this.app.ui.playErrorSound) this.app.ui.playErrorSound();
        }
      }
    });

    this.worker.addEventListener("error", (error) => {
      console.error(
        "[RoadmapManager] Erro fatal no Web Worker:",
        error.message,
      );
    });
  }

  init() {
    if (!this.app.state.progress) this.app.state.progress = {};
    if (!this.app.state.studyDates) this.app.state.studyDates = [];
    if (!this.app.state.simuladoScores) this.app.state.simuladoScores = [];
    if (!this.app.state.pace) this.app.state.pace = 2;
    this.view.renderTrackersHTML();
    this.checkAndRender();
  }

  updateSubject(id, amount, max) {
    const subject = this.SUBJECTS_QUEUE.find((s) => s.id === id);
    if (
      subject &&
      RoadmapRules.isPhaseBlocked(subject.phase, this.app.state.phase)
    ) {
      if (this.app.ui && this.app.ui.playErrorSound)
        this.app.ui.playErrorSound();
      this.app.ui.showToast(
        `Fase Bloqueada! Conclua a Fase ${this.app.state.phase} primeiro.`,
        "error",
      );
      return;
    }
    let current = this.app.state.progress[id] || 0;
    const oldCurrent = current;
    current += amount;
    if (current < 0) current = 0;
    if (current > max) current = max;

    const isCompleting = current === max && this.app.state.progress[id] !== max;

    if (isCompleting) {
      if (this.app.ui && this.app.ui.playSuccessSound)
        this.app.ui.playSuccessSound();
      this.view.celebrateSubjectCompletion();
      this.app.ui.showToast(`Parabéns! Finalizou a matéria!`, "success");
    } else if (current > oldCurrent && this.app.ui) {
      if (id === "ti" || id === "simulados") {
        if (this.app.ui.playPowerUpSound) this.app.ui.playPowerUpSound();
      } else {
        this.app.ui.playBeep();
      }
    }

    // Rastreamento de Ofensiva (Gamificação Diária)
    if (amount > 0) {
      const today = new Date().toISOString().split("T")[0];
      if (!this.app.state.studyDates.includes(today)) {
        this.app.state.studyDates.push(today);
      }
    }

    this.app.state.progress[id] = current;

    if (this.saveTimeout) clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(() => {
      this.app.storage.save(this.app.state);
    }, 1000);

    this.checkAndRender();

    // Prompt assíncrono e sincronização do Histórico de Simulados
    if (id === "simulados") {
      if (amount > 0 && current > oldCurrent) {
        setTimeout(() => {
          const notaStr = prompt(
            `Você registrou o Simulado #${current}! Qual foi a sua nota líquida?`,
          );
          if (notaStr !== null && notaStr.trim() !== "") {
            const nota = parseFloat(notaStr) || 0;
            this.app.state.simuladoScores.push({
              date: new Date().toISOString().split("T")[0],
              score: nota,
            });
            this.app.storage.save(this.app.state);
            this.checkAndRender(); // Re-renderiza o gráfico de linha
          }
        }, 150);
      } else if (amount < 0 && current < oldCurrent) {
        // Remove notas extras do gráfico se o usuário diminuir a contagem (-1)
        if (
          this.app.state.simuladoScores &&
          this.app.state.simuladoScores.length > current
        ) {
          this.app.state.simuladoScores = this.app.state.simuladoScores.slice(
            0,
            current,
          );
          this.app.storage.save(this.app.state);
          this.checkAndRender(); // Atualiza o gráfico imediatamente
        }
      }
    }
  }

  completeSubject(id, name, max) {
    if (
      confirm(
        `Tem certeza que deseja marcar a matéria "${name}" como 100% concluída? Esta ação não pode ser desfeita facilmente.`,
      )
    ) {
      this.updateSubject(id, max, max);
    }
  }

  toggleCompleted() {
    this.view.toggleCompleted(this.app.state);
  }

  checkAndRender() {
    // Delega os cálculos pesados e filtragens de arrays para o Worker em background
    this.worker.postMessage({
      action: "PROCESS_ROADMAP_DATA",
      payload: {
        progress: this.app.state.progress,
        subjectsQueue: this.SUBJECTS_QUEUE,
        specialMissions: this.SPECIAL_MISSIONS,
      },
    });
  }

  applyRender({ newPhase, visibleSubjects }) {
    if (newPhase > this.app.state.phase) {
      this.view.celebratePhaseUnlock();
      this.app.ui.showToast(
        `🎉 DESBLOQUEIO ÉPICO: Acesso Concedido à Fase ${newPhase}!`,
        "success",
      );
    }

    this.app.state.phase = newPhase;
    this.app.storage.save(this.app.state);

    this.view.renderValues(this.app.state);
    this.view.updatePhaseUI(this.app.state.phase);
    this.view.updateDynamicCycle(this.app.state.progress, this.app.state.phase);

    if (this.app.chartManager) {
      this.app.chartManager.update(
        this.app.state.progress,
        visibleSubjects,
        this.app.state.simuladoScores,
        this.app.state.metaSimulado || 80,
        this.app.state.warningSimulado || 70,
      );
    }
  }
}
