// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAigl1z4GURLbODxddhDwghNWG1u0pF8Jo",
  authDomain: "react-dragon-news-36950.firebaseapp.com",
  projectId: "react-dragon-news-36950",
  storageBucket: "react-dragon-news-36950.appspot.com",
  messagingSenderId: "998098638162",
  appId: "1:998098638162:web:d7f1185453f1263603968b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
