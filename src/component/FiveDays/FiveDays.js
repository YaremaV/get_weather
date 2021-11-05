import { useState, useEffect } from "react";
import * as moviesApi from "../../API/weather-api";
import "./fewdays.css";

export default function FiveDays({ lon, lat }) {
  const [days, setDays] = useState([]);
  const date = new Date();

  useEffect(() => {
    moviesApi.fetchFewDays(lon, lat).then((res) => setDays(res.daily));
  }, [lat, lon]);
  return (
    <>
      {console.log(days)}
      <ul className="flex_line">
        {days &&
          days?.map((day, idx) => (
            <li key={idx} className="list">
              <h3>{date.toDateString(day.dt)?.slice(0, 10)}</h3>
              <h1>{Math.round(day?.temp?.day - 273.15)} &#176;C</h1>
              <img
                alt={"Weather Condition and City"}
                src={`HTTPS://openweathermap.org/img/wn/${day?.weather?.map(
                  (value) => value.icon
                )}@2x.png`}
              />
              <p>{day?.weather?.map((value) => value.main)}</p>
              <p>{day?.weather?.map((value) => value.description)}</p>
              <p>Humidity: {day.humidity} %</p>
              <p>Pressure: {day.pressure} mb</p>
              <p>Wind: {day?.wind_speed} km/h</p>
            </li>
          ))}
      </ul>
    </>
  );
}
