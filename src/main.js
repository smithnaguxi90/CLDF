import FirestoreManager from "./services/FirestoreManager.js";
import AuthManager from "./services/AuthManager.js";
import UIManager from "./views/UIManager.js";
import ChartManager from "./views/ChartManager.js";
import RoadmapManager from "./core/RoadmapManager.js";
import { registerSW } from "virtual:pwa-register";
import { downloadJSON, readJSON } from "./utils/fileUtils.js";
import TimerManager from "./utils/TimerManager.js";

export const App = {
  config: { storageKey: "cldfStudyEngine_v1" },
  storage: null,
  ui: null,
  roadmap: null,
  chartManager: null,
  auth: null,
  timer: null,
  async init() {
    // Evita que a inicialização ocorra mais de uma vez
    if (window._isAppInitialized) return;
    window._isAppInitialized = true;

    // Exemplo de uso da variável de ambiente definida no .env
    console.log(
      `${import.meta.env.VITE_APP_TITLE} - Versão: ${import.meta.env.VITE_APP_VERSION}`,
    );

    this.ui = new UIManager();
    this.timer = new TimerManager(this.ui);
    this.roadmap = new RoadmapManager(this);
    const radarCtx = document.getElementById("radarChart")?.getContext("2d");
    const barCtx = document.getElementById("barChart")?.getContext("2d");
    const doughnutCtx = document
      .getElementById("doughnutChart")
      ?.getContext("2d");
    const lineCtx = document.getElementById("lineChart")?.getContext("2d");
    if (radarCtx || barCtx || doughnutCtx || lineCtx) {
      this.chartManager = new ChartManager(
        radarCtx,
        barCtx,
        doughnutCtx,
        lineCtx,
        [],
        this.ui,
      );
    }

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
    downloadJSON(this.state, "cldf_backup");
    this.ui.showToast("Backup baixado com sucesso!");
  },
  async importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const newState = await readJSON(file);
      await this.storage.save(newState);
      this.state = newState;
      this.roadmap.checkAndRender();
      this.ui.showToast("Progresso restaurado!");
    } catch (error) {
      alert(error.message);
    }
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
    const actions = {
      "timer-start": () => this.timer.start(),
      "timer-pause": () => this.timer.pause(),
      "timer-reset": () => this.timer.reset(),
      "scroll-top": () => window.scrollTo({ top: 0, behavior: "smooth" }),
      "scroll-to": (target) => this.ui.scrollTo(target.dataset.target),
      "switch-tab": (target) => {
        this.ui.switchTab(target.dataset.tab);
        if (target.dataset.tab === "cycle-a") {
          this.roadmap.view.animateDynamicCycle();
        }
      },
      "toggle-menu": () => {
        const menu = document.getElementById("mobile-menu");
        if (menu) {
          menu.classList.toggle("hidden");
          menu.classList.toggle("flex");
        }
      },
      "export-data": () => this.exportData(),
      "factory-reset": () => this.factoryReset(),
      "clear-cache": () => this.clearCache(),
      "download-chart": () => {
        if (this.chartManager) this.chartManager.downloadRadarChart();
      },
      "open-stats": () => this.ui.openStatsModal(),
      "close-stats": () => this.ui.closeStatsModal(),
      "change-pace": () => {
        const newPace = prompt(
          "Quantas horas você estuda por dia?",
          this.state.pace || 2,
        );
        if (newPace !== null) {
          const parsed = parseFloat(newPace);
          if (!isNaN(parsed) && parsed > 0) {
            this.state.pace = parsed;
            this.storage.save(this.state);
            this.roadmap.checkAndRender();
            this.ui.showToast("Ritmo de estudo atualizado!", "success");
          } else {
            this.ui.showToast("Valor inválido.", "error");
          }
        }
      },
      "change-goals": () => {
        const currentMeta = this.state.metaSimulado || 80;
        const newMeta = prompt(
          "Qual a sua nota meta para os Simulados? (Ex: 85)",
          currentMeta,
        );
        if (newMeta !== null) {
          const parsed = parseFloat(newMeta);
          if (!isNaN(parsed) && parsed > 0 && parsed <= 100) {
            this.state.metaSimulado = parsed;
            this.state.warningSimulado = parsed - 10;
            this.storage.save(this.state);
            this.roadmap.checkAndRender();
            this.ui.showToast("Metas de simulado atualizadas!", "success");
          } else {
            this.ui.showToast("Valor inválido.", "error");
          }
        }
      },
      "toggle-completed": () => this.roadmap.toggleCompleted(),
      "update-subject": (target) => {
        this.roadmap.updateSubject(
          target.dataset.subject,
          parseInt(target.dataset.amount, 10),
          parseInt(target.dataset.max, 10),
        );
      },
      "complete-subject": (target) => {
        this.roadmap.completeSubject(
          target.dataset.subject,
          target.dataset.name,
          parseInt(target.dataset.max, 10),
        );
      },
      login: () => {
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
      },
      register: () => {
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
      },
      logout: () => {
        if (confirm("Tem certeza que deseja sair?")) {
          this.auth.logout();
        }
      },
    };

    document.addEventListener("click", (e) => {
      // Fechar menu mobile ao clicar fora dele
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        if (!e.target.closest("[data-action='toggle-menu']")) {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("flex");
        }
      }

      // Fechar modal de estatísticas ao clicar no fundo embaçado
      if (e.target.id === "stats-modal") {
        this.ui.closeStatsModal();
        return;
      }

      const target = e.target.closest("[data-action]");
      if (!target) return;

      const action = target.dataset.action;
      if (actions[action]) {
        actions[action](target);
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
