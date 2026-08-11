// ===============================
// FIREBASE SDK
// ===============================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";


import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


import {
    getFirestore,
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



// ===============================
// FIREBASE CONFIGURATION
// ===============================

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



// ===============================
// INITIALIZE FIREBASE
// ===============================

const app =
    initializeApp(firebaseConfig);



// ===============================
// INITIALIZE AUTHENTICATION
// ===============================

const auth =
    getAuth(app);



// ===============================
// INITIALIZE FIRESTORE
// ===============================

const db =
    getFirestore(app);



// ===============================
// EXPORT FIREBASE SERVICES
// ===============================

export {

    // Firebase App
    app,

    // Authentication
    auth,

    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

    // Firestore
    db,
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp

};