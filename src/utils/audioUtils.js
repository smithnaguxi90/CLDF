let audioCtx = null;

function initAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Reproduz sons utilizando a Web Audio API nativa
 * @param {Object} config - Configuração do som (type, frequencies, initialGain, duration)
 */
export function playSound(config = {}) {
  try {
    const ctx = initAudioCtx();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    const type = config.type || "sine";
    const initialGain = config.initialGain || 0.05;
    const duration = config.duration || 0.1;
    const now = ctx.currentTime;

    oscillator.type = type;

    if (config.frequencies && config.frequencies.length === 1) {
      oscillator.frequency.setValueAtTime(config.frequencies[0], now);
    } else if (config.frequencies && config.frequencies.length === 2) {
      oscillator.frequency.setValueAtTime(config.frequencies[0], now);
      oscillator.frequency.exponentialRampToValueAtTime(
        config.frequencies[1],
        now + duration,
      );
    } else if (config.frequencyTimes && config.frequencyTimes.length > 0) {
      config.frequencyTimes.forEach((freqData) => {
        oscillator.frequency.setValueAtTime(
          freqData.frequency,
          now + freqData.time,
        );
      });
    }

    gainNode.gain.setValueAtTime(initialGain, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
  } catch {
    // Ignora silenciosamente se o navegador bloquear o áudio
  }
}
