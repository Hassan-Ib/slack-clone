// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwRhv4Udbn9LLvsRl1hp0cP1efIVVW9Dk",
  authDomain: "slack-clone-49f4d.firebaseapp.com",
  databaseURL: "https://slack-clone-49f4d-default-rtdb.firebaseio.com",
  projectId: "slack-clone-49f4d",
  storageBucket: "slack-clone-49f4d.appspot.com",
  messagingSenderId: "595312348564",
  appId: "1:595312348564:web:46b047ce7439d5f078d381",
  measurementId: "G-CHY530NFSQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
