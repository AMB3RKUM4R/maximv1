'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Firebase keys are hardcoded as per your request.
const firebaseConfig = {
  apiKey: "AIzaSyCKxnTu5cvE4m0wFGAuMoN6HHRtvdX3SCI",
  authDomain: "bhartiya-matkkka-pub.firebaseapp.com",
  projectId: "bhartiya-matkkka-pub",
  storageBucket: "bhartiya-matkkka-pub.firebasestorage.app",
  messagingSenderId: "766901673732",
  appId: "1:766901673732:web:4a74edf7d897a4a7687a51",
  measurementId: "G-3M87EDZFNM"
};

let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

// Your updated UPI Intent Link
export const upiLink = "upi://pay?pa=deamonstillalive3@icici&pn=NextComputerGenius&am=49.00&cu=INR&tn=NCGMembership";

export { app, auth, db };