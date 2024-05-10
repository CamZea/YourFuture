import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCG9jbWPbzWEjZ6asyiny7uIUXi3qz8Qj0",
    authDomain: "carrerasu-c6329.firebaseapp.com",
    databaseURL: "https://carrerasu-c6329-default-rtdb.firebaseio.com",
    projectId: "carrerasu-c6329",
    storageBucket: "carrerasu-c6329.appspot.com",
    messagingSenderId: "970563309891",
    appId: "1:970563309891:web:6328891501df54fc6c1ff6"
};


const app= initializeApp(firebaseConfig);
const database= getDatabase(app);

export {database};