// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBnzihfG8Gge6gLaZWHn-SkwyV96O66s0",
  authDomain: "yourfuture-8a84c.firebaseapp.com",
  projectId: "yourfuture-8a84c",
  storageBucket: "yourfuture-8a84c.appspot.com",
  messagingSenderId: "797710971348",
  appId: "1:797710971348:web:fa7b76cdbf74e00a9da641"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
export const storage = getStorage(appFirebase);
export default appFirebase;