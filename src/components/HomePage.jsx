import React from "react";
import "../styles/Homepage.css";
import Card from "./Card";
import Search from "./Search";
import { useEffect, useState } from "react";
import CountryPage from "./CountryPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Main() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      let response = await fetch("https://restcountries.com/v2/all");
      let countries = await response.json();
      console.log(countries);
      setCountries(countries);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main">
      {/* <Search />
      <Card
        error={error}
        countries={countries}
        loading={loading}
        tryAgain={fetchData}
      /> */}
      {/* <CountryPage countries={countries} loading={loading} /> */}

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search />
                <Card
                  error={error}
                  countries={countries}
                  loading={loading}
                  tryAgain={fetchData}
                />
              </>
            }
          />
          <Route
            path="/:countryName"
            element={<CountryPage loading={loading} countries={countries} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default Main;
