// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCT07jNWGf_Ry43Dogd1fRSKXWyab-xmJ8",
  authDomain: "job-website-b7594.firebaseapp.com",
  projectId: "job-website-b7594",
  storageBucket: "job-website-b7594.appspot.com",
  messagingSenderId: "405477472182",
  appId: "1:405477472182:web:ef1bc96fa4aed15c95f317",
  measurementId: "G-T1E2Q5TRE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db};