// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsr0XoBeSal10DNtWUtKAuiA6RUNXX5cs",
  authDomain: "hackout-815ba.firebaseapp.com",
  projectId: "hackout-815ba",
  storageBucket: "hackout-815ba.appspot.com",
  messagingSenderId: "296248504845",
  appId: "1:296248504845:web:a9765c87b7aafa7c74db44",
  measurementId: "G-9VE81FX7WV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;
