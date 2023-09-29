import PropTypes from "prop-types";
function Screen({ value }) {
  return (
    <>
      <div className="screen">
        <input type="text" value={value} />
      </div>
    </>
  );
}
Screen.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Screen;
