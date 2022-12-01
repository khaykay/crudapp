import React from "react";
import "../styles/Country.css";
import { useNavigate } from "react-router-dom";

function Country({ flag, name, population, region, capital, alpha3Code }) {
  let navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => navigate(alpha3Code)}>
      <figure>
        <img src={flag} alt="" className="flag" />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default Country;
