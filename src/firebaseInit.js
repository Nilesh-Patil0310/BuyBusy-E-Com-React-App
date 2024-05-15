// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC35d8pfNFUA0TD2mzPj68gEy9MHfBQUd8",
  authDomain: "buybusy-c9c09.firebaseapp.com",
  projectId: "buybusy-c9c09",
  storageBucket: "buybusy-c9c09.appspot.com",
  messagingSenderId: "368531913383",
  appId: "1:368531913383:web:c23de6aea9c735dd2ff982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);