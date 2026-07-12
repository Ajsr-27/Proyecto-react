
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDetXNFbynE6a3oZqUrBTL8uNKXcnJUHSo",
  authDomain: "neko-store-1b56b.firebaseapp.com",
  projectId: "neko-store-1b56b",
  storageBucket: "neko-store-1b56b.firebasestorage.app",
  messagingSenderId: "760084517542",
  appId: "1:760084517542:web:870898f8367330f5095a67",
  measurementId: "G-02WMWR25MX"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)