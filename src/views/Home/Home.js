import { useState, useEffect, lazy } from "react";
import * as moviesApi from "../../API/weather-api";
import SearchBar from "../../component/Searchbar/Searchbar";

const WeatherContainer = lazy(() =>
  import("../../component/WeatherContainer/WeatherContainer")
);
const WeatherList = lazy(() =>
  import("../../component/WeatherList/WeatherList")
);

export default function SearchCountry() {
  const [countries, setCountries] = useState("");
  const [searchCountries, setSearchCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (countries === "") {
      return;
    }

    moviesApi
      .fetchSearch(countries)
      .then((res) => setSearchCountries(res))
      .catch((error) => {
        setError(error);
      });
  }, [countries]);

  const handleSubmit = (value) => {
    setCountries(value);
  };

  const onUpdate = () => {
    moviesApi
      .fetchSearch(countries)
      .then((res) => setSearchCountries(res))
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {typeof searchCountries.main != "undefined" ? (
        <WeatherContainer weatherContainer={searchCountries} />
      ) : (
        <div></div>
      )}

      {typeof searchCountries.main != "undefined" ? (
        <WeatherList upDate={onUpdate} />
      ) : (
        <div></div>
      )}
    </>
  );
}
