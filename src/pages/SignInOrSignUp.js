import React from "react";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import "./SignIn_SignUp.css";


export default function SignInOrSignUp() {
  return (
    <React.Fragment>
      <SignIn />
      <SignUp />
    </React.Fragment>
  );

}
