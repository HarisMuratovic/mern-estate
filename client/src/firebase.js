// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4adf1.firebaseapp.com",
  projectId: "mern-estate-4adf1",
  storageBucket: "mern-estate-4adf1.appspot.com",
  messagingSenderId: "181748850159",
  appId: "1:181748850159:web:2ca8eedb99b51ddcd92a1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);