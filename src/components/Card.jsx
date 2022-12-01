import React from "react";
import "../styles/Card.css";
import Country from "./Country";

function Card({ countries, loading, error, tryAgain }) {
  return (
    <div className="card">
      {!loading ? (
        <>
          {!error ? (
            countries.map((country) => {
              return (
                <Country
                  key={country.name}
                  flag={country.flags.svg}
                  name={country.name || ""}
                  population={country.population.toLocaleString("en")}
                  region={country.region}
                  capital={country.capital || "No capital"}
                  alpha3Code={country.alpha3Code}
                />
              );
            })
          ) : (
            <div className="text-2xl mt-7 font-medium space-y-5 text-gray-900 dark:text-white">
              <p>Error. Try again</p>
              <button
                onClick={tryAgain}
                className="dark:bg-darkelem shadow-md bg-white text-base px-3 py-2 rounded-md"
              >
                Refresh
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <p>is loading ....</p>
        </>
      )}
    </div>
  );
}

export default Card;
