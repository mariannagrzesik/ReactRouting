// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFteXXdslvp_iwbydjUcverXb2ttFHipU",
  authDomain: "reactprojectfirebase-c60ed.firebaseapp.com",
  projectId: "reactprojectfirebase-c60ed",
  storageBucket: "reactprojectfirebase-c60ed.appspot.com",
  messagingSenderId: "705695066902",
  appId: "1:705695066902:web:fdb427d892b6c542273e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

