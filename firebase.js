// ================================
// Firebase App
// ================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";


// ================================
// Firebase Authentication
// ================================

import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


// ================================
// Firebase Firestore
// ================================

import {
    getFirestore,
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// ================================
// Firebase Configuration
// ================================

const firebaseConfig = {

    apiKey:
        "AIzaSyAXAoP4ZAurROURN_ThBmiS5se7B2_foI4",

    authDomain:
        "allied-f7854.firebaseapp.com",

    projectId:
        "allied-f7854",

    storageBucket:
        "allied-f7854.firebasestorage.app",

    messagingSenderId:
        "754424931220",

    appId:
        "1:754424931220:web:97d9a44b7da4c7407ee581",

    measurementId:
        "G-N5M1C672D0"
};


// ================================
// Initialize Firebase
// ================================

const app =
    initializeApp(firebaseConfig);


// ================================
// Initialize Authentication
// ================================

const auth =
    getAuth(app);


// ================================
// Initialize Firestore
// ================================

const db =
    getFirestore(app);


// ================================
// Export
// ================================

export {

    app,

    auth,

    db,

    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp,

    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

};