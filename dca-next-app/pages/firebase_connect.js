import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCbHLBaEBkHQ9zv-QS7099yiTGQCPhspPo",
  authDomain: "dca-next-app.firebaseapp.com",
  projectId: "dca-next-app",
  storageBucket: "dca-next-app.appspot.com",
  messagingSenderId: "688044112616",
  appId: "1:688044112616:web:6b6195d20569d1be10275d",
  measurementId: "G-Y6DF75MEG6"
};

const firebaseapp = initializeApp(firebaseConfig)
const db = getFirestore(firebase)

export default db;

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbHLBaEBkHQ9zv-QS7099yiTGQCPhspPo",
  authDomain: "dca-next-app.firebaseapp.com",
  projectId: "dca-next-app",
  storageBucket: "dca-next-app.appspot.com",
  messagingSenderId: "688044112616",
  appId: "1:688044112616:web:6b6195d20569d1be10275d",
  measurementId: "G-Y6DF75MEG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Import Admin SDK
const { getDatabase } = require('firebase-admin/database');

// Get a database reference to our blog
//const db = getDatabase();
//const ref = db.ref('server/saving-data/fireblog');
/*
const usersRef = ref.child('users');
*/