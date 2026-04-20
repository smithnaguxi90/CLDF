import { db } from "./firebase-config.js";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

export default class FirestoreManager {
  constructor(storageKey, userId, uiManager) {
    this.userId = userId;
    // Modificamos a chave local para incluir o ID e não dar conflito se 2 pessoas usarem o mesmo PC
    this.localKey = `${storageKey}_${userId}`;
    this.docRef = doc(db, "user_progress", userId);
    this.ui = uiManager;
  }

  async load() {
    const defaultState = { progress: {}, phase: 1 };

    try {
      const docSnap = await getDoc(this.docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        localStorage.setItem(this.localKey, JSON.stringify(data)); // Atualiza o cache local
        return data;
      }
    } catch (error) {
      console.warn("Modo offline ou erro ao carregar do Firestore:", error);
    }

    // Fallback local caso o Firestore falhe ou não tenha dados
    const localData = localStorage.getItem(this.localKey);
    return localData ? JSON.parse(localData) : defaultState;
  }

  async save(state) {
    // Mantém o backup local imediato (importante para PWA e velocidade)
    localStorage.setItem(this.localKey, JSON.stringify(state));

    // Aciona a animação no cabeçalho
    if (this.ui) this.ui.showSaving();

    // Envia os dados para a nuvem em background
    try {
      await setDoc(this.docRef, state);
    } catch (error) {
      console.error("Erro ao salvar no Firestore:", error);
    } finally {
      // Oculta a animação no final (sucesso ou falha)
      if (this.ui) this.ui.hideSaving();
    }
  }

  async clear() {
    localStorage.removeItem(this.localKey);
    try {
      await deleteDoc(this.docRef);
    } catch (e) {
      console.error("Erro ao deletar documento na nuvem", e);
    }
  }

  // Repasse das lógicas de download e upload de arquivo de backup manual
  exportFile(state) {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cldf_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  importFile(file, callback) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const state = JSON.parse(e.target.result);
        await this.save(state);
        if (callback) callback(state);
      } catch (error) {
        alert("Arquivo de backup inválido.");
      }
    };
    reader.readAsText(file);
  }
}
