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
    <div className="content con_grad">
      <h3>Country data</h3>
      <table className="grad_table">
        <tr>
          <td className="grad_table_column bg-c2 color-white">
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
            <div>{apiData.population}</div>
            <div>{apiData.area}</div>
            <div>{apiData.currencies[0].code}</div>
            <div>{apiData.timezones[0]}</div>
          </td>
        </tr>
      </table>
      </div>
    
  );
}

export default Description;
