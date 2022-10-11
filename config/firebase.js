// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBx-h9H6RYZssJmMivEMdfQUfZjLQDtJvs",
  authDomain: "restaurantapp-9071e.firebaseapp.com",
  projectId: "restaurantapp-9071e",
  storageBucket: "restaurantapp-9071e.appspot.com",
  messagingSenderId: "564413742812",
  appId: "1:564413742812:web:053743366e813df1957e19",
  measurementId: "G-VP2REE21CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app);
const storage = getStorage(app)

export {auth,db,storage,analytics}