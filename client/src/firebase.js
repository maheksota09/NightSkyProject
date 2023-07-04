// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
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

// Create instance of Google provider object
export const provider = new GoogleAuthProvider();

export const googleLogIn = (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.displayName)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
}