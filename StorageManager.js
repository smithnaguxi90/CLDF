export default class StorageManager {
  constructor(key) {
    this.key = key;
    this.defaultState = { progress: {}, phase: 1 };
  }
  load() {
    try {
      const stored = localStorage.getItem(this.key);
      return stored ? JSON.parse(stored) : { ...this.defaultState };
    } catch (e) {
      return { ...this.defaultState };
    }
  }
  save(state) {
    try {
      localStorage.setItem(this.key, JSON.stringify(state));
    } catch (e) {}
  }
  exportFile(state) {
    const jsonStr = JSON.stringify(state, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cldf_motor_${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  importFile(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const state = JSON.parse(e.target.result);
        if (state.progress !== undefined) {
          this.save(state);
          callback(state);
        } else throw new Error();
      } catch (err) {
        window.App.ui.showToast("Arquivo inválido.", "error");
      }
    };
    reader.readAsText(file);
  }
}
