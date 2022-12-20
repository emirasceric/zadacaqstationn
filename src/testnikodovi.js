/*

App-js

import { initializeApp, auth } from "firebase/app";
import LoginForm from './components/login/LoginForm';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8dNCzCi74NBmZFeZVbMy50veh1AAWGiQ",
  authDomain: "drzave-55a30.firebaseapp.com",
  projectId: "drzave-55a30",
  storageBucket: "drzave-55a30.appspot.com",
  messagingSenderId: "471006884514",
  appId: "1:471006884514:web:2d5cfaa797d3e3e3bbddfb"
};

// Initialize Firebase
initializeApp(firebaseConfig);






loginForm.js

import React, { useState } from 'react';
import firebase from 'firebase';
import { auth as firebaseAuth } from 'firebase';


firebaseAuth().signInWithEmailAndPassword(email, password)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default LoginForm;





index.js
import { reportWebVitals } from './reportWebVitals';

reportWebVitals();





















*/
      
      
      
      
      
      
      
      
