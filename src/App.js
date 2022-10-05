import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header/Header";
import Canvas from "./components/Canvas/Canvas";

function App() {
  const [text, setText] = useState("Text2Jpeg");
  const isFirstRun = useRef(true);
  useEffect(() => {
    console.clear();
    console.log(
      "%cStop!",
      "font-family: sans-serif; font-weight: 700; color: red; font-size: 5rem; text-align: center; text-transform: uppercase; width: 100%;"
    );
    console.log(
      `%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a Calculator.js feature or "hack" this server, it is a scam and will give them access to your device.`,
      `font-size: 1.2rem; font-family: sans-serif; color: #fff`
    );
    console.log(
      "%citsme-subid",
      "font-family: sans-serif; font-weight: 700; color: #1f6feb; padding-block: 2rem; font-size: 2.5rem; text-align: center; text-transform: uppercase; width: 100%;"
    );
  }, []);
  useEffect(() => {
    if (isFirstRun.current) {
      localStorage.getItem("text") && setText(localStorage.getItem("text"));
      localStorage.getItem("mode") === "light" &&
        document.body.classList.add("light");
      isFirstRun.current = false;
      return;
    } else {
      localStorage.setItem("text", text);
    }
  }, [text]);
  return (
    <div className="container">
      <Header text={text} setText={setText} />
      <Canvas text={text} />
    </div>
  );
}

export default App;
