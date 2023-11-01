// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBrlCwW9S0-revOkmwSrkCXVL_DoJAY4w",
  authDomain: "tour-project-eec80.firebaseapp.com",
  projectId: "tour-project-eec80",
  storageBucket: "tour-project-eec80.appspot.com",
  messagingSenderId: "335165137878",
  appId: "1:335165137878:web:3295594e46afa410b1ba77"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
// const app = initializeApp(firebaseConfig);