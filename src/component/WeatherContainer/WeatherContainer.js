import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import listAction from "../../redux/list/list-action";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./weather.css";

function WeatherContainer({ weatherContainer, onClick }) {
  const icon = weatherContainer?.weather?.map((value) => value.icon);
  const description = weatherContainer?.weather?.map(
    (value) => value.description
  );
  return (
    <ul className="row ">
      <li key={weatherContainer.id} className="container-medium centered_cont">
        <Link to={`/Information/${weatherContainer.id}`}>
          <div className="wraper">
            <div>
              <h2>
                {Math.round(weatherContainer?.main?.temp - 273.15)} &#176;C
              </h2>
              <h3>{weatherContainer.name} </h3>
            </div>
            <div className="fav-info">
              <img
                className="image"
                alt={"Weather Condition and City"}
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              />
              <p>{description}</p>
            </div>
          </div>
        </Link>
        <button
          attribute={true}
          onClick={() => onClick(weatherContainer)}
          className="btn"
          type="button"
        >
          <IoIosAddCircleOutline size="30" />
        </button>
      </li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onClick: (newEL) => dispatch(listAction.addList(newEL)),
});

export default connect(null, mapDispatchToProps)(WeatherContainer);
