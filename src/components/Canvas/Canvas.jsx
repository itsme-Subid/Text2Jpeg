import "./Canvas.css";
import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";

function Canvas({ text }) {
  const [gradient, setGradient] = useState({
    left: "rgb(251, 113, 133)",
    middle: "rgb(217, 70, 239)",
    right: "rgb(99, 102, 241)",
    direction: "to right",
    type: "linear-gradient",
  });
  const [selectColor, setSelectColor] = useState("#FFFFFF");
  const printRef = React.useRef();
  const isFirstRun = useRef(true);
  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  let gradientVar = [
    {
      left: "rgb(251, 113, 133)",
      middle: "rgb(217, 70, 239)",
      right: "rgb(99, 102, 241)",
      direction: "to right",
      type: "linear-gradient",
    },
    {
      left: "rgb(172, 50, 228)",
      middle: "rgb(121, 24, 242)",
      right: "rgb(72, 1, 255)",
      direction: "to right",
      type: "linear-gradient",
    },
    {
      left: "rgb(134, 239, 172)",
      middle: "rgb(59, 130, 246)",
      right: "rgb(147, 51, 234)",
      direction: "to right",
      type: "linear-gradient",
    },
    {
      left: "rgb(196, 181, 253)",
      middle: "rgb(196, 181, 253)",
      right: "rgb(167, 139, 250)",
      direction: "to right",
      type: "linear-gradient",
    },
    {
      left: "rgb(255, 241, 235)",
      middle: "rgb(172, 224, 249)",
      right: "rgb(172, 224, 249)",
      direction: "to top",
      type: "linear-gradient",
    },
    {
      left: "rgb(253, 230, 138)",
      middle: "rgb(124, 58, 237)",
      right: "rgb(12, 74, 110)",
      direction: "at center bottom",
      type: "radial-gradient",
    },
    {
      left: "rgb(169, 201, 255)",
      middle: "rgb(211, 193, 243)",
      right: "rgb(255, 187, 236)",
      direction: "to bottom right",
      type: "linear-gradient",
    },
  ];
  useEffect(() => {
    if (isFirstRun.current) {
      localStorage.getItem("gradient") &&
        setGradient(JSON.parse(localStorage.getItem("gradient")));
      isFirstRun.current = false;
      return;
    } else {
      localStorage.setItem("gradient", JSON.stringify(gradient));
    }
  }, [gradient]);
  let handleSelectColor = (e) => {
    let color = e.target.value;
    setSelectColor(color);
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    let rgb = `${r},${g},${b}`;
    setGradient({
      left: `rgb(${rgb})`,
      middle: `rgb(${rgb})`,
      right: `rgb(${rgb})`,
      direction: "to right",
      type: "linear-gradient",
    });
  };
  let handleCard = () => {
    document
      .querySelector(".canvas__container__item__content")
      .classList.toggle("dark");
  };
  let handleGradient = () => {
    let gradients = document.querySelector("#gradients");
    gradients.classList.toggle("active");
  };
  return (
    <div className="canvas">
      <div
        className="canvas__container"
        style={{
          backgroundImage: `${gradient.type}(${gradient.direction}, ${gradient.left}, ${gradient.middle}, ${gradient.right})`,
        }}
        ref={printRef}
      >
        <div className="canvas__container__item">
          <div className="canvas__container__item__content">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          className="gradient"
          type="button"
          onClick={() => handleGradient()}
        >
          <span
            style={{
              backgroundImage: `${gradient.type}(${gradient.direction}, ${gradient.left}, ${gradient.middle}, ${gradient.right})`,
            }}
          ></span>
          Gradient
        </button>
        <div className="gradients" id="gradients">
          <div className="gradients__group">
            {gradientVar.map((item, index) => {
              return (
                <button
                  className="gradient__item"
                  key={index}
                  onClick={() => setGradient(item)}
                  style={{
                    background: `${item.type}(${item.direction}, ${item.left}, ${item.middle}, ${item.right})`,
                  }}
                ></button>
              );
            })}
            <div className="inputColor">
              <input
                role="button"
                type="color"
                name="color"
                id=""
                value={selectColor}
                onChange={(e) => handleSelectColor(e)}
              />
            </div>
          </div>
        </div>
        <button className="card" type="button" onClick={(e) => handleCard(e)}>
          <span></span>
          Card
        </button>
        <button
          className="download"
          type="button"
          onClick={handleDownloadImage}
        >
          <span></span>
          Download
        </button>
      </div>
      <div className="credits">
        Made with <span>❤</span> by{" "}
        <a href="github.com/itsme-subid">SUBID DAS</a>
      </div>
    </div>
  );
}

export default Canvas;
