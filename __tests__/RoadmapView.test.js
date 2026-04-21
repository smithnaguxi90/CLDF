/**
 * @jest-environment jsdom
 * Testes para RoadmapView.js
 * Testando métodos genéricos _updateProgress(), _updateSubjectProgress(), _updateSubjectCard(), _updatePhaseState()
 */

import RoadmapView from "../RoadmapView.js";

describe("RoadmapView", () => {
  let roadmapView;
  const mockData = {
    SUBJECTS_QUEUE: [
      {
        id: "pt",
        name: "Língua Portuguesa",
        shortName: "Port.",
        max: 91,
        color: "blue",
        phase: 1,
      },
      {
        id: "admin",
        name: "Dir. Administrativo",
        shortName: "Admin.",
        max: 132,
        color: "emerald",
        phase: 1,
      },
    ],
    SPECIAL_MISSIONS: {
      ti: { id: "ti", name: "Específicas (TI)", max: 247, color: "cyan" },
      simulados: {
        id: "simulados",
        name: "Simulados",
        max: 20,
        color: "fuchsia",
      },
    },
  };

  beforeEach(() => {
    // Setup: Criar elementos no DOM
    document.body.innerHTML = `
      <div id="pt-text"></div>
      <div id="pt-bar"></div>
      <div id="tracker-card-pt" class=""></div>
      <div id="controls-pt"></div>

      <div id="admin-text"></div>
      <div id="admin-bar"></div>
      <div id="tracker-card-admin" class=""></div>
      <div id="controls-admin"></div>

      <div id="ti-progress-percent"></div>
      <div id="ti-progress-text"></div>
      <div id="ti-progress-bar"></div>
      <div id="ti-text"></div>

      <div id="simulados-progress-percent"></div>
      <div id="simulados-progress-text"></div>
      <div id="simulados-progress-bar"></div>
      <div id="simulados-text"></div>

      <div id="global-progress-percent"></div>
      <div id="header-progress-bar"></div>

      <div id="stats-classes-completed"></div>
      <div id="stats-hours-completed"></div>
      <div id="stats-simulados-completed"></div>
      <div id="stats-days-remaining"></div>
      <div id="stats-congrats-message" class="hidden"></div>

      <div id="phase-2-wrapper"><div id="phase-2-box"></div><div id="phase-2-badge"></div></div>
      <div id="trackers-phase-2"></div>
      <div id="phase-3-wrapper"><div id="phase-3-box"></div><div id="phase-3-badge"></div></div>
      <div id="trackers-phase-3"></div>
    `;

    roadmapView = new RoadmapView(mockData);
  });

  describe("_updateProgress()", () => {
    it("deve atualizar progresso percentual simples", () => {
      roadmapView._updateProgress("ti", 100, 250);

      const percentEl = document.getElementById("ti-progress-percent");
      const textEl = document.getElementById("ti-progress-text");
      const barEl = document.getElementById("ti-progress-bar");

      expect(percentEl.textContent).toBe("40%");
      expect(textEl.textContent).toBe("100/250");
      expect(barEl.style.width).toBe("40%");
    });

    it("deve arredondar percentual corretamente", () => {
      roadmapView._updateProgress("ti", 123, 247);

      const percentEl = document.getElementById("ti-progress-percent");
      expect(percentEl.textContent).toBe("50%");
    });

    it("deve lidar com progresso zero", () => {
      roadmapView._updateProgress("ti", 0, 247);

      const percentEl = document.getElementById("ti-progress-percent");
      const barEl = document.getElementById("ti-progress-bar");

      expect(percentEl.textContent).toBe("0%");
      expect(barEl.style.width).toBe("0%");
    });

    it("deve lidar com progresso 100%", () => {
      roadmapView._updateProgress("ti", 247, 247);

      const percentEl = document.getElementById("ti-progress-percent");
      expect(percentEl.textContent).toBe("100%");
    });
  });

  describe("_updateSubjectProgress()", () => {
    it("deve atualizar progresso com 1 hora por aula", () => {
      roadmapView._updateSubjectProgress("pt", 45, 91, 1);

      const textEl = document.getElementById("pt-text");
      expect(textEl.textContent).toContain("45/91");
      expect(textEl.textContent).toContain("49%");
      expect(textEl.textContent).toContain("~45h");
    });

    it("deve atualizar progresso com 4 horas por aula (simulados)", () => {
      roadmapView._updateSubjectProgress("simulados", 5, 20, 4);

      const textEl = document.getElementById("simulados-text");
      expect(textEl.textContent).toContain("5/20");
      expect(textEl.textContent).toContain("25%");
      expect(textEl.textContent).toContain("~20h"); // 5 aulas * 4 horas
    });

    it("deve usar default de 1 hora se não especificado", () => {
      roadmapView._updateSubjectProgress("pt", 10, 91);

      const textEl = document.getElementById("pt-text");
      expect(textEl.textContent).toContain("~10h");
    });
  });

  describe("_updateSubjectCard()", () => {
    it("deve ocultar card se conclusão não for 100% e showCompleted for false", () => {
      roadmapView.showCompleted = false;
      roadmapView._updateSubjectCard("pt", 50, false);

      const card = document.getElementById("tracker-card-pt");
      expect(card.classList.contains("hidden")).toBe(false); // Não completo, não oculta
    });

    it("deve adicionar opacity-60 se 100% completo e showCompleted for true", () => {
      roadmapView.showCompleted = true;
      roadmapView._updateSubjectCard("pt", 100, false);

      const card = document.getElementById("tracker-card-pt");
      expect(card.classList.contains("opacity-60")).toBe(true);
      expect(card.classList.contains("hidden")).toBe(false);
    });

    it("deve ocultar card se 100% e showCompleted for false", () => {
      roadmapView.showCompleted = false;
      roadmapView._updateSubjectCard("pt", 100, false);

      const card = document.getElementById("tracker-card-pt");
      expect(card.classList.contains("hidden")).toBe(true);
    });

    it("deve bloquear controles se matéria estiver bloqueada", () => {
      roadmapView._updateSubjectCard("pt", 50, true);

      const controls = document.getElementById("controls-pt");
      expect(controls.classList.contains("opacity-40")).toBe(true);
      expect(controls.classList.contains("pointer-events-none")).toBe(true);
      expect(controls.classList.contains("grayscale")).toBe(true);
    });

    it("deve desbloquear controles se matéria não estiver bloqueada", () => {
      // Primeiro bloquear
      document
        .getElementById("controls-pt")
        .classList.add("opacity-40", "pointer-events-none", "grayscale");

      // Depois desbloquear
      roadmapView._updateSubjectCard("pt", 50, false);

      const controls = document.getElementById("controls-pt");
      expect(controls.classList.contains("opacity-40")).toBe(false);
      expect(controls.classList.contains("pointer-events-none")).toBe(false);
      expect(controls.classList.contains("grayscale")).toBe(false);
    });
  });

  describe("_updatePhaseState()", () => {
    it("deve desbloquear fase 2 quando currentPhase >= 2", () => {
      roadmapView._updatePhaseState(2, 2, "indigo", 50);

      const wrapper = document.getElementById("phase-2-wrapper");
      expect(wrapper.classList.contains("opacity-100")).toBe(true);
      expect(wrapper.classList.contains("group")).toBe(true);
    });

    it("deve bloquear fase 2 quando currentPhase < 2", () => {
      roadmapView._updatePhaseState(1, 2, "indigo", 50);

      const wrapper = document.getElementById("phase-2-wrapper");
      expect(wrapper.classList.contains("opacity-50")).toBe(true);
    });

    it("deve marcar fase como 'Ativa' quando é fase atual", () => {
      roadmapView._updatePhaseState(2, 2, "indigo", 50);

      const badge = document.getElementById("phase-2-badge");
      expect(badge.textContent).toBe("Ativa");
    });

    it("deve marcar fase 3 como 'Reta Final' quando é fase atual", () => {
      roadmapView._updatePhaseState(3, 3, "orange", 40);

      const badge = document.getElementById("phase-3-badge");
      expect(badge.textContent).toBe("Reta Final");
    });

    it("deve marcar fase como 'Concluída' quando currentPhase > phaseNum", () => {
      roadmapView._updatePhaseState(3, 2, "indigo", 50);

      const badge = document.getElementById("phase-2-badge");
      expect(badge.textContent).toBe("Concluída");
    });

    it("deve mostrar trackers quando fase está desbloqueada", () => {
      roadmapView._updatePhaseState(2, 2, "indigo", 50);

      const trackersDiv = document.getElementById("trackers-phase-2");
      expect(trackersDiv.classList.contains("hidden")).toBe(false);
    });

    it("deve ocultar trackers quando fase está bloqueada", () => {
      roadmapView._updatePhaseState(1, 2, "indigo", 50);

      const trackersDiv = document.getElementById("trackers-phase-2");
      expect(trackersDiv.classList.contains("hidden")).toBe(true);
    });

    it("deve mostrar ícone de cadeado quando fase está bloqueada", () => {
      roadmapView._updatePhaseState(1, 2, "indigo", 50);

      const badge = document.getElementById("phase-2-badge");
      expect(badge.innerHTML).toContain("Fase Bloqueada");
      expect(badge.innerHTML).toContain("svg");
    });
  });

  describe("renderValues()", () => {
    it("deve atualizar todos os valores de progresso corretamente", () => {
      const progress = {
        pt: 45,
        admin: 66,
        ti: 100,
        simulados: 5,
      };

      roadmapView.renderValues(progress, 1);

      // Verificar progresso global
      const globalPercent = document.getElementById("global-progress-percent");
      expect(globalPercent.textContent).toContain("%");
    });

    it("deve mostrar mensagem de congratulações quando completado", () => {
      const progress = {
        pt: 91,
        admin: 132,
        ti: 247,
        simulados: 20,
      };

      // Forçar 0 dias restantes
      RoadmapView.STUDY_PACE_HOURS_PER_DAY = 10000; // Valor muito alto

      roadmapView.renderValues(progress, 3);

      const congratsMsg = document.getElementById("stats-congrats-message");
      expect(congratsMsg.classList.contains("hidden")).toBe(false);

      // Restaurar valor original
      RoadmapView.STUDY_PACE_HOURS_PER_DAY = 2;
    });

    it("deve ocultar mensagem de congratulações quando não completado", () => {
      const progress = {
        pt: 45,
        admin: 66,
        ti: 100,
        simulados: 5,
      };

      roadmapView.renderValues(progress, 1);

      const congratsMsg = document.getElementById("stats-congrats-message");
      expect(congratsMsg.classList.contains("hidden")).toBe(true);
    });
  });

  describe("Constante STUDY_PACE_HOURS_PER_DAY", () => {
    it("deve ter valor padrão de 2 horas por dia", () => {
      expect(RoadmapView.STUDY_PACE_HOURS_PER_DAY).toBe(2);
    });

    it("deve ser configurável", () => {
      const originalValue = RoadmapView.STUDY_PACE_HOURS_PER_DAY;
      RoadmapView.STUDY_PACE_HOURS_PER_DAY = 3;
      expect(RoadmapView.STUDY_PACE_HOURS_PER_DAY).toBe(3);
      RoadmapView.STUDY_PACE_HOURS_PER_DAY = originalValue;
    });
  });

  describe("toggleCompleted()", () => {
    it("deve alternar showCompleted entre true e false", () => {
      expect(roadmapView.showCompleted).toBe(false);

      roadmapView.toggleCompleted({}, 1);
      expect(roadmapView.showCompleted).toBe(true);

      roadmapView.toggleCompleted({}, 1);
      expect(roadmapView.showCompleted).toBe(false);
    });
  });
});
