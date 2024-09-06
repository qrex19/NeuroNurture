// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeNTL7VX_7-EVC236CHYcRDRnvQTQk5pU",
  authDomain: "hackx-bc0be.firebaseapp.com",
  projectId: "hackx-bc0be",
  storageBucket: "hackx-bc0be.appspot.com",
  messagingSenderId: "286961169549",
  appId: "1:286961169549:web:1596127fc349fdecbe1ec4",
  measurementId: "G-B7Q7NSPRLE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
