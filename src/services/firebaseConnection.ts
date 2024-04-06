
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_z5as58eyySKASTjSvLh5gTF9PzvLr4o",
  authDomain: "reactlinks-8cf7b.firebaseapp.com",
  projectId: "reactlinks-8cf7b",
  storageBucket: "reactlinks-8cf7b.appspot.com",
  messagingSenderId: "22648963485",
  appId: "1:22648963485:web:17a7f7b89306e6606a2f74"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};