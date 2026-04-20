import { SPECIAL_MISSIONS, COLORS_MAP, SUBJECTS_QUEUE } from "./RoadmapData.js";
import RoadmapRules from "./RoadmapRules.js";
import RoadmapView from "./RoadmapView.js";

export default class RoadmapManager {
  constructor() {
    this.SPECIAL_MISSIONS = SPECIAL_MISSIONS;
    this.SUBJECTS_QUEUE = SUBJECTS_QUEUE;

    this.view = new RoadmapView({
      SPECIAL_MISSIONS,
      COLORS_MAP,
      SUBJECTS_QUEUE,
    });
  }

  init() {
    if (!App.state.progress) App.state.progress = {};
    this.view.renderTrackersHTML();
    this.checkAndRender();
  }

  updateSubject(id, amount, max) {
    const subject = this.SUBJECTS_QUEUE.find((s) => s.id === id);
    if (
      subject &&
      RoadmapRules.isPhaseBlocked(subject.phase, App.state.phase)
    ) {
      App.ui.showToast(
        `Fase Bloqueada! Conclua a Fase ${App.state.phase} primeiro.`,
        "error",
      );
      return;
    }
    let current = App.state.progress[id] || 0;
    const oldCurrent = current;
    current += amount;
    if (current < 0) current = 0;
    if (current > max) current = max;

    const isCompleting = current === max && App.state.progress[id] !== max;

    if (isCompleting) {
      if (App.ui && App.ui.playSuccessSound) App.ui.playSuccessSound();
      this.view.celebrateSubjectCompletion();
      App.ui.showToast(`Parabéns! Finalizou a matéria!`, "success");
    } else if (current > oldCurrent && App.ui) {
      App.ui.playBeep();
    }
    App.state.progress[id] = current;
    App.storage.save(App.state);
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
    this.view.toggleCompleted(App.state.progress, App.state.phase);
  }

  checkAndRender() {
    const newPhase = RoadmapRules.calculatePhase(App.state.progress);

    if (newPhase > App.state.phase) {
      this.view.celebratePhaseUnlock();
      App.ui.showToast(
        `🎉 DESBLOQUEIO ÉPICO: Acesso Concedido à Fase ${newPhase}!`,
        "success",
      );
    }

    App.state.phase = newPhase;
    App.storage.save(App.state);

    this.view.renderValues(App.state.progress, App.state.phase);
    this.view.updatePhaseUI(App.state.phase);
    this.view.updateDynamicCycle(App.state.progress, App.state.phase);

    if (App.chartManager) {
      const pending = this.SUBJECTS_QUEUE.filter(
        (sub) =>
          (App.state.progress[sub.id] || 0) < sub.max &&
          sub.phase <= App.state.phase,
      );
      const active = pending.slice(0, 4);
      const completed = this.SUBJECTS_QUEUE.filter(
        (sub) => (App.state.progress[sub.id] || 0) === sub.max,
      );

      // Mapeia na ordem original para o gráfico não ficar embaralhado
      const visibleSubjectsList = this.SUBJECTS_QUEUE.filter(
        (sub) => completed.includes(sub) || active.includes(sub),
      );

      const visibleSubjects = [
        ...visibleSubjectsList,
        this.SPECIAL_MISSIONS.ti,
        this.SPECIAL_MISSIONS.simulados,
      ];
      App.chartManager.update(App.state.progress, visibleSubjects);
    }
  }
}
