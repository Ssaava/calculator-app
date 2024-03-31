import PropTypes from "prop-types";
function Screen({ value, handleClick }) {
  return (
    <>
      <div className="screen">
        <input
          type="text"
          value={value}
          onChange={() => {
            window.addEventListener("keyup", (e) => {
              e.preventDefault();
              // return e.key;
              handleClick(e.key);
            });
          }}
        />
      </div>
    </>
  );
}
Screen.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleClick: PropTypes.func,
};

export default Screen;
