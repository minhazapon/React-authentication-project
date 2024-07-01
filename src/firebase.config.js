// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSys0_D5d7ao4f6edmdew8I5M-UaIPZc4",
  authDomain: "react-news-auth-eba69.firebaseapp.com",
  projectId: "react-news-auth-eba69",
  storageBucket: "react-news-auth-eba69.appspot.com",
  messagingSenderId: "360317838612",
  appId: "1:360317838612:web:f539f5f4eda92fd86a8e01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;