// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcQr8ZmmIHq3rwMW9G2XYBB6SJn6_ca1U",
  authDomain: "twidy-5d559.firebaseapp.com",
  projectId: "twidy-5d559",
  storageBucket: "twidy-5d559.appspot.com",
  messagingSenderId: "716172563650",
  appId: "1:716172563650:web:d7acd564ae2081e29a175b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
