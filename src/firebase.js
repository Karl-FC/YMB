// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRPMifaeOKF_5yomWFSiMnvIAwOnvgTSg",
  authDomain: "ymb-your-motivational-buddy.firebaseapp.com",
  projectId: "ymb-your-motivational-buddy",
  storageBucket: "ymb-your-motivational-buddy.appspot.com",
  messagingSenderId: "854205798285",
  appId: "1:854205798285:web:696d6d798dd58b2144cfc4",
  measurementId: "G-H1TK4E56G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, analytics, auth, db};