// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUszE85CjNOtPLeHjEfNG_Og9yGyDllMQ",
    authDomain: "react-chat-app-706da.firebaseapp.com",
    projectId: "react-chat-app-706da",
    storageBucket: "react-chat-app-706da.appspot.com",
    messagingSenderId: "624688806379",
    appId: "1:624688806379:web:5ef96d07dc16f5eef141ae",
    measurementId: "G-2ZF2WLBCZV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Create a root reference
export const storage = getStorage();

export const db = getFirestore(app)