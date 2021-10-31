import React from "react";
import { Link } from "react-router-dom";
import { useRouteMatch, useHistory, useLocation } from "react-router";
import "./weather.css";

export default function WeatherContainer({
  id,
  temp,
  city,
  icon,
  desc,
  onClick,
}) {
  const { url } = useRouteMatch();
  return (
    <main className="container">
      <ul className="row">
        <li key={id} className="container-medium main">
          <Link to={`/Information/${id}`}>
            <img
              alt={"Weather Condition and City"}
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />

            <h1>{Math.round(temp - 273.15)} &#176;C</h1>
            <h2>{city} </h2>
            <p>{desc}</p>
          </Link>
          <div className="d-grid gap-2 d-md-block">
            {/* <button className="btn btn-primary" type="button">
              Add
            </button> */}
            <button onClick={onClick} className="btn btn-primary" type="button">
              Add
            </button>
          </div>
        </li>
      </ul>
    </main>

    /* <ul>
        <Link to={`/${url}/${id}`}>
          <li key={id}> */
    /* <h2>{sys.country}</h2> */
    /* <p> {city}</p> */
    /* <p> {Date(dt).toString()}</p> */

    /* <p>
              Temperature: {Math.round(temp - 273.15)}
              &#176;C */
    /* <span>
        min: {Math.round(searchCountries?.main?.temp_min - 273.15)}
        &#176;C
      </span>
      <span>
        max: {Math.round(searchCountries?.main?.temp_max - 273.15)}
        &#176;C
      </span> */
    /* </p>
            <p>Влажность:{humidity}%</p>
            <p>Давление: {pressure} мм рт. ст.</p>
            <div>
              <button type="button">Add </button> */
    /* <button type="button" onClick={removeCard}> */
    /* Delete
      </button> */
    /* </div> */
    /* </li> */
    /* //     </Link> */
    /* //   </ul> */
    /* // </main> */
  );
}
