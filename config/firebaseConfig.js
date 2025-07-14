// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "telecom-cc4cc.firebaseapp.com",
  databaseURL: "https://telecom-cc4cc-default-rtdb.firebaseio.com",
  projectId: "telecom-cc4cc",
  storageBucket: "telecom-cc4cc.appspot.com",
  messagingSenderId: "513151888453",
  appId: "1:513151888453:web:f90ba7557b225a586fc72c",
  measurementId: "G-QNR9SR2TMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
