import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgH5vX7pEpPs5j0XHeEAKDP8S9lmVDQZI",
  authDomain: "clone-96306.firebaseapp.com",
  projectId: "clone-96306",
  storageBucket: "clone-96306.appspot.com",
  messagingSenderId: "555880678524",
  appId: "1:555880678524:web:cc81c0d60fbf9ee906b5f9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
