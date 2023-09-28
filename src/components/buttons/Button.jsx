import PropTypes from "prop-types";
export default function Button({ num, classname = "nums" }) {
  return <button className={`btn ${classname}`}>{num}</button>;
}

Button.propTypes = {
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  classname: PropTypes.string.isRequired,
};
