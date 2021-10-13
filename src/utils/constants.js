import howToLearn from "../images/how-to-learn.mkv";
import howToLearnWebM from "../images/how-to-learn.webm";
import howToLearnAv1 from "../images/how-to-learn.av1.mp4";
import russianTravel from "../images/russian-travel.mkv";
import russianTravelWebM from "../images/russian-travel.webm";
import russianTravelAv1 from "../images/russian-travel.av1.mp4";
import mesto from "../images/mesto.mkv";
import mestoWebM from "../images/mesto.webm";
import mestoAv1 from "../images/mesto.av1.mp4";
import movies from "../images/movies.mkv";
import moviesWebM from "../images/movies.webm";
import moviesAv1 from "../images/movies.av1.mp4";

export const PROJECTS_ARRAY = [
  {
    _id: 1,
    name: "How To Learn",
    url: "https://mbagaut.github.io/how-to-learn/",
    type: "Статичный сайт",
    techs: "HTML, CSS, БЭМ",
    githubUrl: "https://github.com/mbagaut/how-to-learn",
    linkText: "Front-end",
    videoMkv: howToLearn,
    videoWebM: howToLearnWebM,
    videoAv1: howToLearnAv1,
    deploy: "GitHub Pages",
  },
  {
    _id: 2,
    name: "Russian Travel",
    url: "https://mbagaut.github.io/russian-travel/",
    type: "Статичный сайт",
    techs: "HTML, CSS, БЭМ",
    githubUrl: "https://github.com/mbagaut/russian-travel",
    linkText: "Front-end",
    videoMkv: russianTravel,
    videoWebM: russianTravelWebM,
    videoAv1: russianTravelAv1,
    deploy: "GitHub Pages",
  },
  {
    _id: 3,
    name: "Mesto",
    url: "https://mbagaut.github.io/mesto/",
    type: "Одностраничное приложение",
    techs: "HTML, CSS, JS, ООП, БЭМ",
    githubUrl: "https://github.com/mbagaut/mesto",
    linkText: "Front-end",
    videoMkv: mesto,
    videoWebM: mestoWebM,
    videoAv1: mestoAv1,
    deploy: "GitHub Pages",
  },
  {
    _id: 4,
    name: "Mesto (React)",
    url: "https://mesto.maratb.nomoredomains.monster",
    type: "Одностраничное приложение на React",
    techs: "React, БЭМ, Express, Nginx, MongoDB",
    githubUrl: "https://github.com/mbagaut/react-mesto-api-full",
    linkText: "Front-end + Api",
    videoMkv: mesto,
    videoWebM: mestoWebM,
    videoAv1: mestoAv1,
    deploy: "Yandex.cloud",
  },
  {
    _id: 5,
    name: "Movies-Explorer",
    url: "https://movies-explorer.maratb.nomoredomains.monster",
    type: "Приложение на React",
    techs: "React, БЭМ, Express, Nginx, MongoDB",
    githubUrl: "https://github.com/mbagaut/movies-explorer-frontend",
    githubUrlApi: "https://github.com/mbagaut/movies-explorer-api",
    linkText: "Front-end",
    linkApiText: "Back-end",
    videoMkv: movies,
    videoWebM: moviesWebM,
    videoAv1: moviesAv1,
    deploy: "Yandex.cloud",
  },
];
