import { useState, useEffect } from "react";
import * as moviesApi from "../../API/weather-api";
import SearchBar from "../../component/Searchbar/Searchbar";
import WeatherContainer from "../../component/WeatherContainer/WeatherContainer";
import WeatherList from "../../component/WeatherList/WeatherList";

export default function SearchCountry() {
  const [countries, setCountries] = useState("");
  const [searchCountries, setSearchCountries] = useState([]);
  const [list, setList] = useState(
    () => JSON.parse(window.localStorage.getItem("list")) ?? []
  );
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

  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (value) => {
    setCountries(value);
  };

  const deleteCard = (contactId) => {
    setList((list) => list.filter((value) => value.id !== contactId));
  };

  const addCard = (newEl) => {
    setList([newEl, ...list]);
    console.log(list);
  };

  const onUpdate = () => {
    moviesApi
      .fetchSearch(countries)
      .then((res) => setSearchCountries(res))
      .catch((error) => {
        setError(error);
      });
  };
  const filtered = Array.from(new Set(list));
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {typeof searchCountries.main != "undefined" ? (
        <WeatherContainer
          weatherContainer={searchCountries}
          onClick={addCard}
        />
      ) : (
        <div></div>
      )}

      {typeof searchCountries.main != "undefined" ? (
        <WeatherList
          weather={filtered}
          onDeleteContacts={deleteCard}
          upDate={onUpdate}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     searchCountries: state.searchCountries,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createCard: (searchCountries) =>
//       dispatch(action.createCard(searchCountries)),
//     deleteCard: (index) => dispatch(action.deleteCard(index)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchCountry);
