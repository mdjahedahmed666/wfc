// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAClL-ni_niMHibKGZ0N8QnwVxB6OcstXE",
  authDomain: "assignment9-aec0b.firebaseapp.com",
  projectId: "assignment9-aec0b",
  storageBucket: "assignment9-aec0b.appspot.com",
  messagingSenderId: "873281310654",
  appId: "1:873281310654:web:ffd7fafe8266adb13db3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;