import React, { useState, useEffect } from "react";

function Description(props) {
  const { country } = props;
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://restcountries.com/v2/name/${country.name}`);
        const data = await response.json();
        setApiData(data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    if (country) {
      fetchData();
    }
  }, [country]);

  if (!apiData) {
    return null;
  }

  return (
    <div className="container">
      <h3>Country data</h3>
      <table className="grad_table">
        <tr>
          <td  className="grad_table_column ">
            <div>State name</div>
            <div>Capital city</div>
            <div>Population</div>
            <div>Country area </div>
            <div>Currencies</div>
            <div>Time Zone</div>
        
          </td>
          <td className="grad_table_body">
            <div>{apiData.name}</div>
            <div>{apiData.capital}</div>
            <div>{apiData.population.toLocaleString()}</div>
            <div>{apiData.area.toLocaleString()} m2</div>
            <div>{apiData.currencies[0].code}</div>
            <div>{apiData.timezones[0]}</div>         
          </td>
        </tr>
      </table>

      <h4>
         <img src={apiData.flag} alt="flag" className="flag-image" />
      </h4>
      </div>
    
  )
}

export default Description;
