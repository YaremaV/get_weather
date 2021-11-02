import React, { useEffect, useState } from "react";
import moment from "moment";
import "./geolocation.css";

const URL = "https://api.openweathermap.org/data/2.5";
const KEY = "2d20223674e609e0aa7b3ad29d181f8b";
const EACT_APP_ICON_URL = "https://openweathermap.org/img/w";

export default function Geolocation() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      {data && (
        <div className="main">
          <p className="header">{data.name}</p>

          <div className="flex">
            <p className="day">
              {moment().format("dddd")}, <span>{moment().format("LL")}</span>
            </p>
            \{" "}
            <img
              alt={"Weather Condition and City"}
              src={`http://openweathermap.org/img/wn/${data?.weather?.map(
                (value) => value.icon
              )}@2x.png`}
            />
            <p className="description">
              {data.weather?.map((value) => value.main)}
            </p>
          </div>

          <div className="flex">
            <p className="temp">
              Temprature: {Math.round(data.main?.temp)} &deg;C
            </p>
            <p className="temp">Humidity: {data.main?.humidity} %</p>
          </div>

          <div className="flex">
            <p className="sunrise-sunset">
              Sunrise:{" "}
              {new Date(data.sys?.sunrise * 1000).toLocaleTimeString("en-IN")}
            </p>
            <p className="sunrise-sunset">
              Sunset:{" "}
              {new Date(data.sys?.sunset * 1000).toLocaleTimeString("en-IN")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
