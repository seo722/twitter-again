import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnLKbbLYlTljE8enPPuTgCOCJOKjA6MlA",
  authDomain: "twitter-again-88bb5.firebaseapp.com",
  projectId: "twitter-again-88bb5",
  storageBucket: "twitter-again-88bb5.appspot.com",
  messagingSenderId: "673993305750",
  appId: "1:673993305750:web:d4065211181eca12fc9cb7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
