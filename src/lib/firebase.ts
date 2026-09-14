import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI73RpivTI-F0UThAvr1R9_i-O1o4o8gc",
  authDomain: "mao-game.firebaseapp.com",
  projectId: "mao-game",
  storageBucket: "mao-game.firebasestorage.app",
  messagingSenderId: "569009905077",
  appId: "1:569009905077:web:614a96f8263704e8a98dfc",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
