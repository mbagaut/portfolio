import React from "react";

function AboutMe(props) {
  const { aboutMe } = props;
  const { useState, useEffect } = React;

  let canvas = null;
  const [color, setColor] = useState("#000000");
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [drawing, setDrawing] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [lsIsCleared, setLsIsCleared] = useState(
    !localStorage.getItem("coords") && true
  );
  const btnStyle = {
    position: "absolute",
    left: "5px",
    width: "20px",
    height: "20px",
    border: "1px solid #000",
  };

  function updateCanvas() {
    const rect = canvas.getBoundingClientRect(); // возвращает размер элемента и его позицию относительно viewport
    canvas.width = rect.width;
    canvas.height = rect.height;
    makeAText();
  }

  useEffect(() => {
    window.addEventListener("resize", updateCanvas);
    return function cleanup() {
      window.removeEventListener("resize", updateCanvas);
    };
  });

  useEffect(() => {
    makeAText();
  }, []);

  const makeAText = () => {
    const rect = canvas.getBoundingClientRect(); // возвращает размер элемента и его позицию относительно viewport
    const ctx = canvas.getContext("2d");
    canvas.width = rect.width;
    canvas.height = rect.height;

    const grad = ctx.createLinearGradient(0, 0, 500, 0); // позиции градиента
    grad.addColorStop("0", "magenta");
    grad.addColorStop(".50", "blue");
    grad.addColorStop("1", "red");

    ctx.textAlign = "center"; // выравнивание текста по центру
    ctx.font = "20px Inter";
    ctx.fillStyle = grad; // можно указать просто цвет типа "magenta".
    // Цвет, размер и т.п. должны  быть до fillText
    ctx.fillText("Рисуй усы)", canvas.width / 2, canvas.height / 1.2); // центровка надписи
  };

  function draw(evt) {
    const rect = canvas.getBoundingClientRect();
    const x = evt.nativeEvent.clientX - rect.left;
    const y = evt.nativeEvent.clientY - rect.top;
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = color;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 5;

    if (drawing) {
      const cords = Object.assign([], coordinates);
      cords.push([x, y, color]);
      setCoordinates(cords);

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      const cords = Object.assign([], coordinates);
      cords.push("mouseup");
      setCoordinates(cords);
    }

    setLastX(x);
    setLastY(y);
  }

  function clear(arg) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (arg === "full") {
      setCoordinates([]);
      localStorage.removeItem("coords");
      setLsIsCleared(true);
    }
  }

  function saveCurrentPosition() {
    localStorage.setItem("coords", JSON.stringify(coordinates));
    setLsIsCleared(false);
  }

  function replay() {
    if (lsIsCleared) {
      console.log("нечего рисовать");
      return;
    }
    const ctx = canvas.getContext("2d");
    const timer = setInterval(() => {
      if (!coordinates.length) {
        clearInterval(timer);
        ctx.beginPath();
        return;
      }

      const crd = coordinates.shift();
      const e = {
        clientx: crd["0"],
        clienty: crd["1"],
        color: crd["2"],
      };
      ctx.strokeStyle = e.color;
      ctx.lineTo(e.clientx, e.clienty);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientx, e.clienty);
    }, 2);
  }

  function onKeyDown(evt) {
    if (evt.key === "s") {
      saveCurrentPosition();
      console.log("сохранили");
    } else if (evt.key === "r") {
      console.log("проигрываем...");
      const savedCoords = JSON.parse(localStorage.getItem("coords"));
      setCoordinates(savedCoords);
      clear();
      replay();
    } else if (evt.key === "c") {
      clear("full");
      console.log("local storage пуст");
    }
  }
  return (
    <section ref={aboutMe} className="aboutme">
      <h2 className="main__title">Обо мне</h2>
      <div className="aboutme__profile">
        <div className="aboutme__content">
          <p className="aboutme__name">Марат</p>
          <p className="aboutme__job">Фронтенд-разработчик, 31 год</p>
          <p className="aboutme__text">
            Я родился и живу в Москве, более 12 лет работал Product и Project
            менеджером в разных сферах. Я счастливый муж и отец двух дочек.
            Люблю слушать музыку, играю на музыкальных инструментах, учусь
            писать книги. Недавно начал кодить. Прошёл курс по
            веб&#8209;разработке от Яндекс.Практикума. Стараюсь развиваться в
            новой для себя сфере деятельности.
          </p>
          <ul className="aboutme__links">
            <li>
              <a
                href="https://twitter.com/agaffirs"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme__link"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mbagaut"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme__link"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="aboutme__image">
          <button
            onClick={() =>
              alert(
                `Нарисуй усы)\ns - сохранить в Local Storage,\nr - воспроизвести,\nc - очистить и удалить из Local Storage`
              )
            }
            style={{
              ...btnStyle,
              top: "05px",
              background: "#000000",
              color: "yellow",
            }}
          >
            i
          </button>
          <button
            onClick={() => setColor("#fff")}
            style={{
              ...btnStyle,
              top: "30px",
              background: "#fff",
              borderWidth: color === "#fff" ? "2px" : "1px",
            }}
          ></button>
          <button
            onClick={() => setColor("blue")}
            style={{
              ...btnStyle,
              top: "55px",
              background: "blue",
              borderWidth: color === "blue" ? "2px" : "1px",
            }}
          ></button>
          <button
            onClick={() => setColor("red")}
            style={{
              ...btnStyle,
              top: "80px",
              background: "red",
              borderWidth: color === "red" ? "2px" : "1px",
            }}
          ></button>
          <canvas
            tabIndex="-1"
            width="270"
            height="327"
            ref={(el) => (canvas = el)}
            onMouseMove={draw}
            onMouseDown={() => setDrawing(true)}
            onMouseUp={() => setDrawing(false)}
            onKeyDown={onKeyDown}
          ></canvas>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
