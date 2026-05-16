export default class RoadmapView {
  constructor(data) {
    this.data = data;
    this.showCompleted = false;
    this.elementsCache = new Map();
  }

  _getEl(id) {
    const cached = this.elementsCache.get(id);
    if (cached) return cached;
    const el = document.getElementById(id);
    if (el) this.elementsCache.set(id, el);
    return el;
  }

  /**
   * Atualiza progresso de um elemento específico
   * @param {string} elementPrefix - Prefixo do ID do elemento (ex: "ti", "simulados", "pt")
   * @param {number} current - Valor atual
   * @param {number} max - Valor máximo
   * @param {number} hours - Horas calculadas (opcional)
   */
  _updateProgress(elementPrefix, current, max, hours = 0) {
    const percent = Math.round((current / max) * 100);

    const percentEl = this._getEl(`${elementPrefix}-progress-percent`);
    if (percentEl) percentEl.textContent = `${percent}%`;

    const textEl = this._getEl(`${elementPrefix}-progress-text`);
    if (textEl) textEl.textContent = `${current}/${max} (~${hours}h)`;

    const barEl = this._getEl(`${elementPrefix}-progress-bar`);
    if (barEl) barEl.style.width = `${percent}%`;
  }

  /**
   * Atualiza progresso de uma matéria com cálculo de horas
   * @param {string} subjectId - ID da matéria (ex: "pt", "admin", "ti")
   * @param {number} current - Aulas completadas
   * @param {number} max - Total de aulas
   * @param {number} hoursPerLesson - Horas por aula (default: 1)
   */
  _updateSubjectProgress(subjectId, current, max, hoursPerLesson = 1) {
    const percent = Math.round((current / max) * 100);
    const hours = current * hoursPerLesson;

    const textEl = this._getEl(`${subjectId}-text`);
    if (textEl) {
      textEl.textContent = `${current}/${max} (${percent}% - ~${hours}h)`;
    }

    const barEl = this._getEl(`${subjectId}-bar`);
    if (barEl) barEl.style.width = `${percent}%`;
  }

  /**
   * Atualiza a visibilidade e status de um card de matéria
   * @param {string} subjectId - ID da matéria
   * @param {number} percent - Percentual de conclusão (0-100)
   * @param {boolean} isBlocked - Se a matéria está bloqueada
   */
  _updateSubjectCard(subjectId, percent, isBlocked) {
    const card = this._getEl(`tracker-card-${subjectId}`);
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

    const controlsEl = this._getEl(`controls-${subjectId}`);
    if (controlsEl) {
      controlsEl.classList.toggle("opacity-40", isBlocked);
      controlsEl.classList.toggle("pointer-events-none", isBlocked);
      controlsEl.classList.toggle("grayscale", isBlocked);
    }
  }

  renderTrackersHTML() {
    // Limpa o cache porque os elementos filhos serão recriados do zero
    this.elementsCache.clear();
    [1, 2, 3].forEach((phaseNum) => {
      const container = this._getEl(`trackers-phase-${phaseNum}`);
      if (!container) return;
      const subjects = this.data.SUBJECTS_QUEUE.filter(
        (s) => s.phase === phaseNum,
      );
      container.innerHTML = subjects
        .map((sub) => {
          return `
            <div class="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 shadow-sm transition-all duration-300 sm:rounded-2xl sm:p-5" id="tracker-card-${sub.id}">
                <div class="mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm w-full">
                    <span class="min-w-0 font-bold text-white flex items-center gap-2 flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 text-${sub.color}-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        <span class="truncate text-sm sm:text-base leading-tight">${sub.name}</span>
                    </span>
                    <span class="self-start max-w-full shrink-0 rounded border border-${sub.color}-800 bg-${sub.color}-900 px-2 py-0.5 text-[10px] font-bold text-${sub.color}-300 break-words sm:self-auto sm:text-xs" id="${sub.id}-text">0/${sub.max} (0% - ~0h)</span>
                </div>
                <div class="w-full bg-slate-900 rounded-full h-2.5 sm:h-3 mb-4 overflow-hidden border border-slate-700 shadow-inner">
                    <div class="bg-${sub.color}-500 h-full rounded-full transition-all duration-500 ease-out" id="${sub.id}-bar" style="width: 0%"></div>
                </div>
                <div id="controls-${sub.id}" class="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch gap-2 sm:gap-2 transition-all duration-300 w-full">
                    <button data-action="update-subject" data-subject="${sub.id}" data-amount="-1" data-max="${sub.max}" class="col-span-1 min-w-0 px-2 py-2.5 sm:px-3 sm:py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:translate-y-[4px] truncate"><span class="sm:hidden">-1</span><span class="hidden sm:inline">-1 Aula</span></button>
                    <button data-action="update-subject" data-subject="${sub.id}" data-amount="1" data-max="${sub.max}" class="col-span-1 min-w-0 px-2 py-2.5 sm:px-3 sm:py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:translate-y-[4px] truncate"><span class="sm:hidden">+1</span><span class="hidden sm:inline">+1 Aula</span></button>
                    <button data-action="update-subject" data-subject="${sub.id}" data-amount="5" data-max="${sub.max}" class="col-span-1 min-w-0 px-2 py-2.5 sm:px-4 sm:py-1.5 bg-${sub.color}-500 hover:bg-${sub.color}-400 text-white rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#0f172a] active:translate-y-[4px] truncate"><span class="sm:hidden">+5</span><span class="hidden sm:inline">+5 Aulas</span></button>
                    <button data-action="complete-subject" data-subject="${sub.id}" data-name="${sub.name}" data-max="${sub.max}" class="col-span-1 min-w-0 px-2 py-2.5 sm:ml-auto sm:w-auto sm:py-1.5 bg-slate-900 border border-slate-700 hover:bg-black text-slate-300 rounded-lg text-xs font-bold transition-all duration-150 shadow-[0_4px_0_#020617] active:translate-y-[4px] truncate"><span class="sm:hidden">Zerar</span><span class="hidden sm:inline">Zerar ✓</span></button>
                </div>
            </div>
          `;
        })
        .join("");
    });
  }

  toggleCompleted(state) {
    this.showCompleted = !this.showCompleted;
    const btnText = this._getEl("toggle-completed-text");
    const btnIcon = this._getEl("toggle-completed-icon");

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
    this.renderValues(state);
  }

  renderValues(state) {
    const progress = state.progress || {};
    const currentPhase = state.phase || 1;
    const pace = state.pace || 2;
    const studyDates = state.studyDates || [];

    let totalProgress = 0;
    let totalMax = 0;
    let totalHours = 0;

    // Atualizar matérias normais
    this.data.SUBJECTS_QUEUE.forEach((sub) => {
      const current = progress[sub.id] || 0;
      totalProgress += current;
      totalMax += sub.max;
      totalHours += current; // 1 Aula = 1 Hora

      const percent = Math.round((current / sub.max) * 100);
      const isBlocked = sub.phase > currentPhase;

      // Usar novos métodos genéricos
      this._updateSubjectProgress(sub.id, current, sub.max, 1);
      this._updateSubjectCard(sub.id, percent, isBlocked);
    });

    // Função auxiliar para processar Missões Especiais e evitar duplicação de código
    const processSpecialMission = (missionId, hoursPerItem) => {
      const current = progress[missionId] || 0;
      const max = this.data.SPECIAL_MISSIONS[missionId].max;
      totalProgress += current;
      totalMax += max;
      const hours = current * hoursPerItem;
      totalHours += hours;
      this._updateProgress(missionId, current, max, hours);
      return { current, max, hours };
    };

    // Processar "Específicas (TI)" e "Simulados" dinamicamente
    processSpecialMission("ti", 1);
    const simStats = processSpecialMission("simulados", 4);

    // Atualizar progresso global
    const globalPercent =
      totalMax > 0 ? Math.round((totalProgress / totalMax) * 100) : 0;
    if (this._getEl("global-progress-percent")) {
      this._getEl("global-progress-percent").textContent =
        `${globalPercent}% (~${totalHours}h)`;
    }
    if (this._getEl("header-progress-bar")) {
      this._getEl("header-progress-bar").style.width = `${globalPercent}%`;
    }

    // Atualizar estatísticas do modal
    this._updateStatsModal(
      totalProgress,
      totalMax,
      totalHours,
      simStats.current,
      simStats.max,
      pace,
    );

    // Atualiza Heatmap / Gamificação
    const streak = this._calculateStreak(studyDates);
    const streakEl = this._getEl("streak-counter");
    if (streakEl) streakEl.textContent = `${streak} Dias`;
  }

  _calculateStreak(dates) {
    if (!dates || dates.length === 0) return 0;
    const sorted = [...new Set(dates)].sort().reverse();
    let streak = 0;
    let checkDate = new Date();
    checkDate.setHours(0, 0, 0, 0);

    const firstDate = new Date(sorted[0] + "T00:00:00");
    firstDate.setHours(0, 0, 0, 0);

    // Se não estudou hoje nem ontem, perdeu a ofensiva
    if (Math.floor((checkDate - firstDate) / 86400000) > 1) return 0;

    checkDate = firstDate; // Começa a contar de trás para frente a partir do último registro
    for (const dStr of sorted) {
      const d = new Date(dStr + "T00:00:00");
      d.setHours(0, 0, 0, 0);
      if (d.getTime() === checkDate.getTime()) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  /**
   * Atualiza o modal de estatísticas com cálculos de dias e meses restantes
   * @private
   */
  _updateStatsModal(
    totalProgress,
    totalMax,
    totalHours,
    simCurrent,
    simMax,
    pace,
  ) {
    const classesCurrent = totalProgress - simCurrent;
    const classesMax = totalMax - simMax;
    const totalMaxHours = classesMax + simMax * 4; // Aulas normais (1h) + Simulados (4h)
    const remainingHours = Math.max(0, totalMaxHours - totalHours);
    const remainingDays = Math.ceil(remainingHours / pace);
    const remainingMonths = Math.ceil(remainingDays / 30);

    // Elementos do modal
    const updateStatsElement = (elementId, content) => {
      const el = this._getEl(elementId);
      if (el) el.textContent = content;
    };

    updateStatsElement(
      "stats-classes-completed",
      `${classesCurrent} / ${classesMax}`,
    );
    updateStatsElement(
      "stats-hours-completed",
      `${totalHours}h / ${totalMaxHours}h`,
    );
    updateStatsElement(
      "stats-simulados-completed",
      `${simCurrent} / ${simMax}`,
    );
    updateStatsElement(
      "stats-days-remaining",
      `${remainingDays} dias (~${remainingMonths} meses)`,
    );

    // Mostrar/ocultar mensagem de congratulações
    const congratsMsg = this._getEl("stats-congrats-message");
    if (congratsMsg) {
      congratsMsg.classList.toggle("hidden", remainingDays > 0);
    }

    // Atualiza labels de Ritmo no modal e título do herói
    const dynamicPaceModal = this._getEl("dynamic-pace-modal");
    if (dynamicPaceModal) dynamicPaceModal.textContent = `${pace}h`;
    const dynamicPaceTitle = this._getEl("dynamic-pace-title");
    if (dynamicPaceTitle) dynamicPaceTitle.textContent = `${pace}h`;
  }

  updatePhaseUI(currentPhase) {
    const headerPhaseText = this._getEl("header-phase-text");
    if (headerPhaseText) {
      headerPhaseText.textContent = `Fase ${currentPhase}`;
    }

    const p1Badge = this._getEl("phase-1-badge");
    const isP1Active = currentPhase === 1;

    if (p1Badge) {
      p1Badge.textContent = isP1Active ? "Ativa" : "Concluída";
      p1Badge.className = isP1Active
        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider"
        : "bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider";
    }

    // Atualizar fases 2 e 3
    this._updatePhaseState(currentPhase, 2, "indigo", 50);
    this._updatePhaseState(currentPhase, 3, "orange", 40);
  }

  /**
   * Atualiza o estado visual de uma fase específica
   * @param {number} currentPhase - Fase atual do usuário
   * @param {number} phaseNum - Número da fase a atualizar (2 ou 3)
   * @param {string} color - Cor Tailwind da fase (indigo, orange, etc)
   * @param {number} blockedOpacity - Opacidade quando bloqueada (ex: 50 para opacity-50)
   * @private
   */
  _updatePhaseState(currentPhase, phaseNum, color, blockedOpacity) {
    const wrapper = this._getEl(`phase-${phaseNum}-wrapper`);
    const box = this._getEl(`phase-${phaseNum}-box`);
    const badge = this._getEl(`phase-${phaseNum}-badge`);
    const trackersDiv = this._getEl(`trackers-phase-${phaseNum}`);

    if (!wrapper) return;

    if (currentPhase >= phaseNum) {
      // Fase desbloqueada
      wrapper.className = "group opacity-100 transition-opacity duration-300";
      box.className =
        "relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl transition-all duration-500 sm:rounded-3xl sm:p-8";
      if (trackersDiv) trackersDiv.classList.remove("hidden");

      const isActive = currentPhase === phaseNum;
      const phaseLabel =
        isActive && phaseNum === 3
          ? "Reta Final"
          : isActive
            ? "Ativa"
            : "Concluída";

      badge.textContent = phaseLabel;
      badge.className = isActive
        ? `bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`
        : "bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider";
    } else {
      // Fase bloqueada
      wrapper.className = `group opacity-${blockedOpacity} hover:opacity-100 transition-opacity duration-300`;
      box.className =
        "relative overflow-hidden rounded-2xl border-2 border-dashed border-slate-800 bg-slate-900/50 p-4 transition-all duration-500 sm:rounded-3xl sm:p-8";
      if (trackersDiv) trackersDiv.classList.add("hidden");

      badge.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Fase Bloqueada';
      badge.className =
        "bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider inline-flex items-center gap-1.5";
    }
  }

  updateDynamicCycle(progress, currentPhase) {
    const container = this._getEl("dynamic-cycle-list");
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
      .map((sub) => {
        const current = progress[sub.id] || 0;
        const percent = Math.round((current / sub.max) * 100);
        return `
          <div class="flex w-full min-w-0 flex-1 flex-col gap-2 rounded-xl border border-slate-600/50 bg-slate-700/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-[200px]">
            <div class="flex items-center justify-between gap-2">
              <span class="flex items-center gap-2 text-sm font-bold text-slate-200 truncate min-w-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 min-w-[16px] text-${sub.color}-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                <span class="truncate">${sub.name}</span>
              </span>
              <span class="text-xs font-bold text-slate-400 shrink-0 ml-1">${percent}%</span>
            </div>
            <div class="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-700/50 shadow-inner">
              <div class="dynamic-bar bg-${sub.color}-500 h-full rounded-full transition-all duration-1000 ease-out" style="width: 0%" data-width="${percent}%"></div>
            </div>
          </div>
        `;
      })
      .join("");

    this.animateDynamicCycle();
  }

  animateDynamicCycle() {
    const container = this._getEl("dynamic-cycle-list");
    if (!container) return;

    const bars = container.querySelectorAll(".dynamic-bar");
    if (bars.length === 0) return;

    // Reseta todas para 0%
    bars.forEach((bar) => (bar.style.width = "0%"));

    // Força o navegador a recalcular o layout (Reflow) para que ele registre o 0% antes de animar
    void container.offsetWidth;

    // Aplica a largura final definida no data-width, ativando a transição CSS
    bars.forEach((bar) => (bar.style.width = bar.dataset.width));
  }

  celebrateSubjectCompletion() {
    // Efeito de Flash Verde na tela
    const flash = document.createElement("div");
    flash.className =
      "fixed inset-0 z-[9999] bg-emerald-500/40 pointer-events-none transition-opacity duration-500 opacity-100 mix-blend-screen";
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
    const globalProgress = this._getEl("global-progress-percent");
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
