import PropTypes from "prop-types";
const ToggleTheme = ({ toggleMode }) => {
  return (
    <>
      <div className="toggle-buttons">
        <input
          type="radio"
          name="mode"
          id="dark-mode"
          className="switch-input"
          defaultChecked
        />
        <label
          htmlFor="dark-mode"
          className="switch-label switch-label-1"
          onClick={() => toggleMode("")}
        ></label>

        <input
          type="radio"
          name="mode"
          id="light-mode"
          className="switch-input"
        />
        <label
          htmlFor="light-mode"
          className="switch-label switch-label-2"
          onClick={() => toggleMode("light-mode")}
        ></label>
        <input
          type="radio"
          name="mode"
          id="user-mode"
          className="switch-input"
        />
        <label
          htmlFor="user-mode"
          className="switch-label switch-label-3"
          onClick={() => toggleMode("user-mode")}
        ></label>

        <div className="switch-selection"></div>
      </div>
    </>
  );
};

export default ToggleTheme;

ToggleTheme.propTypes = {
  toggleMode: PropTypes.func,
};
