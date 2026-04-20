import FirestoreManager from "./FirestoreManager.js";
import AuthManager from "./AuthManager.js";
import UIManager from "./UIManager.js";
import ChartManager from "./ChartManager.js";
import RoadmapManager from "./RoadmapManager.js";
import { registerSW } from "virtual:pwa-register";
import ParticlesManager from "./ParticlesManager.js";

export const App = {
  config: { storageKey: "cldfStudyEngine_v1" },
  state: null,
  storage: null,
  ui: null,
  roadmap: null,
  chartManager: null,
  auth: null,
  particles: null,
  async init() {
    // Evita que a inicialização ocorra mais de uma vez
    if (window._isAppInitialized) return;
    window._isAppInitialized = true;

    // Exemplo de uso da variável de ambiente definida no .env
    console.log(
      `${import.meta.env.VITE_APP_TITLE} - Versão: ${import.meta.env.VITE_APP_VERSION}`,
    );

    this.ui = new UIManager();
    this.roadmap = new RoadmapManager(this);
    const radarCtx = document.getElementById("radarChart")?.getContext("2d");
    const barCtx = document.getElementById("barChart")?.getContext("2d");
    const doughnutCtx = document
      .getElementById("doughnutChart")
      ?.getContext("2d");
    if (radarCtx || barCtx || doughnutCtx) {
      this.chartManager = new ChartManager(
        radarCtx,
        barCtx,
        doughnutCtx,
        [],
        this.ui,
      );
    }

    // Inicializa a animação de fundo estilo jogo
    this.particles = new ParticlesManager("particles-canvas");

    // Aguarda o status da autenticação antes de carregar a tela
    this.auth = new AuthManager(async (user) => {
      if (user) {
        this.ui.hideAuth();
        this.storage = new FirestoreManager(
          this.config.storageKey,
          user.uid,
          this.ui,
        );
        this.state = await this.storage.load();
        this.roadmap.init();
        this.ui.switchTab("cycle-a");
        this.ui.hideLoading();
        this.setupPWA();
      } else {
        this.ui.showAuth();
        this.ui.hideLoading();
      }
    });

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
  async factoryReset() {
    if (
      confirm(
        "ATENÇÃO: Isso apagará TODO o seu progresso e restaurará a aplicação para o estado inicial. Deseja continuar?",
      )
    ) {
      await this.storage.clear();
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
      // Fechar modal de estatísticas ao clicar no fundo embaçado
      if (e.target.id === "stats-modal") {
        this.ui.closeStatsModal();
        return;
      }

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
        if (this.chartManager) this.chartManager.downloadRadarChart();
      } else if (action === "open-stats") {
        this.ui.openStatsModal();
      } else if (action === "close-stats") {
        this.ui.closeStatsModal();
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
      } else if (action === "login") {
        const email = document.getElementById("auth-email").value;
        const pass = document.getElementById("auth-password").value;
        if (!email || !pass)
          return this.ui.showToast("Preencha todos os campos.", "error");
        if (email.toLowerCase() !== "jefferson.araujo@camara.leg.br")
          return this.ui.showToast(
            "Acesso restrito ao administrador do sistema.",
            "error",
          );

        this.ui.showToast("Autenticando...", "success");
        this.auth.login(email, pass).catch((err) => {
          console.error(err);
          this.ui.showToast("Erro: Credenciais inválidas.", "error");
        });
      } else if (action === "register") {
        const email = document.getElementById("auth-email").value;
        const pass = document.getElementById("auth-password").value;
        if (!email || !pass)
          return this.ui.showToast("Preencha todos os campos.", "error");
        if (email.toLowerCase() !== "jefferson.araujo@camara.leg.br")
          return this.ui.showToast(
            "Criação de conta restrita ao administrador.",
            "error",
          );
        if (pass.length < 6)
          return this.ui.showToast(
            "A senha precisa de pelo menos 6 caracteres.",
            "error",
          );

        this.ui.showToast("Criando conta...", "success");
        this.auth
          .register(email, pass)
          .then(() => this.ui.showToast("Conta criada com sucesso!", "success"))
          .catch((err) => {
            console.error(err);
            this.ui.showToast(
              "Erro ao criar conta. Tente outro e-mail.",
              "error",
            );
          });
      } else if (action === "logout") {
        if (confirm("Tem certeza que deseja sair?")) {
          this.auth.logout();
        }
      }
    });

    document.addEventListener("change", (e) => {
      const target = e.target.closest("[data-action]");
      if (!target || target.dataset.action !== "import-data") return;
      this.importData(e);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const statsModal = document.getElementById("stats-modal");
        if (statsModal && !statsModal.classList.contains("hidden")) {
          this.ui.closeStatsModal();
        }
      }
    });
  },
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    App.init();
  });
} else {
  App.init();
}
