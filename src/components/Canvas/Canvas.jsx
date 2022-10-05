import "./Canvas.css";
import React from "react";
import html2canvas from "html2canvas";

function Canvas({ text }) {
  const printRef = React.useRef();
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
  return (
    <div className="canvas">
      <div
        className="canvas__container"
        ref={printRef}
        style={{
          backgroundImage:
            "linear-gradient(to right,rgb(251, 113, 133),rgb(217, 70, 239),rgb(99, 102, 241))",
          // background: "rgb(251, 113, 133)",
          width: "min(100vw, 500px)",
          height: "min(100vh, 500px)",
        }}
      >
        <div
          className="canvas__container__item"
        >
          <div className="canvas__container__item__content">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          className="download"
          type="button"
          onClick={handleDownloadImage}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Canvas;
