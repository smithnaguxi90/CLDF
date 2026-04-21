/**
 * @jest-environment jsdom
 * Testes para UIManager.js
 * Testando métodos genéricos _playSound() e _toggleElement()
 */

import UIManager from "../UIManager.js";

describe("UIManager", () => {
  let uiManager;

  beforeEach(() => {
    // Setup: Limpar HTML e criar novo UIManager
    document.body.innerHTML = `
      <div id="toast-container"></div>
      <button id="back-to-top"></button>
      <header></header>
      <div id="loading-overlay" class="hidden flex opacity-0"></div>
      <div id="auth-overlay" class="hidden flex opacity-0"></div>
      <div id="sync-status" class="hidden flex opacity-0"></div>
      <div id="stats-modal" class="hidden flex opacity-0">
        <div></div>
      </div>
    `;

    // Mock AudioContext
    global.AudioContext = jest.fn(() => ({
      currentTime: 0,
      state: "running",
      createOscillator: jest.fn(() => ({
        type: "sine",
        frequency: {
          setValueAtTime: jest.fn(),
          exponentialRampToValueAtTime: jest.fn(),
        },
        connect: jest.fn(),
        start: jest.fn(),
        stop: jest.fn(),
      })),
      createGain: jest.fn(() => ({
        gain: {
          setValueAtTime: jest.fn(),
          exponentialRampToValueAtTime: jest.fn(),
        },
        connect: jest.fn(),
      })),
      destination: {},
      resume: jest.fn(),
    }));

    uiManager = new UIManager();
  });

  describe("_playSound()", () => {
    it("deve reproduzir som com frequência única", () => {
      uiManager._playSound({
        type: "sine",
        frequencies: [880],
        initialGain: 0.05,
        duration: 0.1,
      });

      expect(uiManager.audioCtx).toBeDefined();
    });

    it("deve reproduzir som com transição de frequência", () => {
      uiManager._playSound({
        type: "sine",
        frequencies: [200, 800],
        initialGain: 0.1,
        duration: 0.3,
      });

      expect(uiManager.audioCtx).toBeDefined();
    });

    it("deve reproduzir som com múltiplas frequências (arpejo)", () => {
      uiManager._playSound({
        type: "sine",
        frequencyTimes: [
          { frequency: 523.25, time: 0 },
          { frequency: 659.25, time: 0.1 },
          { frequency: 783.99, time: 0.2 },
        ],
        initialGain: 0.08,
        duration: 0.3,
      });

      expect(uiManager.audioCtx).toBeDefined();
    });

    it("deve adicionar efeito shake ao reproduzir som com shakeConfig", (done) => {
      const body = document.body;
      uiManager._playSound({
        type: "square",
        frequencies: [150, 80],
        initialGain: 0.05,
        duration: 0.2,
        shakeConfig: { duration: 0.4 },
      });

      // Verificar que a classe foi adicionada
      expect(body.classList.contains("animate-shake")).toBe(true);

      // Verificar que foi removida após timeout
      setTimeout(() => {
        expect(body.classList.contains("animate-shake")).toBe(false);
        done();
      }, 450);
    });

    it("playBeep() deve chamar _playSound com configuração correta", () => {
      jest.spyOn(uiManager, "_playSound");
      uiManager.playBeep();
      expect(uiManager._playSound).toHaveBeenCalledWith({
        type: "sine",
        frequencies: [880],
        initialGain: 0.05,
        duration: 0.1,
      });
    });

    it("playPowerUpSound() deve chamar _playSound com configuração correta", () => {
      jest.spyOn(uiManager, "_playSound");
      uiManager.playPowerUpSound();
      expect(uiManager._playSound).toHaveBeenCalledWith({
        type: "sine",
        frequencies: [200, 800],
        initialGain: 0.1,
        duration: 0.3,
      });
    });

    it("playSuccessSound() deve chamar _playSound com arpejo", () => {
      jest.spyOn(uiManager, "_playSound");
      uiManager.playSuccessSound();
      const callArgs = uiManager._playSound.mock.calls[0][0];
      expect(callArgs.type).toBe("sine");
      expect(callArgs.frequencyTimes).toBeDefined();
      expect(callArgs.frequencyTimes.length).toBe(4);
    });

    it("playErrorSound() deve chamar _playSound com shake", () => {
      jest.spyOn(uiManager, "_playSound");
      uiManager.playErrorSound();
      const callArgs = uiManager._playSound.mock.calls[0][0];
      expect(callArgs.type).toBe("square");
      expect(callArgs.shakeConfig).toBeDefined();
    });
  });

  describe("_toggleElement()", () => {
    it("deve mostrar elemento quando show=true", () => {
      const overlay = document.getElementById("auth-overlay");
      overlay.classList.add("hidden");
      overlay.classList.remove("flex");

      uiManager._toggleElement("auth-overlay", true);

      expect(overlay.classList.contains("hidden")).toBe(false);
      expect(overlay.classList.contains("flex")).toBe(true);
      expect(overlay.classList.contains("opacity-100")).toBe(true);
    });

    it("deve ocultar elemento quando show=false", (done) => {
      const overlay = document.getElementById("loading-overlay");
      overlay.classList.remove("hidden");
      overlay.classList.add("flex");

      uiManager._toggleElement("loading-overlay", false, { delay: 100 });

      // Imediatamente após chamar, deve ter opacity-0
      expect(overlay.classList.contains("opacity-0")).toBe(true);

      // Após delay, deve estar hidden
      setTimeout(() => {
        expect(overlay.classList.contains("hidden")).toBe(true);
        expect(overlay.classList.contains("flex")).toBe(false);
        done();
      }, 150);
    });

    it("hideLoading() deve chamar _toggleElement com delay de 500ms", (done) => {
      jest.spyOn(uiManager, "_toggleElement");
      uiManager.hideLoading();
      expect(uiManager._toggleElement).toHaveBeenCalledWith(
        "loading-overlay",
        false,
        { delay: 500 },
      );
      done();
    });

    it("showAuth() deve mostrar auth overlay", () => {
      uiManager.showAuth();
      const authOverlay = document.getElementById("auth-overlay");
      expect(authOverlay.classList.contains("flex")).toBe(true);
      expect(authOverlay.classList.contains("hidden")).toBe(false);
    });

    it("hideAuth() deve ocultar auth overlay", () => {
      uiManager.hideAuth();
      const authOverlay = document.getElementById("auth-overlay");
      expect(authOverlay.classList.contains("hidden")).toBe(true);
    });

    it("showSaving() deve mostrar sync status", () => {
      uiManager.showSaving();
      const syncStatus = document.getElementById("sync-status");
      expect(syncStatus.classList.contains("flex")).toBe(true);
    });

    it("hideSaving() deve ocultar sync status", () => {
      uiManager.hideSaving();
      const syncStatus = document.getElementById("sync-status");
      expect(syncStatus.classList.contains("hidden")).toBe(true);
    });

    it("openStatsModal() deve abrir modal com animação", (done) => {
      uiManager.openStatsModal();
      const modal = document.getElementById("stats-modal");

      expect(modal.classList.contains("flex")).toBe(true);
      expect(modal.classList.contains("hidden")).toBe(false);

      setTimeout(() => {
        expect(modal.classList.contains("opacity-0")).toBe(false);
        expect(modal.firstElementChild.classList.contains("scale-100")).toBe(
          true,
        );
        done();
      }, 50);
    });

    it("closeStatsModal() deve fechar modal com animação", (done) => {
      // Abrir primeiro
      uiManager.openStatsModal();

      // Depois fechar
      setTimeout(() => {
        uiManager.closeStatsModal();
        const modal = document.getElementById("stats-modal");

        expect(modal.classList.contains("opacity-0")).toBe(true);
        expect(modal.firstElementChild.classList.contains("scale-95")).toBe(
          true,
        );

        // Após animação, deve estar hidden
        setTimeout(() => {
          expect(modal.classList.contains("hidden")).toBe(true);
          done();
        }, 350);
      }, 50);
    });
  });

  describe("scrollTo()", () => {
    it("deve fazer scroll até elemento especificado", () => {
      document.body.innerHTML +=
        '<div id="target" style="margin-top: 1000px;">Target</div>';
      const scrollToSpy = jest.spyOn(window, "scrollTo");

      uiManager.scrollTo("target");

      expect(scrollToSpy).toHaveBeenCalled();
      scrollToSpy.mockRestore();
    });

    it("não deve fazer scroll se elemento não existir", () => {
      const scrollToSpy = jest.spyOn(window, "scrollTo");
      uiManager.scrollTo("non-existent");
      expect(scrollToSpy).not.toHaveBeenCalled();
      scrollToSpy.mockRestore();
    });
  });

  describe("showToast()", () => {
    it("deve criar toast com mensagem de sucesso", (done) => {
      uiManager.showToast("Operação bem-sucedida!", "success");
      const toast = document.querySelector('[class*="animate-toast"]');

      expect(toast).toBeTruthy();
      expect(toast.textContent).toContain("Operação bem-sucedida!");
      expect(toast.classList.contains("bg-emerald-900/90")).toBe(true);

      // Verificar que toast é removido após animação
      setTimeout(() => {
        expect(document.querySelector('[class*="animate-toast"]')).toBeFalsy();
        done();
      }, 4500);
    });

    it("deve criar toast com mensagem de erro", (done) => {
      uiManager.showToast("Erro na operação!", "error");
      const toast = document.querySelector('[class*="animate-toast"]');

      expect(toast).toBeTruthy();
      expect(toast.textContent).toContain("Erro na operação!");
      expect(toast.classList.contains("bg-rose-900/90")).toBe(true);

      setTimeout(() => {
        expect(document.querySelector('[class*="animate-toast"]')).toBeFalsy();
        done();
      }, 4500);
    });
  });
});
