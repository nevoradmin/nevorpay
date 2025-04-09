// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzUgShNYuzX8aD5wYFJC4gGarJjzCfvPs",
  authDomain: "nevor-pay.firebaseapp.com",
  projectId: "nevor-pay",
  storageBucket: "nevor-pay.firebasestorage.app",
  messagingSenderId: "131376993507",
  appId: "1:131376993507:web:75a4a8f51e73434fece1d6",
  measurementId: "G-V05X1ZMLFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
