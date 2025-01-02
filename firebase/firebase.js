// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8_Y2qFgnSuDAXhyScFfe3GHzixM8ycA",
  authDomain: "nextjsroutehandler.firebaseapp.com",
  projectId: "nextjsroutehandler",
  storageBucket: "nextjsroutehandler.firebasestorage.app",
  messagingSenderId: "610352487269",
  appId: "1:610352487269:web:49a38dc41b7834c6525f8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
