// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// FIXED: Safe global fallback check prevents ReferenceError in browser
const firebaseConfig = typeof window !== 'undefined' && window.__firebase_config
  ? window.__firebase_config
  : { apiKey: 'mock-key', authDomain: 'localhost', projectId: 'skill-swap' };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
