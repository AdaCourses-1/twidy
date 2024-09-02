// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQp2sVZjmqmdDRCOLXX2whMykGMIhrHpY",
  authDomain: "twidy-b2a1f.firebaseapp.com",
  projectId: "twidy-b2a1f",
  storageBucket: "twidy-b2a1f.appspot.com",
  messagingSenderId: "826100636009",
  appId: "1:826100636009:web:a9dcc5c7b047fe047145f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Иниализация проекта Firebase

const db = getFirestore(); // Инициализация базы данных Firestore
const auth = getAuth(app); // Инициализация системы верификации
const storage = getStorage(app); // Инициализация хранилища файлов

export { db, auth, storage };
