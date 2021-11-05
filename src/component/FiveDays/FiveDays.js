import { useState, useEffect } from "react";
import * as moviesApi from "../../API/weather-api";
import "./fewdays.css";

export default function FiveDays({ lon, lat }) {
  const [days, setDays] = useState([]);
  const date = new Date();
  console.log(date);
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
              {/* data.daily.forEach((value, index) => {
				if (index > 0) {
					var dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "long",
					}); */}

              <h3>
                {new Date(day.dt * 1000).toLocaleDateString("en", {
                  weekday: "long",
                })}
              </h3>
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
