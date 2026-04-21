export default class UIManager {
  constructor() {
    this.toastContainer = document.getElementById("toast-container");
    this.backToTopBtn = document.getElementById("back-to-top");
    this.header = document.querySelector("header");
    this.audioCtx = null; // Inicializar como null
    this.initScrollListener();
    this.initNetworkListeners();
  }

  /**
   * Método genérico para mostrar/ocultar elementos com classes CSS
   * @param {string} elementId - ID do elemento
   * @param {boolean} show - true para mostrar, false para ocultar
   * @param {Object} options - Opções de animação
   * @param {number} options.delay - Delay antes de aplicar hide (em ms)
   * @param {Object} options.child - Configurar element filho (ex: {selector: '.child', show: true})
   */
  _toggleElement(elementId, show = true, options = {}) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const delay = options.delay || 0;
    const child = options.child;

    if (show) {
      element.classList.remove("hidden", "opacity-0");
      element.classList.add("flex", "opacity-100");

      if (child && child.show) {
        setTimeout(() => {
          const childEl = element.querySelector(child.selector);
          if (childEl) {
            childEl.classList.remove(child.hideClasses || "");
            childEl.classList.add(child.showClasses || "");
          }
        }, child.delay || 10);
      }
    } else {
      element.classList.add("opacity-0");

      if (child && !child.show) {
        const childEl = element.querySelector(child.selector);
        if (childEl) {
          childEl.classList.add(child.hideClasses || "");
          childEl.classList.remove(child.showClasses || "");
        }
      }

      setTimeout(() => {
        element.classList.add("hidden");
        element.classList.remove("flex", "opacity-100");
      }, delay);
    }
  }

  hideLoading() {
    this._toggleElement("loading-overlay", false, { delay: 500 });
  }

  showAuth() {
    this._toggleElement("auth-overlay", true);
  }

  hideAuth() {
    this._toggleElement("auth-overlay", false);
  }

  showSaving() {
    this._toggleElement("sync-status", true);
  }

  hideSaving() {
    this._toggleElement("sync-status", false);
  }

  openStatsModal() {
    this._toggleElement("stats-modal", true, {
      child: {
        show: true,
        selector: ".firstElementChild",
        showClasses: "scale-100",
        hideClasses: "scale-95",
        delay: 10,
      },
    });
  }

  closeStatsModal() {
    this._toggleElement("stats-modal", false, {
      child: {
        show: false,
        selector: ".firstElementChild",
        hideClasses: "scale-95",
        showClasses: "scale-100",
      },
      delay: 300,
    });
  }

  initScrollListener() {
    window.addEventListener("scroll", () => {
      if (!this.backToTopBtn) return;

      if (window.scrollY > 400) {
        this.backToTopBtn.classList.remove(
          "opacity-0",
          "pointer-events-none",
          "translate-y-4",
        );
        this.backToTopBtn.classList.add(
          "opacity-100",
          "pointer-events-auto",
          "translate-y-0",
        );
      } else {
        this.backToTopBtn.classList.add(
          "opacity-0",
          "pointer-events-none",
          "translate-y-4",
        );
        this.backToTopBtn.classList.remove(
          "opacity-100",
          "pointer-events-auto",
          "translate-y-0",
        );
      }
    });
  }
  scrollTo(id) {
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top:
          el.getBoundingClientRect().top +
          window.scrollY -
          (this.header?.offsetHeight ?? 80) -
          16,
        behavior: "smooth",
      });
  }

  initNetworkListeners() {
    const dot = document.getElementById("network-status-dot");
    const text = document.getElementById("network-status-text");

    const updateNetworkStatus = () => {
      if (navigator.onLine) {
        if (dot)
          dot.className =
            "w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_6px_#10b981]";
        if (text) text.textContent = "Sistema Operacional";
      } else {
        if (dot)
          dot.className =
            "w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_6px_#e11d48] animate-pulse";
        if (text) text.textContent = "Modo Offline";
      }
    };

    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    // Executa uma vez ao carregar para pegar o status atual
    updateNetworkStatus();
  }

  switchTab(tabId) {
    ["cycle-a", "cycle-b", "cycle-c"].forEach((id) => {
      const btn = document.getElementById(`tab-${id}`);
      const content = document.getElementById(`content-${id}`);
      if (!btn || !content) return;
      if (id === tabId) {
        btn.className = `w-full min-w-0 rounded-xl border border-emerald-500 bg-emerald-500/10 px-4 py-3 sm:py-4 text-center text-sm sm:text-base font-bold leading-tight text-emerald-400 shadow-sm transition-all focus:outline-none`;
        content.classList.remove("hidden");
        content.classList.add("animate-fade-in");
      } else {
        btn.className = `w-full min-w-0 rounded-xl border border-transparent bg-transparent px-4 py-3 sm:py-4 text-center text-sm sm:text-base font-medium leading-tight text-slate-500 transition-all hover:bg-slate-800/50 hover:text-slate-300 focus:outline-none`;
        content.classList.add("hidden");
        content.classList.remove("animate-fade-in");
      }
    });
  }
  showToast(message, type = "success") {
    if (!this.toastContainer) return;

    const toast = document.createElement("div");
    const isSuccess = type === "success";
    toast.className = `animate-toast-enter flex items-center gap-3 p-4 rounded-xl shadow-xl border backdrop-blur-md ${isSuccess ? "bg-emerald-900/90 border-emerald-800 text-emerald-100" : "bg-rose-900/90 border-rose-800 text-rose-100"}`;
    toast.innerHTML = `<p class="text-sm font-semibold">${message}</p>`;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.replace("animate-toast-enter", "animate-toast-leave");
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  _initAudioCtx() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Método genérico para reproduzir sons
   * @param {Object} config - Configuração do som
   * @param {string} config.type - Tipo de oscilador: 'sine', 'square', 'triangle', 'sawtooth'
   * @param {Array} config.frequencies - Array de frequências [valor inicial, valor final] ou [freq1, freq2, ...]
   * @param {Array} config.frequencyTimes - Tempos de mudança de frequência
   * @param {number} config.initialGain - Volume inicial (0-1)
   * @param {number} config.duration - Duração em segundos
   * @param {Object} config.shakeConfig - Opcional: {duration} para adicionar animação de tremida
   */
  _playSound(config = {}) {
    try {
      const ctx = this._initAudioCtx();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      const type = config.type || "sine";
      const initialGain = config.initialGain || 0.05;
      const duration = config.duration || 0.1;
      const now = ctx.currentTime;

      oscillator.type = type;

      // Configurar frequências
      if (config.frequencies && config.frequencies.length === 1) {
        // Frequência única
        oscillator.frequency.setValueAtTime(config.frequencies[0], now);
      } else if (config.frequencies && config.frequencies.length === 2) {
        // Transição de uma frequência para outra
        oscillator.frequency.setValueAtTime(config.frequencies[0], now);
        oscillator.frequency.exponentialRampToValueAtTime(
          config.frequencies[1],
          now + duration,
        );
      } else if (config.frequencyTimes && config.frequencyTimes.length > 0) {
        // Múltiplas frequências em tempos específicos (para arpejos)
        config.frequencyTimes.forEach((freqData, index) => {
          oscillator.frequency.setValueAtTime(
            freqData.frequency,
            now + freqData.time,
          );
        });
      }

      // Configurar gain (volume)
      gainNode.gain.setValueAtTime(initialGain, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.start(now);
      oscillator.stop(now + duration);

      // Aplicar efeito visual de shake se configurado
      if (config.shakeConfig) {
        document.body.classList.add("animate-shake");
        setTimeout(
          () => document.body.classList.remove("animate-shake"),
          (config.shakeConfig.duration || 0.4) * 1000,
        );
      }
    } catch {
      // Ignora silenciosamente se o navegador bloquear o áudio
    }
  }

  playBeep() {
    this._playSound({
      type: "sine",
      frequencies: [880],
      initialGain: 0.05,
      duration: 0.1,
    });
  }

  playPowerUpSound() {
    this._playSound({
      type: "sine",
      frequencies: [200, 800],
      initialGain: 0.1,
      duration: 0.3,
    });
  }

  playSuccessSound() {
    // Arpejo de vitória (Dó Maior: C5 -> E5 -> G5 -> C6)
    this._playSound({
      type: "sine",
      frequencyTimes: [
        { frequency: 523.25, time: 0 },
        { frequency: 659.25, time: 0.1 },
        { frequency: 783.99, time: 0.2 },
        { frequency: 1046.5, time: 0.3 },
      ],
      initialGain: 0.08,
      duration: 0.8,
    });
  }

  playErrorSound() {
    this._playSound({
      type: "square",
      frequencies: [150, 80],
      initialGain: 0.05,
      duration: 0.2,
      shakeConfig: { duration: 0.4 },
    });
  }
}
