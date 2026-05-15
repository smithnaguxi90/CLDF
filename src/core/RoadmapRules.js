export default class RoadmapRules {
  static calculatePhase(progress) {
    let newPhase = 1;
    const {
      pt = 0,
      admin = 0,
      const: constVal = 0,
      eng = 0,
      legis = 0,
      ridf = 0,
    } = progress;

    if (pt >= 91 && admin >= 132 && constVal >= 125 && eng >= 33) {
      newPhase = 2;
      if (legis >= 71 && ridf >= 16) {
        newPhase = 3;
      }
    }
    return newPhase;
  }

  static isPhaseBlocked(subjectPhase, currentPhase) {
    return subjectPhase > currentPhase;
  }
}
