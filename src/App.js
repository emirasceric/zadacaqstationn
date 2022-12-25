import React  from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import SignInOrSignUp from "./pages/SignInOrSignUp"

function App() {
  
 
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/SignInOrSignUp" element={<SignInOrSignUp/>} />
      

    </Routes>
  );
}



export default App;