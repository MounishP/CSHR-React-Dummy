// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWqJMkAHOmYq62ILOzgY1CAgn3A0TqVyI",
  authDomain: "careerschool-hr-solutions.firebaseapp.com",
  databaseURL: "https://careerschool-hr-solutions.firebaseio.com",
  projectId: "careerschool-hr-solutions",
  storageBucket: "careerschool-hr-solutions.appspot.com",
  messagingSenderId: "20379990803",
  appId: "1:20379990803:web:6fe9f34695f331d2ca38e6",
  measurementId: "G-84GEYY367C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);