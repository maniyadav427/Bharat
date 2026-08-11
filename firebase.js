// ==========================================
// FIREBASE APP
// ==========================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";


// ==========================================
// FIREBASE AUTHENTICATION
// ==========================================

import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


// ==========================================
// FIRESTORE DATABASE
// ==========================================

import {
    getFirestore,
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

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


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app =
    initializeApp(firebaseConfig);


// ==========================================
// INITIALIZE AUTH
// ==========================================

const auth =
    getAuth(app);


// ==========================================
// INITIALIZE FIRESTORE
// ==========================================

const db =
    getFirestore(app);


// ==========================================
// EXPORT
// ==========================================

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