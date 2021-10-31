import { useState, useEffect } from "react";
import {
  useParams,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router";
import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as moviesApi from "../../API/weather-api";

export default function Information() {
  const [weather, setWeather] = useState([]);
  const { url } = useRouteMatch();
  const { infoId } = useParams();
  const data = new Date();

  useEffect(() => {
    moviesApi.fetchDetails(infoId).then(setWeather);
  }, [infoId]);

  return (
    <main>
      {weather && (
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h2>{weather.name}</h2>

              <img
                alt={"Weather Condition and City"}
                src={`http://openweathermap.org/img/wn/${weather?.weather?.map(
                  (value) => value.icon
                )}@2x.png`}
              />
              <p>{weather?.weather?.map((value) => value.main)}</p>
              <p>{weather?.weather?.map((value) => value.description)}</p>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-8 col-sm-6">
                  <h3>{data.toDateString(weather.dt)}</h3>
                  <h1>{Math.round(weather?.main?.temp - 273.15)} &#176;C</h1>
                  <p>
                    Feels like: {Math.round(weather?.main?.feels_like - 273.15)}{" "}
                    &#176;C
                  </p>
                  <span>
                    min: {Math.round(weather?.main?.temp_min - 273.15)}
                    &#176;C
                  </span>
                  <span>
                    max: {Math.round(weather?.main?.temp_max - 273.15)}
                    &#176;C
                  </span>
                </div>
                <div className="col-4 col-sm-6">
                  {" "}
                  <p>Humidity: {weather.main?.humidity}%</p>
                  <p>Pressure: {weather.main?.pressure} мм рт. ст.</p>
                  <p>Wind: {weather?.wind?.speed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div className={s.flex}>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { from: location },
          }}
        >
          <button type="button" className={s.button}>
            Casts
          </button>
        </NavLink>
        <br />
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: { from: location },
          }}
        >
          <button type="button" className={s.button}>
            Reviews
          </button>
        </NavLink>
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
        <Route path={`${url}/cast`}>
          {movies && <Casts movieId={movieId} />}
        </Route>
        <Route path={`${url}/reviews`}>
          {movies && <Reviews movieId={movieId} />}
        </Route>
      </Suspense> */}
    </main>
  );
}
