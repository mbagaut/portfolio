import React from "react";

function AboutMe(props) {
  const { aboutMe } = props;
  const { useState, useEffect, useRef } = React;

  const [color, setColor] = useState("#000000");
  const [message, setMessage] = useState("");
  const [drawingIsFinished, setDrawingIsFinished] = useState(true);
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

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect(); // возвращает размер элемента и его позицию относительно viewport

    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;

    const grad = ctx.createLinearGradient(0, 0, 500, 0); // позиции градиента
    grad.addColorStop("0", "magenta");
    grad.addColorStop(".50", "blue");
    grad.addColorStop("1", "red");

    ctx.textAlign = "center";
    ctx.font = "20px Inter";
    ctx.fillStyle = grad;
    // Цвет, размер и т.п. должны  быть до fillText
    ctx.fillText("Рисуй усы)", canvas.width / 2, canvas.height / 1.2); // центровка надписи

    contextRef.current = ctx;
  }, []);

  function updateCanvas() {
    const rect = canvasRef.current.getBoundingClientRect();
    const canvas = canvasRef.current;
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  useEffect(() => {
    window.addEventListener("resize", updateCanvas);
    return function cleanup() {
      window.removeEventListener("resize", updateCanvas);
    };
  });

  const startDrawing = () => {
    setMessage("");
    contextRef.current.beginPath();
    setIsDrawing(true);
  };

  const endDrawing = () => {
    if (isDrawing) {
      const cords = Object.assign([], coordinates);
      cords.push("x");
      setCoordinates(cords);

      contextRef.current.beginPath();
      contextRef.current.stroke();
      contextRef.current.closePath();

      setIsDrawing(false);
    }
  };

  const draw = (evt) => {
    const { nativeEvent } = evt;
    if (isDrawing) {
      const rect = canvasRef.current.getBoundingClientRect();
      contextRef.current.strokeStyle = color;
      let x;
      let y;

      if (evt._reactName === "onMouseMove") {
        const { offsetX, offsetY } = nativeEvent;
        x = offsetX;
        y = offsetY;
      } else if (evt._reactName === "onTouchMove") {
        const { clientX, clientY } = nativeEvent.targetTouches[0];
        x = clientX - rect.left;
        y = clientY - rect.top;
      }

      const cords = Object.assign([], coordinates);
      cords.push([x, y, color]);
      setCoordinates(cords);
      contextRef.current.lineTo(x, y);
      contextRef.current.stroke();
    }
  };

  function clear(arg) {
    const canvas = canvasRef.current;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    if (arg === "full") {
      setCoordinates([]);
      localStorage.removeItem("coords");
      setLsIsCleared(true);
    }
  }

  function saveCurrentPosition() {
    if (coordinates.length > 1) {
      localStorage.setItem("coords", JSON.stringify(coordinates));
      setLsIsCleared(false);
      setMessage("сохранили");
      console.log("сохранили");
      return;
    }
    setMessage("нечего сохранять");
    console.log("нечего сохранять");
  }

  const messages = [
    "Два вы художник!",
    "Красота!",
    "Долго ли, умеючи",
    "ШАДАВР!",
    "А мне идёт..)",
    "Господа гусары, все в кабак!",
    "Вы можете лучше)",
    "Рисование не ваш конёк",
    "Усы, а не.. что это вообще?",
    "Сойдёт, так в Европе модно... говорят",
    "Вам ещё не надоело? )",
  ];

  function getRandomNum() {
    return Math.floor(Math.random() * 10);
  }

  function replay() {
    setDrawingIsFinished(false);

    if (lsIsCleared) {
      setMessage("нечего рисовать");
      console.log("нечего рисовать");
      setDrawingIsFinished(true);
      return;
    }

    const ctx = contextRef.current;

    const timer = setInterval(() => {
      if (!coordinates.length || coordinates.length === "nule") {
        clearInterval(timer);
        ctx.beginPath();
        setDrawingIsFinished(true);

        setMessage(messages[getRandomNum()]);
        console.log(messages[getRandomNum()]);
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
    if (evt.key === "s" || evt.key === "ы") {
      saveCurrentPosition();
    } else if ((evt.key === "r" || evt.key === "к") && drawingIsFinished) {
      setMessage("пробуем...");
      console.log("пробуем...");
      const savedCoords = JSON.parse(localStorage.getItem("coords"));
      setCoordinates(savedCoords);
      clear();
      replay();
    } else if (evt.key === "c" || evt.key === "с") {
      clear("full");
      setMessage("local storage очищен");
      console.log("local storage очищен");
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
            onClick={() => setColor("#ffffff")}
            style={{
              ...btnStyle,
              top: "30px",
              background: "#ffffff",
              borderWidth: color === "#ffffff" ? "2px" : "1px",
            }}
          ></button>
          <button
            onClick={() => setColor("#0400ff")}
            style={{
              ...btnStyle,
              top: "55px",
              background: "#0400ff",
              borderWidth: color === "#0400ff" ? "2px" : "1px",
            }}
          ></button>
          <button
            onClick={() => setColor("#ff0000")}
            style={{
              ...btnStyle,
              top: "80px",
              background: "#ff0000",
              borderWidth: color === "#ff0000" ? "2px" : "1px",
            }}
          ></button>
          <input
            type="color"
            onInput={(e) => setColor(e.target.value)}
            value={color}
            style={{
              position: "absolute",
              left: "220px",
              width: "40px",
              height: "40px",
              top: "10px",
              padding: 0,
            }}
          />
          <span
            style={{
              position: "absolute",
              textAlign: "center",
              left: "15%",
              width: "180px",
              height: "20px",
              top: "90%",
              padding: 0,
              font: "12px sans-serif",
            }}
          >
            {message}
          </span>
          <canvas
            style={{ touchAction: "none" }}
            tabIndex="-1"
            width="270"
            height="327"
            ref={canvasRef}
            onMouseMove={draw}
            onTouchMove={draw}
            onMouseDown={startDrawing}
            onTouchStart={startDrawing}
            onMouseUp={endDrawing}
            onMouseOut={endDrawing}
            onTouchEnd={endDrawing}
            onKeyDown={onKeyDown}
          ></canvas>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
