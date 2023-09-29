import { useState } from "react";
import ButtonsCase from "./components/ButtonsCase";
import Header from "./components/Header";
import Screen from "./components/Screen";
function App() {
  const [getValue, setValue] = new useState([0]);

  function handleClick(value) {
    setValue(value);
  }
  return (
    <>
      <div className="container">
        <Header />
        <Screen value={getValue} />
        <ButtonsCase handleClick={handleClick} />
        <div className="author">
          Challenge by
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
          .
        </div>
      </div>
    </>
  );
}

export default App;
