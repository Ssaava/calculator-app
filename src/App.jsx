import { useState, useEffect } from "react";
import ButtonsCase from "./components/ButtonsCase";
import Header from "./components/Header";
import Screen from "./components/Screen";
function App() {
  const [getValue, setValue] = new useState([0]);
  const [userMode, setUserMode] = new useState("");

  useEffect(() => {
    const themeMode = localStorage.getItem("mode") || "";
    setUserMode(themeMode);
  });
  function toggleMode(mode) {
    setUserMode(mode);
    localStorage.setItem("mode", mode);
  }
  function handleClick(value) {
    setValue(value);
  }
  return (
    <>
      <main className={`main ${userMode}`}>
        <div className="container">
          <Header toggleMode={toggleMode} />
          <Screen value={getValue} />
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
