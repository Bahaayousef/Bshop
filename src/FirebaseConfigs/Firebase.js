import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAmJBwfUpW3FoYGByDMwOfaaLhajbt-ZxI",
  authDomain: "bahaa-shop.firebaseapp.com",
  projectId: "bahaa-shop",
  storageBucket: "bahaa-shop.appspot.com",
  messagingSenderId: "399846448378",
  appId: "1:399846448378:web:e721d547c902df616efd43",
  measurementId: "G-JE6TLVKDLX" 
};

const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app); 

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
