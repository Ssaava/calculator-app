import { useState, useEffect } from "react";
import ButtonsCase from "./components/ButtonsCase";
import Header from "./components/Header";
import Screen from "./components/Screen";
function App() {
  const [currentValue, setCurrentValue] = new useState([0]);
  const [userMode, setUserMode] = new useState("");
  const operations = {
    ADD: "+",
    SUBTRACT: "-",
    DIVIDE: "÷",
    MULTIPLY: "*",
    EQUALS: "equals",
    RESET: "0",
    DELETE: "DEL",
  };
  // using useEffect hook to get the theme mode from local storage
  useEffect(() => {
    const themeMode = localStorage.getItem("mode") || "";
    setUserMode(themeMode);
  });
  function toggleMode(mode) {
    setUserMode(mode);
    localStorage.setItem("mode", mode);
  }
  function handleClick(value) {
    value = value.toString();
    if (currentValue == 0 || currentValue == "ERROR") {
      setCurrentValue(value);
    } else {
      if (currentValue != 0) {
        setCurrentValue(currentValue + value);
      }
    }

    switch (value) {
      // reset button works perfectly
      case "RESET":
        setCurrentValue(operations.RESET);
        break;
      // delete button works perfectly
      case operations.DELETE:
        currentValue.length > 1
          ? setCurrentValue(currentValue.slice(0, currentValue.length - 1))
          : setCurrentValue("0");
        break;
      case operations.EQUALS:
        // check if current value is not zero. if zero display nothing
        if (
          currentValue[currentValue.length - 1] != operations.ADD &&
          currentValue[currentValue.length - 1] != operations.MULTIPLY &&
          currentValue[currentValue.length - 1] != operations.SUBTRACT &&
          currentValue[currentValue.length - 1] != operations.DIVIDE
        ) {
          setCurrentValue(eval(currentValue));
        } else {
          setCurrentValue("ERROR");
        }
    }
  }
  return (
    <>
      <main className={`main ${userMode}`}>
        <div className="container">
          <Header toggleMode={toggleMode} />
          <Screen value={currentValue} />
          <ButtonsCase handleClick={handleClick} />
          <div className="author">
            Challenge by_
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by <br />
            <a
              href="https://twitter.com/ssava_ema"
              target="_blank"
              rel="noreferrer"
            >
              Ssaava Emmanuel
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
