import { NavLink } from "react-router-dom";
import s from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLink
        to="/get_weather"
        exact
        className={s.navLink}
        activeClassName={s.active}
      >
        Home
      </NavLink>
      <NavLink
        to="/Information"
        className={s.navLink}
        activeClassName={s.active}
      >
        Information
      </NavLink>
    </nav>
  );
};

export default Navigation;
