import { useState } from "react";
import ButtonsCase from "./components/ButtonsCase";
import Header from "./components/Header";
import Screen from "./components/Screen";
function App() {
  const [getValue, setValue] = new useState(0);
  // setValue(10);
  return (
    <>
      <div className="container">
        <Header />
        <Screen value={getValue} />
        <ButtonsCase />
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
          <a href="https://twitter.com/ssava_ema">Ssaava Emmanuel</a>.
        </div>
      </div>
    </>
  );
}

export default App;
