import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signOut,
  onAuthStateChanged, 
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDs49OYpNmLEKzoLuWkiydBLRVmSECodwE",
  authDomain: "learn-react-13cf4.firebaseapp.com",
  projectId: "learn-react-13cf4",
  storageBucket: "learn-react-13cf4.appspot.com",
  messagingSenderId: "782701918760",
  appId: "1:782701918760:web:b520ede1a5c2a04d49531d",
  measurementId: "G-2HETTW5VRD"
});
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);
  //const userData = [{"Name": auth.currentUser.displayName}];
  // console.log(userData.map((data) => data.Name));

export function RegisterWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
export function SignOutGoogle() {
  if (window.confirm('Are you sure want to log out?')){
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('Sign Out Successful');
    }).catch((error) => {
      // An error happened.
    });
  }
}



onAuthStateChanged(auth, user => {
  if (user != null){
    const userLogin = true;
    console.log("user login");
    const userEmail = auth.currentUser.email;
    const userDataPic = auth.currentUser.photoURL;
    const userDataName = auth.currentUser.displayName;
    console.log(userDataPic);
    
    ReactDOM.render(
      <React.StrictMode>
        <App userLogin={userLogin} username={userDataName} userPic={userDataPic} email={userEmail}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }else{
    console.log("No user");
    const userLogin = false;

    ReactDOM.render(
      <React.StrictMode>
        <App userLogin={userLogin}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
});

// ReactDOM.render(
//   <React.StrictMode>
//     <App userLogin={userLogin}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
