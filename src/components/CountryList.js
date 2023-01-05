import React, { useState, useEffect } from "react";
import { fetch } from "whatwg-fetch";
import Description from "./Description";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


const countries = [];

function CountryList({ showDescription, setShowDescription }) {
  const [selectedCountry, setSelectedCountry] = useState(null || undefined);
  const [newCountry, setNewCountry] = useState(""); // added state to store the value of the new country
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [newName, setNewName] = useState("");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName });
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
    console.log("1");
  }, []);

  // added createUser as a dependency

  useEffect(() => {
    if (selectedCountry) {
      setShowDescription(true);
    } else {
      setShowDescription(false);
    }
  }, [selectedCountry, setShowDescription]);

  const handleClick = async (name) => {
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const data = await response.json();
      setSelectedCountry(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newCountry.trim() !== "") {
      // check if the newCountry value is not an empty string after trimming whitespace

      countries.push(newCountry); // add the new country to the list
      setNewCountry(""); // reset the value of the new country
    } else {
      console.log("niste dobro unijeli"); // display an error message or do something else to indicate that the input is invalid
    
    
    }
    createUser();
    getUsers(); // call the createUser function to add the new user to the database
    setNewName(""); // reset the value of the input field
    console.log("2");
  };

  return (
    <div className="nav">
      {users.map((user) => (
        <button
          key={user.id}
          className="country-button"
          onClick={() => handleClick(user.name)}
        >
          {user.name}
        </button>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a country"
          value={newName}
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <button type="submit"> Add Country </button>
      </form>

      {showDescription && selectedCountry && (
        <Description country={selectedCountry} />
      )}
    </div>
  );
}

export default CountryList;
