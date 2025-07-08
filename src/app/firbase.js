// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiVd8cL4_fZauzJhaKYMVLKFFb5p-EMgA",
  authDomain: "blogpost-98021.firebaseapp.com",
  projectId: "blogpost-98021",
  storageBucket: "blogpost-98021.firebasestorage.app",
  messagingSenderId: "184384916447",
  appId: "1:184384916447:web:274e200e0a7d6dc85a926a",
  measurementId: "G-7WB2KZR223",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
