// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNW4vb6nhAVUUU5jG_iFNAoCbcQRWWvlM",
  authDomain: "netflixgpt-c789e.firebaseapp.com",
  projectId: "netflixgpt-c789e",
  storageBucket: "netflixgpt-c789e.firebasestorage.app",
  messagingSenderId: "738570780062",
  appId: "1:738570780062:web:5be5d088a603595bd66a8f",
  measurementId: "G-C5EP7C42MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();