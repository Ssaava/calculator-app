import ButtonsCase from "./components/ButtonsCase";
import Header from "./components/header";
import Screen from "./components/Screen";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Screen />
        <ButtonsCase />
        <div>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://twitter.com/ssava_ema">Ssaava Emmanuel</a>
          .
        </div>
      </div>
    </>
  );
}

export default App;
