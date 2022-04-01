// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2zsXifx5s8d4bzjlvxp081jG6rB2LO8o",
  authDomain: "chatty-7e44e.firebaseapp.com",
  projectId: "chatty-7e44e",
  storageBucket: "chatty-7e44e.appspot.com",
  messagingSenderId: "301064549830",
  appId: "1:301064549830:web:86bb7e71e672af8cf3eec7"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;