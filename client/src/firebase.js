// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // For vite it is different
  authDomain: "lucydbrand-auth.firebaseapp.com",
  projectId: "lucydbrand-auth",
  storageBucket: "lucydbrand-auth.appspot.com",
  messagingSenderId: "177643645853",
  appId: "1:177643645853:web:0867a69770d45aef319d74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);