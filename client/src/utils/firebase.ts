// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByvPXJYaYWmELu72lJ0gW4one_0ju9Mwg",
  authDomain: "zingmp3-a4124.firebaseapp.com",
  projectId: "zingmp3-a4124",
  storageBucket: "zingmp3-a4124.appspot.com",
  messagingSenderId: "325396500504",
  appId: "1:325396500504:web:66f83ac346b5dcac1e336d",
  measurementId: "G-W5HG8S7R0F",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const firebaseAuth = getAuth(app)
export const firebaseDb = getStorage(app)
