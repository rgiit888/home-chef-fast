// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJmSJdWO1BvCR9mCAdMs1NcdNXC7TTtk8",
  authDomain: "qckily-ddccf.firebaseapp.com",
  projectId: "qckily-ddccf",
  storageBucket: "qckily-ddccf.firebasestorage.app",
  messagingSenderId: "880019855078",
  appId: "1:880019855078:web:e2206f9ebe3271134b8d27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
