import { useState, useEffect, lazy, Suspense } from "react";
import { useParams, Route, useRouteMatch, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import * as moviesApi from "../../API/weather-api";
import Loader from "react-loader-spinner";
import "./information.css";

const FiveDays = lazy(() => import("../../component/FiveDays/FiveDays"));

export default function Information() {
  const [weather, setWeather] = useState([]);
  const { url } = useRouteMatch();
  const { infoId } = useParams();
  const data = new Date();
  const location = useLocation();

  useEffect(() => {
    moviesApi.fetchDetails(infoId).then(setWeather);
  }, [infoId]);

  return (
    <main>
      {weather && (
        <div className="cards__thumb ">
          <div className="line__flex">
            <div>
              <h3>{data.toDateString(weather.dt)?.slice(0, 10)}</h3>
              <h2>
                {weather.name}
                <sup className="sup">{weather?.sys?.country}</sup>
              </h2>
              <h1>{Math.round(weather?.main?.temp - 273.15)}&#176;C</h1>
            </div>
            <div className="row__flex">
              <p>{weather?.weather?.map((value) => value.main)}</p>
              <img
                alt={"Weather Condition and City"}
                src={`HTTPS://openweathermap.org/img/wn/${weather?.weather?.map(
                  (value) => value.icon
                )}@2x.png`}
              />
            </div>
          </div>

          <div className="row__flex">
            <ul>
              <li>
                <p>
                  Feels like: {Math.round(weather?.main?.feels_like - 273.15)}
                  &#176;C
                </p>
              </li>
              <li>
                <p>
                  min: {Math.round(weather?.main?.temp_min - 273.15)}
                  &#176;C
                </p>
              </li>
              <li>
                <p>
                  max: {Math.round(weather?.main?.temp_max - 273.15)}
                  &#176;C
                </p>
              </li>
            </ul>
          </div>
          <div className="row__flex">
            <p>Humidity: {weather.main?.humidity} %</p>
            <p>Pressure: {weather.main?.pressure} mb</p>
            <p>Wind: {weather?.wind?.speed} km/h</p>
          </div>
          <div>
            <p className="sunrise-sunset">
              Sunrise:{" "}
              {new Date(weather.sys?.sunrise * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </p>
            <p className="sunrise-sunset">
              Sunset:{" "}
              {new Date(weather.sys?.sunset * 1000).toLocaleTimeString("en-IN")}
            </p>
          </div>
        </div>
      )}

      <div>
        <NavLink
          to={{
            pathname: `${url}/FiveDays`,
            state: { from: location },
          }}
        >
          <button className="button" type="button">
            Load More
          </button>
        </NavLink>
        <br />
      </div>
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="teal"
            height={300}
            width={300}
            timeout={3000}
          />
        }
      >
        <Route path={`${url}/FiveDays`}>
          {weather && (
            <FiveDays lon={weather?.coord?.lon} lat={weather?.coord?.lat} />
          )}
        </Route>
      </Suspense>
    </main>
  );
}
