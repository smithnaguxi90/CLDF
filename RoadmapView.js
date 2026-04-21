export default class RoadmapView {
  constructor(data) {
    this.data = data;
    this.showCompleted = false;
  }

  renderTrackersHTML() {
    [1, 2, 3].forEach((phaseNum) => {
      const container = document.getElementById(`trackers-phase-${phaseNum}`);
      if (!container) return;
      const subjects = this.data.SUBJECTS_QUEUE.filter(
        (s) => s.phase === phaseNum,
      );
      container.innerHTML = subjects
        .map((sub) => {
          return `
            <div class="bg-slate-800 border border-slate-700 rounded-2xl p-4 sm:p-5 w-full shadow-sm mb-3 transition-all duration-300" id="tracker-card-${sub.id}">
                <div class="mb-2 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <span class="min-w-0 font-bold text-white flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-${sub.color}-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        <span class="truncate">${sub.name}</span>
                    </span>
                    <span class="self-start shrink-0 text-${sub.color}-300 font-bold bg-${sub.color}-900 border border-${sub.color}-800 px-2 py-0.5 rounded text-[10px] sm:text-xs" id="${sub.id}-text">0/${sub.max} (0% - ~0h)</span>
                </div>
                <div class="w-full bg-slate-900 rounded-full h-3 mb-4 overflow-hidden border border-slate-700 shadow-inner">
                    <div class="bg-${sub.color}-500 h-full rounded-full transition-all duration-500 ease-out" id="${sub.id}-bar" style="width: 0%"></div>
                </div>
                <div id="controls-${sub.id}" class="flex flex-wrap items-stretch gap-2 transition-all duration-300">
                    <button data-action="update-subject" data-subject="${sub.id}" data-amount="-1" data-max="${sub.max}" class="min-w-[72px] flex-1 px-3 py-2.5 sm:flex-none sm:py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:shadow-[0_0_0_#020617] active:translate-y-[4px]">-1</button>
                    <button data-action="update-subject" data-subject="${sub.id}" data-amount="1" data-max="${sub.max}" class="min-w-[72px] flex-1 px-3 py-2.5 sm:flex-none sm:py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:shadow-[0_0_0_#020617] active:translate-y-[4px]">+1</button>
                    <button data-action="update-subject" data-subject="${sub.id}" data-amount="5" data-max="${sub.max}" class="min-w-[72px] sm:min-w-[96px] flex-1 px-4 py-2.5 sm:flex-none sm:py-1.5 bg-${sub.color}-500 hover:bg-${sub.color}-400 text-white rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#0f172a] active:shadow-[0_0_0_#0f172a] active:translate-y-[4px]"><span class="sm:hidden">+5</span><span class="hidden sm:inline">+5 Aulas</span></button>
                    <button data-action="complete-subject" data-subject="${sub.id}" data-name="${sub.name}" data-max="${sub.max}" class="w-full px-3 py-2.5 sm:ml-auto sm:w-auto sm:py-1.5 bg-slate-900 border border-slate-700 hover:bg-black text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:shadow-[0_0_0_#020617] active:translate-y-[4px]"><span class="sm:hidden">Zerar</span><span class="hidden sm:inline">Zerar ✓</span></button>
                </div>
            </div>
          `;
        })
        .join("");
    });
  }

  toggleCompleted(progress, currentPhase) {
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
    this.renderValues(progress, currentPhase);
  }

  renderValues(progress, currentPhase) {
    let totalProgress = 0;
    let totalMax = 0;
    let totalHours = 0;

    this.data.SUBJECTS_QUEUE.forEach((sub) => {
      const current = progress[sub.id] || 0;
      totalProgress += current;
      totalMax += sub.max;
      totalHours += current; // 1 Aula = 1 Hora

      const percent = Math.round((current / sub.max) * 100);
      const textEl = document.getElementById(`${sub.id}-text`);
      const barEl = document.getElementById(`${sub.id}-bar`);
      if (textEl)
        textEl.textContent = `${current}/${sub.max} (${percent}% - ~${current}h)`;
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
        const isBlocked = sub.phase > currentPhase;
        controlsEl.classList.toggle("opacity-40", isBlocked);
        controlsEl.classList.toggle("pointer-events-none", isBlocked);
        controlsEl.classList.toggle("grayscale", isBlocked);
      }
    });

    const tiCurrent = progress["ti"] || 0;
    const tiMax = this.data.SPECIAL_MISSIONS.ti.max;
    totalProgress += tiCurrent;
    totalMax += tiMax;
    totalHours += tiCurrent; // 1 Aula TI = 1 Hora

    const tiPercent = Math.round((tiCurrent / tiMax) * 100);
    if (document.getElementById("ti-progress-percent"))
      document.getElementById("ti-progress-percent").textContent =
        `${tiPercent}%`;
    if (document.getElementById("ti-progress-text"))
      document.getElementById("ti-progress-text").textContent =
        `${tiCurrent}/${tiMax} (~${tiCurrent}h)`;
    if (document.getElementById("ti-progress-bar"))
      document.getElementById("ti-progress-bar").style.width = `${tiPercent}%`;

    const simCurrent = progress["simulados"] || 0;
    const simMax = this.data.SPECIAL_MISSIONS.simulados.max;
    totalProgress += simCurrent;
    totalMax += simMax;

    const simHours = simCurrent * 4; // 1 Simulado = 4 Horas
    totalHours += simHours;

    const simPercent = Math.round((simCurrent / simMax) * 100);
    if (document.getElementById("simulados-progress-percent"))
      document.getElementById("simulados-progress-percent").textContent =
        `${simPercent}%`;
    if (document.getElementById("simulados-progress-text"))
      document.getElementById("simulados-progress-text").textContent =
        `${simCurrent}/${simMax} (~${simHours}h)`;
    if (document.getElementById("simulados-progress-bar"))
      document.getElementById("simulados-progress-bar").style.width =
        `${simPercent}%`;

    const globalPercent =
      totalMax > 0 ? Math.round((totalProgress / totalMax) * 100) : 0;
    if (document.getElementById("global-progress-percent")) {
      document.getElementById("global-progress-percent").textContent =
        `${globalPercent}% (~${totalHours}h)`;
    }
    if (document.getElementById("header-progress-bar")) {
      document.getElementById("header-progress-bar").style.width = `${globalPercent}%`;
    }

    // Atualiza os dados dentro do Modal de Estatísticas
    const classesCurrent = totalProgress - simCurrent;
    const classesMax = totalMax - simMax;
    const totalMaxHours = classesMax + simMax * 4; // Aulas normais (1h) + Simulados (4h)
    const remainingHours = Math.max(0, totalMaxHours - totalHours);
    const remainingDays = Math.ceil(remainingHours / 2); // Ritmo de 2h/dia
    const remainingMonths = Math.ceil(remainingDays / 30);

    if (document.getElementById("stats-classes-completed")) {
      document.getElementById("stats-classes-completed").textContent =
        `${classesCurrent} / ${classesMax}`;
    }
    if (document.getElementById("stats-hours-completed")) {
      document.getElementById("stats-hours-completed").textContent =
        `${totalHours}h / ${totalMaxHours}h`;
    }
    if (document.getElementById("stats-simulados-completed")) {
      document.getElementById("stats-simulados-completed").textContent =
        `${simCurrent} / ${simMax}`;
    }
    if (document.getElementById("stats-days-remaining")) {
      document.getElementById("stats-days-remaining").textContent =
        `${remainingDays} dias (~${remainingMonths} meses)`;
    }

    const congratsMsg = document.getElementById("stats-congrats-message");
    if (congratsMsg) {
      if (remainingDays <= 0) {
        congratsMsg.classList.remove("hidden");
      } else {
        congratsMsg.classList.add("hidden");
      }
    }
  }

  updatePhaseUI(currentPhase) {
    document.getElementById("header-phase-text").textContent =
      `Fase ${currentPhase}`;

    const p1Badge = document.getElementById("phase-1-badge");
    const isP1Active = currentPhase === 1;

    if (p1Badge) {
      p1Badge.textContent = isP1Active ? "Ativa" : "Concluída";
      p1Badge.className = isP1Active
        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
        : "bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider";
    }

    const updateLaterPhase = (phaseNum, color, blockedOpacity) => {
      const wrapper = document.getElementById(`phase-${phaseNum}-wrapper`);
      const box = document.getElementById(`phase-${phaseNum}-box`);
      const badge = document.getElementById(`phase-${phaseNum}-badge`);
      const trackersDiv = document.getElementById(`trackers-phase-${phaseNum}`);

      if (!wrapper) return;

      if (currentPhase >= phaseNum) {
        wrapper.className = "group opacity-100 transition-opacity duration-300";
        box.className = `bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-800 transition-all duration-500 relative overflow-hidden`;
        if (trackersDiv) trackersDiv.classList.remove("hidden");

        const isActive = currentPhase === phaseNum;
        badge.textContent = isActive
          ? phaseNum === 3
            ? "Reta Final"
            : "Ativa"
          : "Concluída";
        badge.className = isActive
          ? `bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`
          : "bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider";
      } else {
        wrapper.className = `group opacity-${blockedOpacity} hover:opacity-100 transition-opacity duration-300`;
        box.className =
          "bg-slate-900/50 p-6 sm:p-8 rounded-3xl border-2 border-slate-800 border-dashed transition-all duration-500 relative overflow-hidden";
        if (trackersDiv) trackersDiv.classList.add("hidden");
        badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Disponível em breve...`;
        badge.className =
          "bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider inline-flex items-center gap-1";
      }
    };

    updateLaterPhase(2, "indigo", 50);
    updateLaterPhase(3, "orange", 40);
  }

  updateDynamicCycle(progress, currentPhase) {
    const container = document.getElementById("dynamic-cycle-list");
    if (!container) return;
    const pending = this.data.SUBJECTS_QUEUE.filter(
      (sub) => (progress[sub.id] || 0) < sub.max && sub.phase <= currentPhase,
    );
    const active = pending.slice(0, 4);
    if (active.length === 0) {
      container.innerHTML = `<span class="block w-full rounded-xl border border-emerald-200 bg-emerald-100 px-4 py-2.5 text-center text-sm font-bold text-emerald-800 shadow-sm">🎉 Edital Básico Zerado! O Gran Cursos agora só precisa de Simulados.</span>`;
      return;
    }

    container.innerHTML = active
      .map(
        (sub) =>
          `<span class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-700 px-4 py-2.5 text-sm font-bold text-slate-200 shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto sm:justify-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-${sub.color}-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>${sub.name}</span>`,
      )
      .join("");
  }

  celebrateSubjectCompletion() {
    // Efeito de Flash Verde na tela
    const flash = document.createElement("div");
    flash.className = "fixed inset-0 z-[9999] bg-emerald-500/40 pointer-events-none transition-opacity duration-500 opacity-100 mix-blend-screen";
    document.body.appendChild(flash);
    
    // Força o navegador a renderizar o elemento antes de iniciar a transição de desaparecimento
    void flash.offsetWidth; 
    flash.classList.replace("opacity-100", "opacity-0");
    setTimeout(() => flash.remove(), 500);

    if (window.confetti) {
      const defaults = {
        origin: { y: 0.7 },
        shapes: ["star", "circle"],
        colors: ["#FFD700", "#10b981", "#3b82f6", "#f97316", "#ec4899"],
        ticks: 200,
      };

      // Sequência de 3 explosões simulando fogos de artifício
      confetti({
        ...defaults,
        particleCount: 80,
        spread: 100,
        startVelocity: 40,
      });
      setTimeout(
        () =>
          confetti({
            ...defaults,
            particleCount: 60,
            spread: 120,
            startVelocity: 55,
          }),
        250,
      );
      setTimeout(
        () =>
          confetti({
            ...defaults,
            particleCount: 40,
            spread: 80,
            startVelocity: 30,
          }),
        500,
      );
    }

    // Anima o indicador de Progresso Global no cabeçalho
    const globalProgress = document.getElementById("global-progress-percent");
    if (globalProgress) {
      globalProgress.classList.add(
        "scale-125",
        "text-emerald-300",
        "drop-shadow-[0_0_8px_#10b981]",
      );
      // Remove o destaque após 600ms para voltar ao normal suavemente
      setTimeout(() => {
        globalProgress.classList.remove(
          "scale-125",
          "text-emerald-300",
          "drop-shadow-[0_0_8px_#10b981]",
        );
      }, 600);
    }
  }

  celebratePhaseUnlock() {
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
  }
}
