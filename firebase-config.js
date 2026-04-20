import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyApbv5GZ6nEwN_kVNG0Gc5-OsmSzRCTUY8",
  authDomain: "cldf-a651b.firebaseapp.com",
  projectId: "cldf-a651b",
  storageBucket: "cldf-a651b.firebasestorage.app",
  messagingSenderId: "732937211804",
  appId: "1:732937211804:web:f55b6d81a92085991c8259"
};

// Inicializa o app e exporta a referência do banco de dados
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);