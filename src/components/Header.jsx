import ToggleTheme from "./ToggleTheme";
const Header = () => {
  return (
    <>
      <header>
        <div className="name">cal</div>
        <div className="toggle-mode">
          <div className="theme">theme</div>
          <ToggleTheme />
        </div>
      </header>
    </>
  );
};

export default Header;
