import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDs49OYpNmLEKzoLuWkiydBLRVmSECodwE",
  authDomain: "learn-react-13cf4.firebaseapp.com",
  projectId: "learn-react-13cf4",
  storageBucket: "learn-react-13cf4.appspot.com",
  messagingSenderId: "782701918760",
  appId: "1:782701918760:web:b520ede1a5c2a04d49531d",
  measurementId: "G-2HETTW5VRD",
});
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

export function RegisterWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // const user = result.user;
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
export function SignOutGoogle() {
  if (window.confirm("Are you sure want to Sign out?")) {
    signOut(auth)
      .then(() => {
        alert("Sign Out Successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    const userLogin = true;
    console.log("user login");
    const userEmail = auth.currentUser.email;
    const userDataPic = auth.currentUser.photoURL;
    const userDataName = auth.currentUser.displayName;

    ReactDOM.render(
      <React.StrictMode>
        <App
          userLogin={userLogin}
          username={userDataName}
          userPic={userDataPic}
          email={userEmail}
        />
      </React.StrictMode>,
      document.getElementById("root")
    );
  } else {
    console.log("No user");
    const userLogin = false;

    ReactDOM.render(
      <React.StrictMode>
        <App userLogin={userLogin} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
});

reportWebVitals();
