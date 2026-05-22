// cldf-worker.js - Thread de processamento em Background
import RoadmapRules from "../core/RoadmapRules.js";

self.addEventListener("message", async (e) => {
  const { action, payload } = e.data;

  if (action === "PROCESS_ROADMAP_DATA") {
    try {
      const { progress, subjectsQueue, specialMissions } = payload;

      // 1. Usa a fonte única da verdade para as regras de negócio
      const newPhase = RoadmapRules.calculatePhase(progress, subjectsQueue);

      // 2. Processamento Pesado de Arrays (Fila do Ciclo Ativo e Concluídas)
      const pending = subjectsQueue.filter(
        (sub) => (progress[sub.id] || 0) < sub.max && sub.phase <= newPhase,
      );
      const active = pending.slice(0, 4);

      const completed = subjectsQueue.filter(
        (sub) => (progress[sub.id] || 0) === sub.max,
      );

      // Mapeia na ordem original mesclando concluídas e ativas para o Radar
      const visibleSubjectsList = subjectsQueue.filter(
        (sub) =>
          completed.some((c) => c.id === sub.id) ||
          active.some((a) => a.id === sub.id),
      );

      const visibleSubjects = [
        ...visibleSubjectsList,
        specialMissions.simulados,
      ];

      // Retorna os dados processados para a Main Thread
      self.postMessage({
        action: "RESULT_PROCESS_ROADMAP_DATA",
        payload: { newPhase, visibleSubjects },
      });
    } catch (error) {
      // Tratamento civilizado do erro repassando o motivo para a aplicação principal
      self.postMessage({
        action: "ERROR_PROCESS_ROADMAP_DATA",
        payload: { error: error.message },
      });
    }
  }
});
