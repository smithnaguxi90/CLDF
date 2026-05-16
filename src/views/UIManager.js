import { playSound } from "../utils/audioUtils.js";

export default class UIManager {
  constructor() {
    this.toastContainer = document.getElementById("toast-container");
    this.backToTopBtn = document.getElementById("back-to-top");
    this.header = document.querySelector("header");
    this.initScrollListener();
    this.initWheelScrollFallback();
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
        selector: ":first-child",
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
        selector: ":first-child",
        hideClasses: "scale-95",
        showClasses: "scale-100",
      },
      delay: 300,
    });
  }

  initScrollListener() {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      // Previne o "pulo" do header causado pelo efeito elástico (rubber-band) do Safari
      if (
        currentScrollY < 0 ||
        currentScrollY + window.innerHeight >
          document.documentElement.scrollHeight
      ) {
        return;
      }

      // Lógica do Header Inteligente (Smart Header)
      if (this.header) {
        if (currentScrollY > 80) {
          if (currentScrollY > lastScrollY) {
            // Rolando para baixo: Esconde o header suavemente
            this.header.style.transform = "translateY(-100%)";
          } else {
            // Rolando para cima: Mostra o header
            this.header.style.transform = "translateY(0)";
          }
        } else {
          // No topo da página: Garante que o header esteja visível
          this.header.style.transform = "translateY(0)";
        }
      }

      lastScrollY = currentScrollY;

      if (!this.backToTopBtn) return;

      // Lógica do botão Voltar ao Topo
      if (currentScrollY > 400) {
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

  initWheelScrollFallback() {
    const overlaySelector = "#auth-overlay, #loading-overlay, #stats-modal";
    const wheelTargets = document.querySelectorAll(
      `${overlaySelector}, #auth-overlay > *, #loading-overlay > *, #stats-modal > *`,
    );

    const canScrollElement = (element, deltaY) => {
      if (
        !element ||
        element === document.body ||
        element === document.documentElement
      ) {
        return false;
      }

      const style = window.getComputedStyle(element);
      const allowsScroll = /(auto|scroll|overlay)/.test(style.overflowY);
      if (!allowsScroll || element.scrollHeight <= element.clientHeight) {
        return false;
      }

      if (deltaY > 0) {
        return element.scrollTop + element.clientHeight < element.scrollHeight;
      }

      return element.scrollTop > 0;
    };

    const hasScrollableParent = (target, deltaY, boundary) => {
      let current = target;

      while (current && current !== boundary) {
        if (canScrollElement(current, deltaY)) {
          return true;
        }

        current = current.parentElement;
      }

      return canScrollElement(boundary, deltaY);
    };

    const handleWheel = (event) => {
      const overlay = event.target?.closest?.(overlaySelector);
      if (!overlay || overlay.classList.contains("hidden")) return;
      if (hasScrollableParent(event.target, event.deltaY, overlay)) return;

      window.scrollBy({ top: event.deltaY, behavior: "auto" });
      event.preventDefault();
    };

    wheelTargets.forEach((element) => {
      element.addEventListener("wheel", handleWheel, {
        capture: true,
        passive: false,
      });
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

  playBeep() {
    playSound({
      type: "sine",
      frequencies: [880],
      initialGain: 0.05,
      duration: 0.1,
    });
  }

  playPowerUpSound() {
    playSound({
      type: "sine",
      frequencies: [200, 800],
      initialGain: 0.1,
      duration: 0.3,
    });
  }

  playSuccessSound() {
    // Arpejo de vitória (Dó Maior: C5 -> E5 -> G5 -> C6)
    playSound({
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

  playTimerEndSound() {
    // Som suave e relaxante indicando fim do foco (Acorde longo)
    playSound({
      type: "triangle",
      frequencyTimes: [
        { frequency: 523.25, time: 0 }, // Dó (C5)
        { frequency: 659.25, time: 0.1 }, // Mi (E5)
        { frequency: 783.99, time: 0.2 }, // Sol (G5)
        { frequency: 1046.5, time: 0.4 }, // Dó alto (C6)
      ],
      initialGain: 0.08,
      duration: 1.5,
    });
  }

  playErrorSound() {
    playSound({
      type: "square",
      frequencies: [150, 80],
      initialGain: 0.05,
      duration: 0.2,
    });

    // Mantém o efeito visual exclusivo da UI
    document.body.classList.add("animate-shake");
    setTimeout(() => document.body.classList.remove("animate-shake"), 400);
  }
}
