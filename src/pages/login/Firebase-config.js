// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtS-C2_ex3lXLPK_oUczs9QDYsbhEeGJY",
  authDomain: "blog-e50b5.firebaseapp.com",
  projectId: "blog-e50b5",
  storageBucket: "blog-e50b5.appspot.com",
  messagingSenderId: "433323802934",
  appId: "1:433323802934:web:3c43c49d5c9ab245573397",
  measurementId: "G-G6B032MWKQ"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
