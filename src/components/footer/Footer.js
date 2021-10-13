import React from "react";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__title">Всего вам самого доброго.</p>
      <ul className="footer__list">
        <li className="footer__item">
          <p className="footer__author">
            {`© ${new Date().getFullYear()}`}. Багаутдинов Марат
          </p>
        </li>
        <li className="footer__item">
          <a
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://github.com/mbagaut"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://twitter.com/agaffirs"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Twitter
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
