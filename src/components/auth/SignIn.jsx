import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
        
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/user-not-found" ){
          setErrorMessage("Niste registrovani!");
        } 
      });
  };

  return (
    <div className="page-backgroung log-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        
        <button type="logIn">Log In</button>
      

      </form>

      <p className="donthaveaaccount1 ">Don't have an account?</p>

      <button type="sign Up1">
        <Link to="/SignUp"> Click to Sign Up! </Link>
      </button>

      <div className="errorMessage">{errorMessage && <p>{errorMessage}</p>}</div>
    </div>
  );
};

export default SignIn;
