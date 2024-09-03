// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA1tQGYwnRSDnSmAOLuOhgqvOTNaRn6IEI',
  authDomain: 'twidy-7c463.firebaseapp.com',
  projectId: 'twidy-7c463',
  storageBucket: 'twidy-7c463.appspot.com',
  messagingSenderId: '829348041330',
  appId: '1:829348041330:web:af4f3b4b1d0a890543e8eb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
