import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export default class AuthManager {
  constructor(onUserChange) {
    this.onUserChange = onUserChange;
    // Fica escutando as mudanças de estado de login (logou/deslogou)
    onAuthStateChanged(auth, (user) => {
      this.onUserChange(user);
    });
  }
  async login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
  async register(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
  async logout() {
    await signOut(auth);
    window.location.reload(); // Recarrega para limpar os dados da memória
  }
}