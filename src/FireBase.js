// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBz53XpKCX8eLCcqwk-D8vxAyhZaguO5xc",
  authDomain: "whatsapp-clone-db6cf.firebaseapp.com",
  projectId: "whatsapp-clone-db6cf",
  storageBucket: "whatsapp-clone-db6cf.appspot.com",
  messagingSenderId: "695733783666",
  appId: "1:695733783666:web:c38c6717aead66814806eb",
  measurementId: "G-7EMD4C1K84",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;

