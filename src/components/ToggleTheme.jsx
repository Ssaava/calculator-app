const ToggleTheme = () => {
  return (
    <>
      <div className="toggle-buttons">
        <input
          type="radio"
          name="mode"
          id="dark-mode"
          className="switch-input"
          checked
        />
        <label
          htmlFor="dark-mode"
          className="switch-label switch-label-1"
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
        ></label>
        <div className="switch-selection"></div>
      </div>
    </>
  );
};

export default ToggleTheme;
