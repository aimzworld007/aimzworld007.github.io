import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH0qfoCI4zeAu5FBhHp8aZ20s0eE3h5EE",
  authDomain: "ainulislam-6b19c.firebaseapp.com",
  projectId: "ainulislam-6b19c",
  storageBucket: "ainulislam-6b19c.appspot.com",
  messagingSenderId: "831957297839",
  appId: "1:831957297839:web:d4de912ff4a62a0424425a",
  measurementId: "G-EJDGDCTEN2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
