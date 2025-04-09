const firebaseConfig = {
  apiKey: "AIzaSyBzUgShNYuzX8aD5wYFJC4gGarJjzCfvPs",
  authDomain: "nevor-pay.firebaseapp.com",
  projectId: "nevor-pay",
  storageBucket: "nevor-pay.firebasestorage.app",
  messagingSenderId: "131376993507",
  appId: "1:131376993507:web:75a4a8f51e73434fece1d6",
  measurementId: "G-V05X1ZMLFJ"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
