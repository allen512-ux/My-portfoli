import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeXzGlZDn2niOOxYnp4shq33pYShuZbJI",
    authDomain: "portfoli-f9f0e.firebaseapp.com",
    projectId: "portfoli-f9f0e",
    storageBucket: "portfoli-f9f0e.firebasestorage.app",
    messagingSenderId: "968027417446",
    appId: "1:968027417446:web:24dacbb9b81bc0723976a7",
    measurementId: "G-W8ZF0YLVK3"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };