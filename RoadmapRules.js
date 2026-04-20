export default class RoadmapRules {
  static calculatePhase(progress) {
    let newPhase = 1;
    if (
      (progress.pt || 0) >= 91 &&
      (progress.admin || 0) >= 132 &&
      (progress.const || 0) >= 125 &&
      (progress.eng || 0) >= 33
    ) {
      newPhase = 2;
      if ((progress.legis || 0) >= 71 && (progress.ridf || 0) >= 16) {
        newPhase = 3;
      }
    }
    return newPhase;
  }

  static isPhaseBlocked(subjectPhase, currentPhase) {
    return subjectPhase > currentPhase;
  }
}