export default class RoadmapRules {
  static calculatePhase(progress, subjectsQueue = []) {
    let newPhase = 1;

    // Agrupa as matérias pelas suas respectivas fases
    const phase1Subjects = subjectsQueue.filter((s) => s.phase === 1);
    const phase2Subjects = subjectsQueue.filter((s) => s.phase === 2);

    // Verifica se TODAS as matérias da Fase 1 atingiram 100% da sua carga (max)
    const isPhase1Complete =
      phase1Subjects.length > 0 &&
      phase1Subjects.every((sub) => (progress[sub.id] || 0) >= sub.max);

    if (isPhase1Complete) {
      newPhase = 2;

      // Desbloqueia Fase 3 ao atingir dinamicamente ~60% da Fase 2
      const isPhase2ReadyForNext =
        phase2Subjects.length > 0 &&
        phase2Subjects.every(
          (sub) => (progress[sub.id] || 0) >= Math.ceil(sub.max * 0.6),
        );

      if (isPhase2ReadyForNext) {
        newPhase = 3;
      }
    }
    return newPhase;
  }

  static isPhaseBlocked(subjectPhase, currentPhase) {
    return subjectPhase > currentPhase;
  }
}
