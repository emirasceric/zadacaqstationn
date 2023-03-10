import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    // Add check for password length
  if (password.length < 8) {
    setErrorMessage("Password must be at least 8 characters long");
    return;
    
  }
  // Add check for presence of uppercase letter
  if (!/[A-Z]/.test(password)) {
    setErrorMessage("Password must contain at least one uppercase letter");
    return;
  }
  if (!/[!@#$%^&*)(+=._-]/.test(password)) {
    setErrorMessage("Password must contain at least one special character (!@#$%^&*)(+=._-)");
    return;
  }


    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    setErrorMessage("");
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/SignUp");
        setErrorMessage("You are registered!");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use" ){
          setErrorMessage("Account is already registred");
        } 

      });
  };

  return (
    <div className="page-backgroung sign-up-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
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

        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>

        {errorMessage !== "" && <p className="error-message">{errorMessage}</p>}
        <button type="signUp">Register</button>
      </form>
     
      <p className="donthaveaaccount">You have an account? </p>

      <button type="Sign Up2">
        <Link to="/SignInOrSignUp">Click to Sign In</Link>
      </button>
    </div>
  );
};

export default SignUp;
