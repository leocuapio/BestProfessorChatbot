// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'; // Import the function correctly

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCvLmUuYYGaa3kAlanygpmJEAojDMa8xTc",
  authDomain: "ratemyprofessor-3a050.firebaseapp.com",
  projectId: "ratemyprofessor-3a050",
  storageBucket: "ratemyprofessor-3a050.appspot.com",
  messagingSenderId: "1085092289480",
  appId: "1:1085092289480:web:7439084fda02808d7a7efd",
  measurementId: "G-6XQ7RPS6F5"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
