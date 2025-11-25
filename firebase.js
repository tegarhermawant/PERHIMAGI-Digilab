// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfhZE-57GF9GKYaqJdkKyR8RVUsrVYOrQ",
    authDomain: "perhimagi-library.firebaseapp.com",
    projectId: "perhimagi-library",
    storageBucket: "perhimagi-library.firebasestorage.app",
    messagingSenderId: "810004654530",
    appId: "1:810004654530:web:971937fd2bd5415dab4e5b",
    measurementId: "G-3B5F7SGR53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider, signInWithPopup, signOut, onAuthStateChanged };
