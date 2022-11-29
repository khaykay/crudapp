import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Card.css";

function Card() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(function (response) {
        console.log(response.data[0]);
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(`this is source of ${error}`);
      });

    // async function getUser() {
    //   try {
    //     const response = await axios.get(
    //       "https://restcountries.com/v3.1/name/peru"
    //     );
    //     console.log(response.data[0].name.common);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  }, []);
  return (
    <div className="card">
      {/* {countries.map((country) => {
        return (
          <div className="">
            <img src={country.flags.png} alt="" />

            {country.name.common}
          </div>
        );
      })} */}
      <div className="card-wrapper"></div>
    </div>
  );
}

export default Card;
