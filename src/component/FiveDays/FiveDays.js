import { useState, useEffect } from "react";
import * as moviesApi from "../../API/weather-api";

export default function FiveDays({ infoId }) {
  const [days, setDays] = useState([]);
  const data = new Date();

  //   useEffect(() => {
  //     moviesApi.fetchFiveDays(infoId).then((res) => setDays(res.list));
  //   }, [infoId]);
  return (
    <>
      {console.log(days)}
      <ul>
        {days.length &&
          days?.map((day) => (
            <li>
              <h3>{data.toDateString(day.dt)}</h3>
              <h1>{Math.round(day?.main?.temp - 273.15)} &#176;C</h1>
              <img
                alt={"Weather Condition and City"}
                src={`HTTPS://openweathermap.org/img/wn/${day?.weather?.map(
                  (value) => value.icon
                )}@2x.png`}
              />
              <p>{day?.weather?.map((value) => value.main)}</p>
              <p>{day?.weather?.map((value) => value.description)}</p>
              <p>Humidity: {day.main?.humidity}%</p>
              <p>Pressure: {day.main?.pressure} мм рт. ст.</p>
              <p>Wind: {day?.wind?.speed}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
