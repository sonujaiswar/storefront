import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  connectAuthEmulator,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

// Use emulators only in development and only on the server side
if (
  process.env.NODE_ENV === "development" ||
  (process.env.NEXT_PUBLIC_NODE_ENV === "development" &&
    typeof window === "undefined")
) {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(firestore, "localhost", 8080);
}

const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider };
