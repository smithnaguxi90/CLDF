import StorageManager from "./StorageManager.js";
import UIManager from "./UIManager.js";
import ChartManager from "./ChartManager.js";
import RoadmapManager from "./RoadmapManager.js";
import { registerSW } from "virtual:pwa-register";

export const App = {
  config: { storageKey: "cldfStudyEngine_v1" },
  state: null,
  storage: null,
  ui: null,
  roadmap: null,
  chartManager: null,
  init() {
    // Evita que a inicialização ocorra mais de uma vez
    if (window._isAppInitialized) return;
    window._isAppInitialized = true;

    // Exemplo de uso da variável de ambiente definida no .env
    console.log(
      `${import.meta.env.VITE_APP_TITLE} - Versão: ${import.meta.env.VITE_APP_VERSION}`,
    );

    this.storage = new StorageManager(this.config.storageKey);
    this.ui = new UIManager();
    this.roadmap = new RoadmapManager();
    const radarCtx = document.getElementById("radarChart")?.getContext("2d");
    const barCtx = document.getElementById("barChart")?.getContext("2d");
    if (radarCtx || barCtx) {
      this.chartManager = new ChartManager(radarCtx, barCtx, []);
    }
    this.state = this.storage.load();
    this.roadmap.init();
    this.ui.switchTab("cycle-a");
    this.setupPWA();
    this.setupEventListeners();
  },
  exportData() {
    this.storage.exportFile(this.state);
    this.ui.showToast("Backup baixado com sucesso!");
  },
  importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    this.storage.importFile(file, (newState) => {
      this.state = newState;
      this.roadmap.checkAndRender();
      this.ui.showToast("Progresso restaurado!");
    });
    event.target.value = "";
  },
  factoryReset() {
    if (
      confirm(
        "ATENÇÃO: Isso apagará TODO o seu progresso e restaurará a aplicação para o estado inicial. Deseja continuar?",
      )
    ) {
      localStorage.removeItem(this.config.storageKey);
      window.location.reload();
    }
  },
  clearCache() {
    if (
      confirm(
        "Deseja limpar o cache do sistema? Isso resolverá problemas de atualização ou lentidão. (Seu progresso NÃO será perdido).",
      )
    ) {
      if ("caches" in window) {
        caches.keys().then((names) => {
          for (const name of names) caches.delete(name);
        });
      }
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) registration.unregister();
        });
      }
      this.ui.showToast("Cache limpo! Recarregando...", "success");
      setTimeout(() => window.location.reload(), 1500);
    }
  },
  setupPWA() {
    if ("serviceWorker" in navigator) {
      const updateSW = registerSW({
        onNeedRefresh() {
          const toast = document.getElementById("pwa-update-toast");
          if (toast) {
            toast.classList.remove("hidden");
            toast.classList.add("flex");

            document.getElementById("pwa-update-btn").onclick = () => {
              updateSW(true);
            };

            document.getElementById("pwa-close-btn").onclick = () => {
              toast.classList.add("hidden");
              toast.classList.remove("flex");
            };
          }
        },
        onOfflineReady: () => {
          this.ui.showToast("App pronto para uso offline!", "success");
        },
      });
    }
  },
  setupEventListeners() {
    document.addEventListener("click", (e) => {
      const target = e.target.closest("[data-action]");
      if (!target) return;

      const action = target.dataset.action;

      if (action === "scroll-top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (action === "scroll-to") {
        this.ui.scrollTo(target.dataset.target);
      } else if (action === "switch-tab") {
        this.ui.switchTab(target.dataset.tab);
      } else if (action === "export-data") {
        this.exportData();
      } else if (action === "factory-reset") {
        this.factoryReset();
      } else if (action === "clear-cache") {
        this.clearCache();
      } else if (action === "download-chart") {
        if (this.chartManager) this.chartManager.downloadChart();
      } else if (action === "toggle-completed") {
        this.roadmap.toggleCompleted();
      } else if (action === "update-subject") {
        this.roadmap.updateSubject(
          target.dataset.subject,
          parseInt(target.dataset.amount, 10),
          parseInt(target.dataset.max, 10),
        );
      } else if (action === "complete-subject") {
        this.roadmap.completeSubject(
          target.dataset.subject,
          target.dataset.name,
          parseInt(target.dataset.max, 10),
        );
      }
    });

    document.addEventListener("change", (e) => {
      const target = e.target.closest("[data-action]");
      if (!target && target?.dataset?.action !== "import-data") return;
      this.importData(e);
    });
  },
};

// Truque fundamental: expõe a App globalmente para que os botões (onclick="App...") no HTML continuem funcionando
window.App = App;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    App.init();
  });
} else {
  App.init();
}
