// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQjPqD8CCwDCfseao0UvMvLLbJ2c3nH78",
  authDomain: "nightsky-web-clearance.firebaseapp.com",
  projectId: "nightsky-web-clearance",
  storageBucket: "nightsky-web-clearance.appspot.com",
  messagingSenderId: "98007511799",
  appId: "1:98007511799:web:ab6803c7970ba6456119f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);