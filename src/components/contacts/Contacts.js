import React from "react";

function Contacts() {
  return (
    <section className="contacts">
      <h1 className="contacts__title">Контакты</h1>
      <div className="contacts__grid">
        <span className="contacts__cell contacts__cell_color_green">Имя</span>
        <span className="contacts__cell contacts__cell_color_grey">
          Багаутдинов Марат Рушанович
        </span>
        <span className="contacts__cell">Email</span>
        <span className="contacts__cell">
          {" "}
          <a className="contacts__link" href="mailto:mbagaut@gmail.com">
            mbagaut@gmail.com
          </a>
        </span>
        <span className="contacts__cell">Mobile</span>
        <span className="contacts__cell">
          {" "}
          <a className="contacts__link" href="tel:+79959026878">
            +7 (995) 902-68-78
          </a>
        </span>
        <span className="contacts__cell">Адрес</span>
        <span className="contacts__cell">Российская Федерация, г. Москва</span>
      </div>
    </section>
  );
}

export default Contacts;
