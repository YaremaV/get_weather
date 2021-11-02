import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch, useHistory, useLocation } from "react-router";
import * as moviesApi from "../../API/weather-api";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import * as action from "../../redux/action";
import SearchBar from "../../component/Searchbar/Searchbar";
import WeatherContainer from "../../component/WeatherContainer/WeatherContainer";
import WeatherList from "../../component/WeatherList/WeatherList";

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

  const removeCard = (contactId) => {
    setList((list) => list.filter((value) => value.id !== contactId));
  };

  const addCard = (newCard) => {
    console.log("click");
    const normValue = newCard.name?.toLowerCase();
    // newCard.id = uuidv4();

    searchCountries.some(({ name }) => name?.toLowerCase() === normValue)
      ? alert(`${newCard.name} is already in contacts`)
      : setSearchCountries({ newCard, ...searchCountries });
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
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {typeof searchCountries.main != "undefined" ? (
        <WeatherContainer
          weatherContainer={searchCountries}
          onClick={addCard}
        />
      ) : (
        <div></div>
      )}

      {typeof list.main != "undefined" ? (
        <WeatherList weather={list} onClick={removeCard} />
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
