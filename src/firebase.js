// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ2aNlZqYBzQdXGqyvbC5658OLg4YzfQ0",
  authDomain: "clone-a7309.firebaseapp.com",
  projectId: "clone-a7309",
  storageBucket: "clone-a7309.appspot.com",
  messagingSenderId: "52564588796",
  appId: "1:52564588796:web:9d95425e742b9b4526ff79",
  measurementId: "G-BX01J4BJYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
