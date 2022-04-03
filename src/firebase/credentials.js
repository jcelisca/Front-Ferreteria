import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU5Y6thRwih1YOdK4D0VEctcJ_vOega6c",
  authDomain: "app-ferreteria-4cbfd.firebaseapp.com",
  projectId: "app-ferreteria-4cbfd",
  storageBucket: "app-ferreteria-4cbfd.appspot.com",
  messagingSenderId: "281084048272",
  appId: "1:281084048272:web:bd7a15c3d507d97639b915"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };