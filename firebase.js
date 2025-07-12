// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(window.__firebase_config);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
