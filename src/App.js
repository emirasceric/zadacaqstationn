import React  from "react";
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import SignInOrSignUp from "./pages/SignInOrSignUp"
import SignUp from "./components/auth/SignUp";




function App() {
  
  return (
    <Routes>
    <Route path="/SignInOrSignUp" element={<SignInOrSignUp/>} />
    <Route path="/Countries" element={<Home/>} />
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path="*" element={<SignInOrSignUp/>} />
  </Routes>
  
  
  );
}



export default App;