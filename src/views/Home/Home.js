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
    list?.some((value) => value.name.includes(newEl.name))
      ? alert(`${newEl.name} is already in list`)
      : setList([newEl, ...list]);
    // console.log(list?.map((value)=>value.name));
  };

  const onUpdate = () => {
    moviesApi
      .fetchSearch(countries)
      .then((res) => setSearchCountries(res))
      .catch((error) => {
        setError(error);
      });
  };
  // const filtered = Array.from(new Set(list));
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
          weather={list}
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
