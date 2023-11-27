import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKTLaKo-T3oVfnAONe1biMDexuS6_pXAA",
    authDomain: "projet-29498.firebaseapp.com",
    projectId: "projet-29498",
    storageBucket: "projet-29498.appspot.com",
    messagingSenderId: "568982257988",
    appId: "1:568982257988:web:428badfeec44489fc19711"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
