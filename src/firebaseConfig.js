// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpyBJxD-7FahZWWAI5fUukKBzXBt48bZY",
  authDomain: "cipherschools-fc3a2.firebaseapp.com",
  projectId: "cipherschools-fc3a2",
  storageBucket: "cipherschools-fc3a2.appspot.com",
  messagingSenderId: "571314258107",
  appId: "1:571314258107:web:5262229c71057fc09ea99e",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// FIREBASEKEY="AIzaSyCpyBJxD-7FahZWWAI5fUukKBzXBt48bZY"
// FIREBASE_DOMAIN="cipherschools-fc3a2.firebaseapp.com"
// PROJECT_ID="cipherschools-fc3a2"
// STORAGE_BUCKET=""
