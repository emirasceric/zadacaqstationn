import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import CountryList from "../components/CountryList";

const firebaseConfig = {
  apiKey: "AIzaSyB8dNCzCi74NBmZFeZVbMy50veh1AAWGiQ",
  authDomain: "drzave-55a30.firebaseapp.com",
  projectId: "drzave-55a30",
  storageBucket: "drzave-55a30.appspot.com",
  messagingSenderId: "471006884514",
  appId: "1:471006884514:web:2d5cfaa797d3e3e3bbddfb"
};

const app = initializeApp(firebaseConfig);
const auth = app.auth();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      setUser(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      setUser(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  if (user) {
    return (
      <div>
        <CountryList />
      </div>
    );
  }

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" onClick={handleLogin}>Log in</button>
      <button type="submit" onClick={handleRegister}>Register</button>
    </form>
  );
}

export default Login;
