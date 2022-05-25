import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhqppKUCraz5FdgN9Hh0azSwWuCieuznU",
  authDomain: "pbf-prak11.firebaseapp.com",
  projectId: "pbf-prak11",
  storageBucket: "pbf-prak11.appspot.com",
  messagingSenderId: "177879582542",
  appId: "1:177879582542:web:67c1d04e667a6e4091001f",
  measurementId: "G-F4R9JWGHQT"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;