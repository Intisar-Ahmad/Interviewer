import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKjj-rFUSevbN58FITVjSryKd6gHE4hXc",
  authDomain: "interview-bf6e2.firebaseapp.com",
  projectId: "interview-bf6e2",
  storageBucket: "interview-bf6e2.firebasestorage.app",
  messagingSenderId: "68554074643",
  appId: "1:68554074643:web:6023254372cb152aba2de6",
  measurementId: "G-PNRW3GGLJL"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();


export const auth = getAuth(app)
export const db = getFirestore(app)