import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjZZvj6ZNlVnEGffrSUpmCGzRmrIhrogI",
  authDomain: "inteligentemente-43d64.firebaseapp.com",
  projectId: "inteligentemente-43d64",
  storageBucket: "inteligentemente-43d64.appspot.com",
  messagingSenderId: "135910014635",
  appId: "1:135910014635:web:c3d89573618ead13e981ee",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);