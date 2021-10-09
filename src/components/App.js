import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import Menu from "./menu/Menu";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import PageNotFound from "./pageNotFound/PageNotFound";
import "./App.css";

function App(props) {
  const location = useLocation();
  const currentPath = location.pathname;

  // записываем объект, возвращаемый хуком, в переменную
  const portfolio = React.useRef();
  const techs = React.useRef();
  const aboutMe = React.useRef();

  const executeScroll = (element) => {
    if (element === "Portfolio") {
      portfolio.current.scrollIntoView({ behavior: "smooth" });
    } else if (element === "Techs") {
      techs.current.scrollIntoView({ behavior: "smooth" });
    } else if (element === "AboutMe") {
      aboutMe.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [menuIsActivated, setMenuIsActivated] = React.useState("");
  function openMenu() {
    setMenuIsActivated(true);
  }
  function closeMenu() {
    setMenuIsActivated("");
  }

  return (
    <div className="App">
      <Header currentPath={currentPath} openMenu={openMenu} />
      <Switch>
        <Route path="/projects" component={Projects} />
        {/* <Route path="/petProjects" component={petProjects} /> */}
        <Route path="/contacts" component={Contacts} />
        <Route exact path="/">
          <Main
            portfolio={portfolio}
            techs={techs}
            aboutMe={aboutMe}
            executeScroll={executeScroll}
          />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
      <Menu menuIsActivated={menuIsActivated} closeMenu={closeMenu} />
    </div>
  );
}

export default App;
