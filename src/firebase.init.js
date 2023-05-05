// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAksHGfby8V-6WfAMWt03cV7VUUMUVE8Y",
  authDomain: "simple-firebase-auth-1-8f8ff.firebaseapp.com",
  projectId: "simple-firebase-auth-1-8f8ff",
  storageBucket: "simple-firebase-auth-1-8f8ff.appspot.com",
  messagingSenderId: "675575288991",
  appId: "1:675575288991:web:973319a6f8f6d225f57eaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;