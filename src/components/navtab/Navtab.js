import React from "react";
import { Link } from "react-router-dom";

function Navtab(props) {
  const { executeScroll } = props;
  function executeScrollToPortfolio() {
    executeScroll("Portfolio");
  }
  function executeScrollToTechs() {
    executeScroll("Techs");
  }
  function executeScrollToAboutMe() {
    executeScroll("AboutMe");
  }
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__item">
          <Link to="/#" onClick={executeScrollToTechs} className="navtab__link">
            Технологии
          </Link>
        </li>
        <li className="navtab__item">
          <Link
            to="/#"
            onClick={executeScrollToAboutMe}
            className="navtab__link"
          >
            Обо мне
          </Link>
        </li>
        <li className="navtab__item">
          <Link
            to="/#"
            onClick={executeScrollToPortfolio}
            className="navtab__link"
          >
            Примеры работ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navtab;
