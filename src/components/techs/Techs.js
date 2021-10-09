import React from "react";

function Techs(props) {
  const { techs } = props;
  return (
    <section ref={techs} className="techs">
      <h2 className="main__title">Технологии</h2>
      <h3 className="techs__title">Мой стек веб-технологий</h3>
      <p className="techs__text">
        Текущий перечень технологий, с которыми я успел поработать
      </p>
      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">SCSS</li>
        <li className="techs__item">JavaScript</li>
        <li className="techs__item">BEM</li>
        <li className="techs__item">Node.js</li>
        <li className="techs__item">React.js</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Webpack</li>
        <li className="techs__item">MongoDB</li>
        <li className="techs__item">Mongoose</li>
        <li className="techs__item">Nginx</li>
        <li className="techs__item">ООП</li>
        <li className="techs__item">Bash</li>
        <li className="techs__item">Fetch</li>
        <li className="techs__item">Eslint</li>
        <li className="techs__item">Figma</li>
      </ul>
    </section>
  );
}

export default Techs;
