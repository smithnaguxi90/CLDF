export default class RoadmapManager {
  constructor() {
    this.SPECIAL_MISSIONS = {
      ti: { id: "ti", max: 247 },
      simulados: { id: "simulados", max: 20 },
    };
    this.showCompleted = false;

    this.COLORS_MAP = {
      indigo: "bg-indigo-500",
      emerald: "bg-emerald-500",
      orange: "bg-orange-500",
      teal: "bg-teal-500",
    };

    this.SUBJECTS_QUEUE = [
      {
        id: "pt",
        name: "Língua Portuguesa",
        max: 91,
        color: "emerald",
        phase: 1,
      },
      {
        id: "const",
        name: "Dir. Constitucional",
        max: 125,
        color: "teal",
        phase: 1,
      },
      { id: "eng", name: "Língua Inglesa", max: 33, color: "orange", phase: 1 },
      {
        id: "admin",
        name: "Dir. Administrativo",
        max: 132,
        color: "emerald",
        phase: 1,
      },
      {
        id: "legis",
        name: "Processo Legislativo",
        max: 71,
        color: "indigo",
        phase: 2,
      },
      {
        id: "ridf",
        name: "Realidade do DF",
        max: 16,
        color: "indigo",
        phase: 2,
      },
      {
        id: "emo",
        name: "Inteligência Emocional",
        max: 6,
        color: "orange",
        phase: 3,
      },
    ];
  }

  init() {
    if (!App.state.progress) App.state.progress = {};
    this.renderTrackersHTML();
    this.checkAndRender();
  }

  renderTrackersHTML() {
    [1, 2, 3].forEach((phaseNum) => {
      const container = document.getElementById(`trackers-phase-${phaseNum}`);
      if (!container) return;
      const subjects = this.SUBJECTS_QUEUE.filter((s) => s.phase === phaseNum);
      container.innerHTML = subjects
        .map((sub) => {
          return `
            <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-4 w-full shadow-sm mb-3 transition-all duration-300" id="tracker-card-${sub.id}">
                <div class="flex justify-between items-center text-sm mb-2 gap-2">
                    <span class="font-bold text-slate-700 flex items-center gap-2 truncate">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-${sub.color}-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span class="truncate">${sub.name}</span>
                    </span>
                    <span class="shrink-0 text-${sub.color}-700 font-bold bg-${sub.color}-100 px-2 py-0.5 rounded text-[10px] sm:text-xs" id="${sub.id}-text">0/${sub.max} (0%)</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-2 mb-4 overflow-hidden">
                    <div class="bg-${sub.color}-500 h-2 rounded-full transition-all duration-500 ease-out" id="${sub.id}-bar" style="width: 0%"></div>
                </div>
                <div id="controls-${sub.id}" class="flex flex-wrap gap-2 transition-all duration-300">
                    <button onclick="App.roadmap.updateSubject('${sub.id}', -1, ${sub.max})" class="px-3 py-2.5 sm:py-1.5 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 text-slate-600 text-xs font-semibold transition-colors">-1</button>
                    <button onclick="App.roadmap.updateSubject('${sub.id}', 1, ${sub.max})" class="px-3 py-2.5 sm:py-1.5 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 text-slate-600 text-xs font-semibold transition-colors">+1</button>
                    <button onclick="App.roadmap.updateSubject('${sub.id}', 5, ${sub.max})" class="px-3 py-2.5 sm:py-1.5 bg-${sub.color}-50 border border-${sub.color}-200 rounded-lg hover:bg-${sub.color}-100 text-${sub.color}-700 text-xs font-bold transition-colors">+5 Aulas</button>
                    <button onclick="App.roadmap.completeSubject('${sub.id}', '${sub.name}', ${sub.max})" class="px-3 py-2.5 sm:py-1.5 ml-auto bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition-colors">Zerar ✓</button>
                </div>
            </div>
          `;
        })
        .join("");
    });
  }

  updateSubject(id, amount, max) {
    const subject = this.SUBJECTS_QUEUE.find((s) => s.id === id);
    if (subject && subject.phase > App.state.phase) {
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
      if (window.confetti)
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
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
    this.showCompleted = !this.showCompleted;
    const btnText = document.getElementById("toggle-completed-text");
    const btnIcon = document.getElementById("toggle-completed-icon");

    if (btnText) {
      btnText.textContent = this.showCompleted
        ? "Ocultar Concluídas"
        : "Mostrar Concluídas";
    }
    if (btnIcon) {
      if (this.showCompleted) {
        btnIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
      } else {
        btnIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
      }
    }
    this.renderValues();
  }

  checkAndRender() {
    const p = App.state.progress;
    let newPhase = 1;
    if (
      (p.pt || 0) >= 91 &&
      (p.admin || 0) >= 132 &&
      (p.const || 0) >= 125 &&
      (p.eng || 0) >= 33
    ) {
      newPhase = 2;
      if ((p.legis || 0) >= 71 && (p.ridf || 0) >= 16) newPhase = 3;
    }
    if (newPhase > App.state.phase) {
      if (window.confetti) {
        const duration = 3000;
        const end = Date.now() + duration;
        (function frame() {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#10b981", "#14b8a6", "#6366f1", "#f97316"],
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#10b981", "#14b8a6", "#6366f1", "#f97316"],
          });
          if (Date.now() < end) requestAnimationFrame(frame);
        })();
      }
      App.ui.showToast(
        `🎉 DESBLOQUEIO ÉPICO: Acesso Concedido à Fase ${newPhase}!`,
        "success",
      );
    }
    App.state.phase = newPhase;
    App.storage.save(App.state);
    this.renderValues();
    this.updatePhaseUI();
    this.updateDynamicCycle();
    if (App.chartManager) {
      App.chartManager.update(App.state.progress);
    }
  }

  renderValues() {
    let totalProgress = 0;
    let totalMax = 0;

    this.SUBJECTS_QUEUE.forEach((sub) => {
      const current = App.state.progress[sub.id] || 0;
      totalProgress += current;
      totalMax += sub.max;

      const percent = Math.round((current / sub.max) * 100);
      const textEl = document.getElementById(`${sub.id}-text`);
      const barEl = document.getElementById(`${sub.id}-bar`);
      if (textEl) textEl.textContent = `${current}/${sub.max} (${percent}%)`;
      if (barEl) barEl.style.width = `${percent}%`;
      const card = document.getElementById(`tracker-card-${sub.id}`);
      if (card) {
        if (percent === 100) {
          if (this.showCompleted) {
            card.classList.remove("hidden");
            card.classList.add("opacity-60");
          } else {
            card.classList.add("hidden");
            card.classList.remove("opacity-60");
          }
        } else {
          card.classList.remove("opacity-60", "hidden");
        }
      }
      const controlsEl = document.getElementById(`controls-${sub.id}`);
      if (controlsEl) {
        const isBlocked = sub.phase > App.state.phase;
        controlsEl.classList.toggle("opacity-40", isBlocked);
        controlsEl.classList.toggle("pointer-events-none", isBlocked);
        controlsEl.classList.toggle("grayscale", isBlocked);
      }
    });

    const tiCurrent = App.state.progress["ti"] || 0;
    const tiMax = this.SPECIAL_MISSIONS.ti.max;
    totalProgress += tiCurrent;
    totalMax += tiMax;

    const tiPercent = Math.round((tiCurrent / tiMax) * 100);
    if (document.getElementById("ti-progress-percent"))
      document.getElementById("ti-progress-percent").textContent =
        `${tiPercent}%`;
    if (document.getElementById("ti-progress-text"))
      document.getElementById("ti-progress-text").textContent =
        `${tiCurrent}/${tiMax}`;
    if (document.getElementById("ti-progress-bar"))
      document.getElementById("ti-progress-bar").style.width = `${tiPercent}%`;

    const simCurrent = App.state.progress["simulados"] || 0;
    const simMax = this.SPECIAL_MISSIONS.simulados.max;
    totalProgress += simCurrent;
    totalMax += simMax;

    const simPercent = Math.round((simCurrent / simMax) * 100);
    if (document.getElementById("simulados-progress-percent"))
      document.getElementById("simulados-progress-percent").textContent =
        `${simPercent}%`;
    if (document.getElementById("simulados-progress-text"))
      document.getElementById("simulados-progress-text").textContent =
        `${simCurrent}/${simMax}`;
    if (document.getElementById("simulados-progress-bar"))
      document.getElementById("simulados-progress-bar").style.width =
        `${simPercent}%`;

    const globalPercent =
      totalMax > 0 ? Math.round((totalProgress / totalMax) * 100) : 0;
    if (document.getElementById("global-progress-percent")) {
      document.getElementById("global-progress-percent").textContent =
        `${globalPercent}%`;
    }
  }

  updatePhaseUI() {
    const currentPhase = App.state.phase;
    document.getElementById("header-phase-text").textContent =
      `Fase ${currentPhase}`;

    const p1Icon = document.getElementById("phase-1-icon");
    const p1IconMobile = document.getElementById("phase-1-icon-mobile");
    const p1Badge = document.getElementById("phase-1-badge");
    const isP1Active = currentPhase === 1;

    if (p1Icon)
      p1Icon.className = `hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white items-center justify-center font-bold text-lg shadow-lg shadow-emerald-500/30 relative z-10 ring-4 ring-slate-50 transition-all`;
    if (p1IconMobile)
      p1IconMobile.className = `absolute -left-[17px] top-0 flex md:hidden w-8 h-8 rounded-full bg-emerald-600 text-white items-center justify-center font-bold text-sm shadow-md z-10 ring-4 ring-slate-50`;

    p1Badge.textContent = isP1Active ? "Ativa" : "Concluída";
    p1Badge.className = isP1Active
      ? "bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
      : "bg-teal-100 text-teal-800 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider";

    const updateLaterPhase = (phaseNum, color, blockedOpacity) => {
      const wrapper = document.getElementById(`phase-${phaseNum}-wrapper`);
      const box = document.getElementById(`phase-${phaseNum}-box`);
      const badge = document.getElementById(`phase-${phaseNum}-badge`);
      const border = document.getElementById(`phase-${phaseNum}-border`);
      const icon = document.getElementById(`phase-${phaseNum}-icon`);
      const iconMobile = document.getElementById(
        `phase-${phaseNum}-icon-mobile`,
      );

      if (currentPhase >= phaseNum) {
        wrapper.className =
          "flex flex-col md:flex-row gap-6 group opacity-100 transition-opacity duration-300";
        box.className = `flex-1 bg-white p-7 rounded-2xl shadow-md border border-${color}-200 transition-all duration-500 relative overflow-hidden`;
        border.classList.remove("opacity-0");

        if (icon)
          icon.className = `hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-${color}-600 text-white items-center justify-center font-bold text-lg shadow-lg shadow-${color}-500/30 relative z-10 ring-4 ring-slate-50 transition-all`;
        if (iconMobile)
          iconMobile.className = `absolute -left-[17px] top-0 flex md:hidden w-8 h-8 rounded-full bg-${color}-600 text-white items-center justify-center font-bold text-sm shadow-md z-10 ring-4 ring-slate-50`;

        const isActive = currentPhase === phaseNum;
        badge.textContent = isActive
          ? phaseNum === 3
            ? "Reta Final"
            : "Ativa"
          : "Concluída";
        badge.className = isActive
          ? `bg-${color}-100 text-${color}-800 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`
          : "bg-teal-100 text-teal-800 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider";
      } else {
        wrapper.className = `flex flex-col md:flex-row gap-6 group opacity-${blockedOpacity} hover:opacity-100 transition-opacity duration-300`;
        box.className =
          "flex-1 bg-slate-50 p-7 rounded-2xl border-2 border-slate-200 border-dashed transition-all duration-500 relative overflow-hidden";
        badge.textContent = "Bloqueada";
        badge.className =
          "bg-slate-200 text-slate-500 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider";
        border.classList.add("opacity-0");

        if (icon)
          icon.className = `hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-400 items-center justify-center font-bold text-lg relative z-10 ring-4 ring-slate-50 transition-all`;
        if (iconMobile)
          iconMobile.className = `absolute -left-[17px] top-0 flex md:hidden w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-400 items-center justify-center font-bold text-sm shadow-sm z-10 ring-4 ring-slate-50`;
      }
    };

    updateLaterPhase(2, "indigo", 50);
    updateLaterPhase(3, "orange", 40);
  }

  updateDynamicCycle() {
    const container = document.getElementById("dynamic-cycle-list");
    if (!container) return;
    const pending = this.SUBJECTS_QUEUE.filter(
      (sub) => (App.state.progress[sub.id] || 0) < sub.max,
    );
    const active = pending.slice(0, 4);
    if (active.length === 0) {
      container.innerHTML = `<span class="bg-emerald-100 text-emerald-800 border border-emerald-200 text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm">🎉 Edital Básico Zerado! O Gran Cursos agora só precisa de Simulados.</span>`;
      return;
    }

    container.innerHTML = active
      .map(
        (sub) =>
          `<span class="bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-transform hover:-translate-y-0.5"><span class="w-2.5 h-2.5 rounded-full ${this.COLORS_MAP[sub.color]} shadow-sm"></span>${sub.name}</span>`,
      )
      .join("");
  }
}
