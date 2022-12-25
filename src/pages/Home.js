import React, { useState } from "react";
import "../App.css";
import CountryList from "../components/CountryList";
import AuthDetails from "../components/auth/AuthDetails";

function Home() {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="vremenska">
      <header>
        <div className="title">
          {" "}
          <h1>Countries</h1>
        </div>
      </header>
      <AuthDetails />
      <CountryList
        showDescription={showDescription}
        setShowDescription={setShowDescription}
      />
    </div>
  );
}

export default Home;
