import ToggleTheme from "./ToggleTheme";
import PropTypes from "prop-types";
const Header = ({ toggleMode }) => {
  return (
    <>
      <header>
        <div className="name">cal</div>
        <div className="toggle-mode">
          <div className="theme">theme</div>
          <ToggleTheme toggleMode={toggleMode} />
        </div>
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  toggleMode: PropTypes.func,
};
