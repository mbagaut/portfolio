import React from "react";
import ReactTooltip from "react-tooltip";
import howToLearn from "../../images/how-to-learn.mkv";
import howToLearnWebM from "../../images/how-to-learn.webm";
import howToLearnAv1 from "../../images/how-to-learn.av1.mp4";
import russianTravel from "../../images/russian-travel.mkv";
import russianTravelWebM from "../../images/russian-travel.webm";
import russianTravelAv1 from "../../images/russian-travel.av1.mp4";
import mesto from "../../images/mesto.mkv";
import mestoWebM from "../../images/mesto.webm";
import mestoAv1 from "../../images/mesto.av1.mp4";

function Portfolio(props) {
  const { portfolio } = props;

  const overrideTooltipePosition = (
    { left, top },
    currentEvent,
    currentTarget,
    node
  ) => {
    const d = document.documentElement;
    left = Math.min(d.clientWidth - node.clientWidth, left);
    top = Math.min(d.clientHeight - node.clientHeight, top);
    left = Math.max(0, left);
    top = Math.max(0, top);
    return { top, left };
  };

  return (
    <section ref={portfolio} className="portfolio">
      <ReactTooltip id="howToLearn" overridePosition={overrideTooltipePosition}>
        <video className="portfolio__video" autoplay="" loop="loop" muted>
          <source src={howToLearnAv1} type="video/mp4" />
          <source src={howToLearnWebM} type="video/webm" />
          <source src={howToLearn} type="video/mp4" />
          <img alt="Тут должно было быть видео"></img>
        </video>
      </ReactTooltip>

      <ReactTooltip
        id="russianTravel"
        overridePosition={overrideTooltipePosition}
      >
        <video className="portfolio__video" autoplay="" loop="loop" muted>
          <source src={russianTravelAv1} type="video/mp4" />
          <source src={russianTravelWebM} type="video/webm" />
          <source src={russianTravel} type="video/mp4" />
          <img alt="Тут должно было быть видео"></img>
        </video>
      </ReactTooltip>

      <ReactTooltip id="mesto" overridePosition={overrideTooltipePosition}>
        <video className="portfolio__video" autoplay="" loop="loop" muted>
          <source src={mestoAv1} type="video/mp4" />
          <source src={mestoWebM} type="video/webm" />
          <source src={mesto} type="video/mp4" />
          <img alt="Тут должно было быть видео"></img>
        </video>
      </ReactTooltip>

      <h3 className="portfolio__title">Примеры работ</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            data-tip
            data-for="howToLearn"
            href="https://mbagaut.github.io/how-to-learn/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            Статичный сайт
          </a>
          <div className="portfolio__icon"></div>
        </li>
        <li className="portfolio__item">
          <a
            data-tip
            data-for="russianTravel"
            href="https://mbagaut.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            Адаптивный сайт
          </a>
          <div className="portfolio__icon"></div>
        </li>
        <li className="portfolio__item">
          <a
            data-tip
            data-for="mesto"
            href="https://mbagaut.github.io/mesto/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link"
          >
            Одностраничное приложение
          </a>
          <div className="portfolio__icon"></div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
