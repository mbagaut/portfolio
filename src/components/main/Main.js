import React from "react";
import Promo from "../promo/Promo";
import Navtab from "../navtab/Navtab";
import Techs from "../techs/Techs";
import AboutMe from "../aboutMe/AboutMe";
import Portfolio from "../portfolio/Portfolio";

function Main(props) {
  const { portfolio, techs, aboutMe, executeScroll } = props;
  return (
    <>
      <Promo />
      <Navtab executeScroll={executeScroll} />
      <Techs techs={techs} />
      <AboutMe aboutMe={aboutMe} />
      <Portfolio portfolio={portfolio} />
    </>
  );
}

export default Main;
