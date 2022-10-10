import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXyxGjblEU2B6-iOVcVE__eJsigGodlro",
  authDomain: "music-player-9bad3.firebaseapp.com",
  projectId: "music-player-9bad3",
  storageBucket: "music-player-9bad3.appspot.com",
  messagingSenderId: "717948082630",
  appId: "1:717948082630:web:fdc88220e54f3f3c72fac7",
  measurementId: "G-FMCE2J4MHW",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export { auth, db, usersCollection, storage, songsCollection, commentsCollection };
