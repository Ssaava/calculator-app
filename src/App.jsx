import { useState, useEffect } from "react";
import ButtonsCase from "./components/buttons/ButtonsCase";
import Header from "./components/Header";
import Screen from "./components/Screen";
import {
  Multiply,
  Equals,
  Divide,
  Subtract,
  Add,
} from "./operations/Operations";
import {
  handleDecimal,
  Symbol,
  Operations,
} from "./components/functions/Functions";

// main project starts here
function App() {
  const [currentValue, setCurrentValue] = new useState([0]);

  const [userMode, setUserMode] = new useState("");
  // const Operations = {
  //   ADD: "+",
  //   SUBTRACT: "-",
  //   DIVIDE: "/",
  //   MULTIPLY: "*",
  //   EQUALS: "equals",
  //   DECIMAL: ".",
  //   RESET: "RESET",
  //   DELETE: "DEL",
  // };
  // using useEffect hook to get the theme mode from local storage
  useEffect(() => {
    const themeMode = localStorage.getItem("mode") || "";
    setUserMode(themeMode);
  });
  function toggleMode(mode) {
    setUserMode(mode);
    localStorage.setItem("mode", mode);
  }

  // function to set values
  function setValue(value) {
    // check if current value is 0. if true, set either + or - else return
    if (currentValue == "0") {
      if (value == Operations.ADD || value == Operations.SUBTRACT) {
        setCurrentValue(value);
        return;
      } else {
        return;
      }
    }
    // what does the function below do? probably it prevents putting more than one decimal on a single number
    // if (currentValue[currentValue.length - 1] == value) {
    //   setCurrentValue(currentValue);
    //   return;
    // }

    // check if current value includes a point
    if (currentValue.includes(Operations.DECIMAL)) {
      const symbol = Symbol(currentValue);
      let [int1, int2] = currentValue.split(symbol);
      if (
        int1.includes(Operations.DECIMAL) &&
        !int2.includes(Operations.DECIMAL)
      ) {
        setCurrentValue(currentValue + value);
        return;
      }
      if (
        int2.includes(Operations.DECIMAL) &&
        !int1.includes(Operations.DECIMAL)
      )
        return;
      if (
        int1.includes(Operations.DECIMAL) &&
        int2.includes(Operations.DECIMAL)
      )
        return;
      return;
    } // we need now to know on which value the decimal is

    // concatnate the strings to be displayed on the screen
    setCurrentValue(currentValue + value);
  }
  // function to handle click of buttons
  function handleClick(value) {
    value = value.toString();
    const testOperators = /[+-/*]/;

    switch (value) {
      // reset button works perfectly
      case Operations.RESET:
        setCurrentValue("0");
        break;
      // delete button works perfectly
      case Operations.DELETE:
        currentValue.length > 1
          ? setCurrentValue(currentValue.slice(0, currentValue.length - 1))
          : setCurrentValue("0");
        break;

      // equal button works fine but not with the decimal point
      case Operations.EQUALS:
        if (currentValue) {
          const symbol = Symbol(currentValue) || "";
          console.log(symbol);
          const answer = Equals(symbol[0], currentValue);
          setCurrentValue(answer);
        }
        break;

      // decimal point button not yet working
      case Operations.DECIMAL:
        setValue(".");
        break;

      // addition operator
      case Operations.ADD:
        // set the operation to a + incase there are other Operations
        if (/[-/*]/.test(currentValue[currentValue.length - 1])) {
          setCurrentValue(
            currentValue.slice(0, currentValue.length - 1) + Operations.ADD
          );
          break;
        }

        // add Symbol when decimal point is present in current value
        // if (currentValue.includes(".") && !currentValue.includes("+")) {
        //   setCurrentValue(currentValue + "+");
        //   break;
        // }
        handleDecimal(currentValue, Operations.ADD, setCurrentValue);

        if (
          testOperators.test(currentValue) &&
          currentValue[currentValue.length - 1] != Operations.ADD
        ) {
          const symbol = Symbol(currentValue);

          setCurrentValue(Add(symbol[0], currentValue));
          break;
        }
        setValue(Operations.ADD);
        break;

      // working on the Multiply button when pressed
      case Operations.MULTIPLY:
        if (/[-/+]/.test(currentValue[currentValue.length - 1])) {
          if (
            currentValue === Operations.ADD ||
            currentValue === Operations.SUBTRACT
          ) {
            break;
          }
          setCurrentValue(
            currentValue.slice(0, currentValue.length - 1) + Operations.MULTIPLY
          );
          break;
        }

        // add Symbol when decimal point is present in current value
        handleDecimal(currentValue, Operations.MULTIPLY, setCurrentValue);

        if (
          testOperators.test(currentValue) &&
          currentValue[currentValue.length - 1] != Operations.MULTIPLY
        ) {
          const symbol = Symbol(currentValue);
          setCurrentValue(Multiply(symbol[0], currentValue));
          break;
        }
        setValue(Operations.MULTIPLY);
        break;

      case Operations.SUBTRACT:
        if (/[+/*]/.test(currentValue[currentValue.length - 1])) {
          setCurrentValue(
            currentValue.slice(0, currentValue.length - 1) + Operations.SUBTRACT
          );
          break;
        }

        // add Symbol when decimal point is present in current value
        handleDecimal(currentValue, Operations.SUBTRACT, setCurrentValue);
        if (
          testOperators.test(currentValue) &&
          currentValue[currentValue.length - 1] != Operations.SUBTRACT
        ) {
          const symbol = Symbol(currentValue);
          setCurrentValue(Subtract(symbol[0], currentValue));
          break;
        }
        setValue(Operations.SUBTRACT);
        break;

      // Divide button actions
      case Operations.DIVIDE:
        if (/[-*+]/.test(currentValue[currentValue.length - 1])) {
          if (
            currentValue === Operations.ADD ||
            currentValue === Operations.SUBTRACT
          ) {
            break;
          }
          setCurrentValue(
            currentValue.slice(0, currentValue.length - 1) + Operations.DIVIDE
          );
          break;
        }

        // add Symbol when decimal point is present in current value
        handleDecimal(currentValue, Operations.DIVIDE, setCurrentValue);

        if (
          testOperators.test(currentValue) &&
          currentValue[currentValue.length - 1] != Operations.DIVIDE
        ) {
          const symbol = Symbol(currentValue);
          setCurrentValue(Divide(symbol[0], currentValue));
          break;
        }
        setValue(Operations.DIVIDE);
        break;

      // the default Operations to be carried out
      default:
        if (
          currentValue == 0 ||
          currentValue == "ERROR" ||
          currentValue == "NaN"
        ) {
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
