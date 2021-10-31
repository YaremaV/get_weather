import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch, useHistory, useLocation } from "react-router";
import * as moviesApi from "../../API/weather-api";
import SearchBar from "../../component/Searchbar/Searchbar";
import WeatherContainer from "../../component/WeatherContainer/WeatherContainer";

export default function SearchCountry() {
  const { url } = useRouteMatch();
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
  const removeCard = () => {};
  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

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
          // onClick={onUpdate}
        />
      )}
    </>
  );
}
