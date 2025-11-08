// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjbitm5u8sKv6dpTR-Kgx6YdwK_ja9uaE",
  authDomain: "plate-share-ae51d.firebaseapp.com",
  projectId: "plate-share-ae51d",
  storageBucket: "plate-share-ae51d.firebasestorage.app",
  messagingSenderId: "625818115117",
  appId: "1:625818115117:web:01342319e213d7292f2ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
