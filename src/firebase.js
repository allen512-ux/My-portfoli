import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeXzGlZDn2niOOxYnp4shq33pYShuZbJI",
  authDomain: "portfoli-f9f0e.firebaseapp.com",
  projectId: "portfoli-f9f0e",
  storageBucket: "portfoli-f9f0e.firebasestorage.app",
  messagingSenderId: "968027417446",
  appId: "1:968027417446:web:24dacbb9b81bc0723976a7",
  measurementId: "G-W8ZF0YLVK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };