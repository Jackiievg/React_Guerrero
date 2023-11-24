import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrew8QxhpR7Cs8gSxPjZbX7ghIaf5atp4",
    authDomain: "tienda-botanica-e64ca.firebaseapp.com",
    projectId: "tienda-botanica-e64ca",
    storageBucket: "tienda-botanica-e64ca.appspot.com",
    messagingSenderId: "418274492907",
    appId: "1:418274492907:web:9453b7cbc9ae6339dc99ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
