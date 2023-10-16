import { useState, useEffect } from "react";
import ButtonsCase from "./components/ButtonsCase";
import Header from "./components/Header";
import Screen from "./components/Screen";
import { Add } from "./operations";
function App() {
  const [currentValue, setCurrentValue] = new useState([0]);
  const [userMode, setUserMode] = new useState("");
  const operations = {
    ADD: "+",
    SUBTRACT: "-",
    DIVIDE: "÷",
    MULTIPLY: "*",
    EQUALS: "equals",
    POINT: ".",
    RESET: "RESET",
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

  function setValue(value) {
    // check if current value is 0. if true, set either + or -
    if (currentValue == "0") {
      if (value == "+" || value == "-") {
        setCurrentValue(value);
        return;
      } else {
        return;
      }
    }
    if (currentValue[currentValue.length - 1] == value) {
      setCurrentValue(currentValue);
      return;
    }
    setCurrentValue(currentValue + value);
  }
  // function to handle click of buttons
  function handleClick(value) {
    value = value.toString();
    const testOperators = /[+-/*]/;

    switch (value) {
      // reset button works perfectly
      case operations.RESET:
        setCurrentValue("0");
        break;
      // delete button works perfectly
      case operations.DELETE:
        currentValue.length > 1
          ? setCurrentValue(currentValue.slice(0, currentValue.length - 1))
          : setCurrentValue("0");
        break;
      case operations.EQUALS:
        setCurrentValue(eval(currentValue));
        break;
      case operations.ADD:
        if (
          testOperators.test(currentValue) &&
          currentValue[currentValue.length - 1] != operations.ADD
        ) {
          const symbol =
            currentValue.match(/\+/) ||
            currentValue.match(/-/) ||
            currentValue.match(/\*/) ||
            currentValue.match(/÷/);
          console.log(symbol);
          setCurrentValue(Add(symbol[0], currentValue));
          break;
        }
        setValue("+");
        break;

      case operations.POINT:
        setValue(".");
        break;
      case operations.MULTIPLY:
        setValue("*");
        break;
      case operations.SUBTRACT:
        setValue("-");
        break;
      case operations.DIVIDE:
        setValue("÷");
        break;
      default:
        if (currentValue == 0 || currentValue == "ERROR") {
          setCurrentValue(value);
        } else {
          if (currentValue != 0) {
            setCurrentValue(currentValue + value);
          }
        }
        break;
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
              href="https://github.com/Ssaava/calculator-app/tree/main"
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
