import React, { useState } from "react";
import './App.css';
import CountryList from "./components/CountryList";
import	SignIn from "./components/auth/SignIn";

function App() {
  const [showDescription, setShowDescription] = useState(false);
 

  return (
    <div className="Countries">
      <header>
        <h1>Države</h1>
      </header>
       { <CountryList showDescription={showDescription} setShowDescription={setShowDescription} />}
      </div>
  );
}

export default App;
