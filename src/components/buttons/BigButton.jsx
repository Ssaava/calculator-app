import PropTypes from "prop-types";
export default function BigButton({ num, specialKey = "reset-key" }) {
  return <button className={`big-btn ${specialKey}`}>{num}</button>;
}
BigButton.propTypes = {
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  specialKey: PropTypes.string.isRequired,
};
