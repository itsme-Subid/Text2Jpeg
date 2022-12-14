import "./Header.css";
import React from "react";

function Header({ text, setText }) {
  let changeMode = () => {
    let body = document.body;
    body.classList.toggle("light");
    localStorage.setItem("mode", body.classList.contains("light") ? "light" : "dark");
  };
  let spanStyle =
    text !== "" ? { transform: "translateY(0)", scale: "1", opacity: "1" } : {};
  return (
    <header>
      <div className="wrapper">
        <div className="heading">
          <h1>Text2Jpeg</h1>
          <div
            className="modeToggler"
            onClick={() => {
              changeMode();
            }}
          >
            <div className="svg"></div>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="text">
            <label>
              <textarea
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              ></textarea>
              <span style={spanStyle}>Text</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
