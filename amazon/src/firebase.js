import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl_qx354lBFaeZ-bqEIbXjD8pQydDjPVU",
  authDomain: "clone-78bcd.firebaseapp.com",
  projectId: "clone-78bcd",
  storageBucket: "clone-78bcd.appspot.com",
  messagingSenderId: "148738957942",
  appId: "1:148738957942:web:16d98e0c6a76809028b557",
  measurementId: "G-4LNDCJGEZL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};