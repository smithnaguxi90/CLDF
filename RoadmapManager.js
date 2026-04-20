import { SPECIAL_MISSIONS, SUBJECTS_QUEUE } from "./RoadmapData.js";
import RoadmapRules from "./RoadmapRules.js";
import RoadmapView from "./RoadmapView.js";

export default class RoadmapManager {
  constructor(appInstance) {
    this.app = appInstance;
    this.SPECIAL_MISSIONS = SPECIAL_MISSIONS;
    this.SUBJECTS_QUEUE = SUBJECTS_QUEUE;

    this.view = new RoadmapView({
      SPECIAL_MISSIONS,
      SUBJECTS_QUEUE,
    });

    // Inicializa o Web Worker para processamento paralelo na Nuvem/Local
    this.worker = new Worker(new URL("./cldf-worker.js", import.meta.url), {
      type: "module",
    });
    this.worker.addEventListener("message", (e) => {
      if (e.data.action === "RESULT_PROCESS_ROADMAP_DATA") {
        this.applyRender(e.data.payload);
      }
    });
  }

  init() {
    if (!this.app.state.progress) this.app.state.progress = {};
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
    this.app.state.progress[id] = current;
    this.app.storage.save(this.app.state);
    this.checkAndRender();
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
    this.view.toggleCompleted(this.app.state.progress, this.app.state.phase);
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

    this.view.renderValues(this.app.state.progress, this.app.state.phase);
    this.view.updatePhaseUI(this.app.state.phase);
    this.view.updateDynamicCycle(this.app.state.progress, this.app.state.phase);

    if (this.app.chartManager) {
      this.app.chartManager.update(this.app.state.progress, visibleSubjects);
    }
  }
}
