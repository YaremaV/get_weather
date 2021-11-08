import { Link } from "react-router-dom";
import { connect } from "react-redux";
import listAction from "../../redux/list/list-action";
import "./WeatherList.css";

function WeatherList({ weather, onDelete, upDate }) {
  return (
    <ul className="gallery__wrapper">
      {weather.map((value) => (
        <li
          key={value.id}
          className="gallery__list container-medium centered_cont"
        >
          <Link to={`/Information/${value.id}`}>
            <div className="wraper">
              <div>
                <h2>{Math.round(value?.main?.temp - 273.15)} &#176;C</h2>
                <h3>{value.name} </h3>
              </div>
              <div className="fav-info">
                <img
                  className="image"
                  alt={"Weather Condition and City"}
                  src={`http://openweathermap.org/img/wn/${value?.weather?.map(
                    (value) => value.icon
                  )}@2x.png`}
                />
                <p>{value?.weather?.map((value) => value.description)}</p>
              </div>
            </div>
          </Link>

          <button
            className="btn"
            attribute={true}
            type="button"
            onClick={() => onDelete(value.id)}
          >
            Delete
          </button>
          <button
            className="update"
            attribute={true}
            type="button"
            onClick={upDate}
          >
            UpDate
          </button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  weather: state.list.items,
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(listAction.deleteList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
