import { useState, useEffect } from "react";
import s from "./WeatherList.module.css";

export default function WeatherList({ weather, onDeleteContacts, upDate }) {
  return (
    <ul className="contacts">
      {weather.map((value) => (
        <li key={value.id}>
          <img
            alt={"Weather Condition and City"}
            src={`http://openweathermap.org/img/wn/${value?.weather?.map(
              (value) => value.icon
            )}@2x.png`}
          />
          <h1>{Math.round(value?.main?.temp - 273.15)} &#176;C</h1>
          <h2>{value.name} </h2>
          <p>{value?.weather?.map((value) => value.description)}</p>
          <button
            button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContacts(value.id)}
          >
            Delete
          </button>
          <button
            button
            type="button"
            className="TodoList__btn"
            onClick={upDate}
          >
            upDate
          </button>
        </li>
      ))}
    </ul>
  );
}
