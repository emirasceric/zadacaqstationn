import React, { useState, useEffect } from "react";
import {fetch} from "whatwg-fetch"
import Description from "./Description";

const countries = ["Bosnia and Herzegovina", "Serbia", "Croatia", "Germany", "Slovenia", "Austria", "China"];

function CountryList({ showDescription, setShowDescription }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
    
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
    
    return (
    <div className="nav">
    {countries.map((country) => (
    <button
     key={country} 
     className="country-button"

     onClick={() => handleClick(country)}>{country}</button>
    ))}
    
    {showDescription && selectedCountry && <Description country={selectedCountry} />}
    </div>
    );
    }
    
    export default CountryList
