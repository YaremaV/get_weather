import { useState, useEffect } from "react";
import s from "./WeatherList.module.css";

export default function WeatherList({ weather, onDeleteContacts }) {
  const [list, setList] = useState([]);
  const icon = weather?.weather?.map((value) => value.icon);
  const descr = weather?.weather?.map((value) => value.description);

  useEffect(() => {
    setList(weather);
  }, [list, weather]);
  return (
    <ul className="contacts">
      {console.log(list)}

      {list?.map((value) => {
        <li key={weather.id}>
          <img
            alt={"Weather Condition and City"}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          />
          <h1>{Math.round(weather?.main?.temp - 273.15)} &#176;C</h1>
          <h2>{weather.name} </h2>
          <p>{descr}</p>
          <button
            button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContacts(weather.id)}
          >
            Delete
          </button>
        </li>;
      })}
    </ul>
  );
}
