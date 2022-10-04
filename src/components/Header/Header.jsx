import "./Header.css";
import React from "react";

function Header({ text, setText }) {
  let changeMode = () => {
    let body = document.body;
    body.classList.toggle("light");
  };
  return (
    <header>
      <div>
        <h1>Text2Jpeg</h1>
        <div className="text">
          <label>
            <textarea className=""></textarea>
            <span className="">Text</span>
          </label>
        </div>
        <div
          className="modeToggler"
          onClick={() => {
            changeMode();
          }}
        >
          <div className="svg"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
