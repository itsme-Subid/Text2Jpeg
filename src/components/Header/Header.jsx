import "./Header.css";
import React from "react";

function Header({ text, setText }) {
  let changeMode = () => {
    let body = document.body;
    body.classList.toggle("light");
  };
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
              <span>Text</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
