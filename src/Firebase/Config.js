// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDetXNFbynE6a3oZqUrBTL8uNKXcnJUHSo",
  authDomain: "neko-store-1b56b.firebaseapp.com",
  projectId: "neko-store-1b56b",
  storageBucket: "neko-store-1b56b.firebasestorage.app",
  messagingSenderId: "760084517542",
  appId: "1:760084517542:web:870898f8367330f5095a67",
  measurementId: "G-02WMWR25MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);