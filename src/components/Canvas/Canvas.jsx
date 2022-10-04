import "./Canvas.css";
import React from "react";

function Canvas({ text }) {
  return (
    <div className="canvas">
      <div className="canvas__container">
        <div className="canvas__container__item">
          <div className="canvas__container__item__content">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
