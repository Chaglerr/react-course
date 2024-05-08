// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnS8qCt6oGKeajMt9KaVJXjHqabOUilZI",
  authDomain: "react-course-c44b3.firebaseapp.com",
  projectId: "react-course-c44b3",
  storageBucket: "react-course-c44b3.appspot.com",
  messagingSenderId: "178681844783",
  appId: "1:178681844783:web:428235e7f756c8376da2da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db =  getFirestore(app);