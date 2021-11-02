import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch, useHistory, useLocation } from "react-router";
import * as moviesApi from "../../API/weather-api";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../component/Searchbar/Searchbar";
import WeatherContainer from "../../component/WeatherContainer/WeatherContainer";
import WeatherList from "../../component/WeatherList/WeatherList";
import Geolocation from "../../component/Geolocation/Geolocation";

export default function SearchCountry() {
  const { url } = useRouteMatch();
  const [countries, setCountries] = useState("");
  const [searchCountries, setSearchCountries] = useState([]);
  const [list, setList] = useState([]);
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

  // const removeCard = (contactId) => {
  //   setList((list) => list.filter((value) => value.id !== contactId));
  // };

  const addCard = (newCard) => {
    console.log("click");
    const normValue = newCard.name?.toLowerCase();
    // newCard.id = uuidv4();
    setList({ newCard, ...searchCountries });
    // searchCountries.some(({ name }) => name?.toLowerCase() === normValue)
    //   ? alert(`${newCard.name} is already in contacts`)
    //   : setSearchCountries({ newCard, ...searchCountries });
  };

  // const onUpdate = () => {
  //   moviesApi
  //     .fetchSearch(countries)
  //     .then((res) => setSearchCountries(res))
  //     .catch((error) => {
  //       setError(error);
  //     });
  // };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {countries && (
        <WeatherContainer
          id={searchCountries.id}
          temp={searchCountries?.main?.temp}
          city={searchCountries.name}
          icon={searchCountries?.weather?.map((value) => value.icon)}
          desc={searchCountries?.weather?.map((value) => value.description)}
          humidity={searchCountries.main?.humidity}
          pressure={searchCountries.main?.pressure}
          wind={searchCountries.wind?.speed}
          visibility={searchCountries?.visibility}
          onClick={addCard}
        />
      )}
      <Geolocation />
      {/* {list && <WeatherList weather={list} />} */}
    </>
  );
}
