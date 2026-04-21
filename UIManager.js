export default class UIManager {
  constructor() {
    this.toastContainer = document.getElementById("toast-container");
    this.backToTopBtn = document.getElementById("back-to-top");
    this.header = document.querySelector("header");
    this.initScrollListener();
    this.initNetworkListeners();
  }

  hideLoading() {
    const overlay = document.getElementById("loading-overlay");
    if (overlay) {
      overlay.classList.add("opacity-0");
      setTimeout(() => {
        overlay.classList.add("hidden");
        overlay.classList.remove("flex");
      }, 500); // Tempo correspondente à duração da transição
    }
  }

  showAuth() {
    const authOverlay = document.getElementById("auth-overlay");
    if (authOverlay) {
      authOverlay.classList.remove("hidden");
      authOverlay.classList.add("flex");
    }
  }

  hideAuth() {
    const authOverlay = document.getElementById("auth-overlay");
    if (authOverlay) {
      authOverlay.classList.add("hidden");
      authOverlay.classList.remove("flex");
    }
  }

  showSaving() {
    const syncStatus = document.getElementById("sync-status");
    if (syncStatus) {
      syncStatus.classList.remove("hidden");
      syncStatus.classList.add("flex");
    }
  }

  hideSaving() {
    const syncStatus = document.getElementById("sync-status");
    if (syncStatus) {
      syncStatus.classList.add("hidden");
      syncStatus.classList.remove("flex");
    }
  }

  openStatsModal() {
    const modal = document.getElementById("stats-modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      setTimeout(() => {
        modal.classList.remove("opacity-0");
        modal.firstElementChild.classList.remove("scale-95");
        modal.firstElementChild.classList.add("scale-100");
      }, 10); // Transição suave Tailwind
    }
  }

  closeStatsModal() {
    const modal = document.getElementById("stats-modal");
    if (modal) {
      modal.classList.add("opacity-0");
      modal.firstElementChild.classList.remove("scale-100");
      modal.firstElementChild.classList.add("scale-95");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }, 300); // Espera a animação terminar
    }
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
        btn.className = `shrink-0 whitespace-nowrap w-[80%] sm:w-full rounded-xl border border-emerald-500 bg-emerald-500/10 px-4 py-3 sm:py-4 text-center text-sm sm:text-base font-bold leading-tight text-emerald-400 shadow-sm transition-all focus:outline-none`;
        content.classList.remove("hidden");
        content.classList.add("animate-fade-in");
      } else {
        btn.className = `shrink-0 whitespace-nowrap w-[80%] sm:w-full rounded-xl border border-transparent bg-transparent px-4 py-3 sm:py-4 text-center text-sm sm:text-base font-medium leading-tight text-slate-500 transition-all hover:bg-slate-800/50 hover:text-slate-300 focus:outline-none`;
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

  playBeep() {
    try {
      const ctx = this._initAudioCtx();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = "sine"; // Som suave e limpo
      oscillator.frequency.setValueAtTime(880, ctx.currentTime); // Frequência do bipe (Nota A5)
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // Volume bem baixo (5%)
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1); // Duração de 100ms

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.1);
    } catch {
      // Ignora silenciosamente se o navegador bloquear o áudio
    }
  }

  playPowerUpSound() {
    try {
      const ctx = this._initAudioCtx();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = "sine";
      const now = ctx.currentTime;

      // Efeito de "carregamento": a frequência sobe rapidamente de 200Hz para 800Hz
      oscillator.frequency.setValueAtTime(200, now);
      oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.3);

      gainNode.gain.setValueAtTime(0.1, now); // Volume um pouco mais destacado (10%)
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3); // Fade out suave em 300ms

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.3);
    } catch {}
  }

  playSuccessSound() {
    try {
      const ctx = this._initAudioCtx();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = "sine";
      const now = ctx.currentTime;

      // Arpejo de vitória (Dó Maior: C5 -> E5 -> G5 -> C6)
      oscillator.frequency.setValueAtTime(523.25, now);
      oscillator.frequency.setValueAtTime(659.25, now + 0.1);
      oscillator.frequency.setValueAtTime(783.99, now + 0.2);
      oscillator.frequency.setValueAtTime(1046.5, now + 0.3);

      gainNode.gain.setValueAtTime(0.08, now); // Volume um pouco mais alto que o bipe padrão
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.8); // Duração de quase 1 segundo com fade out

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.8);
    } catch {}
  }

  playErrorSound() {
    // Efeito visual de tremida (shake)
    document.body.classList.add("animate-shake");
    setTimeout(() => document.body.classList.remove("animate-shake"), 400);

    try {
      const ctx = this._initAudioCtx();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = "square"; // Som mais áspero para erro
      const now = ctx.currentTime;

      // Frequência baixa caindo rapidamente (150Hz -> 80Hz)
      oscillator.frequency.setValueAtTime(150, now);
      oscillator.frequency.exponentialRampToValueAtTime(80, now + 0.2);

      gainNode.gain.setValueAtTime(0.05, now); // Volume contido (5%)
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2); // Curto e seco

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.2);
    } catch {}
  }
}
