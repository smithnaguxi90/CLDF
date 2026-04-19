import StorageManager from "./StorageManager.js";
import UIManager from "./UIManager.js";
import ChartManager from "./ChartManager.js";
import RoadmapManager from "./RoadmapManager.js";

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
    const radarSubjects = this.roadmap.SUBJECTS_QUEUE;
    const radarCtx = document.getElementById("radarChart")?.getContext("2d");
    if (radarCtx) {
      this.chartManager = new ChartManager(radarCtx, radarSubjects);
    }
    this.state = this.storage.load();
    this.roadmap.init();
    this.ui.switchTab("cycle-a");
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
