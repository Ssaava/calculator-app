import PropTypes from "prop-types";
export default function BigButton({ num, specialKey = "reset-key", onClick }) {
  return (
    <button className={`big-btn ${specialKey}`} onClick={onClick}>
      {num}
    </button>
  );
}
BigButton.propTypes = {
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  specialKey: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
