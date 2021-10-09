import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const { burgerOn } = props;

  return (
    <>
      <div className={`navigation ${burgerOn && "navigation_disable"}`}>
        {burgerOn && (
          <NavLink
            to="/"
            activeClassName="navigation__link_active"
            className="navigation__link"
          >
            Главная
          </NavLink>
        )}
        <NavLink
          to="/projects"
          activeClassName="navigation__link_active"
          className="navigation__link"
        >
          Портфолио
        </NavLink>
        {/* <NavLink
          to="/projects2"
          activeClassName="navigation__link_active"
          className="navigation__link"
        >
          Проекты 2
        </NavLink> */}
      </div>
    </>
  );
}

export default Navigation;
