import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_APIKEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STRAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MASSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
// };
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STRAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MASSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export default db;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
