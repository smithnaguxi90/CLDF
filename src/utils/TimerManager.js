export default class TimerManager {
  constructor(uiManager) {
    this.ui = uiManager;
    this.timeLeft = 55 * 60; // 55 Minutos
    this.interval = null;
    this.display = document.getElementById("timer-display");
    this.updateDisplay();
  }

  start() {
    if (this.interval) return;
    this.interval = setInterval(() => {
      this.timeLeft--;
      this.updateDisplay();
      if (this.timeLeft <= 0) {
        this.pause();
        if (this.ui && this.ui.playTimerEndSound) this.ui.playTimerEndSound();
        if (this.ui && this.ui.showToast)
          this.ui.showToast("Pomodoro finalizado! Hora da pausa.", "success");
        this.timeLeft = 55 * 60;
        this.updateDisplay();
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.pause();
    this.timeLeft = 55 * 60;
    this.updateDisplay();
  }

  updateDisplay() {
    if (!this.display) return;
    const m = Math.floor(this.timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const s = (this.timeLeft % 60).toString().padStart(2, "0");
    this.display.textContent = `${m}:${s}`;
  }
}
