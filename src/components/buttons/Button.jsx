import PropTypes from "prop-types";
export default function Button({ num }) {
  return <div className="btn">{num}</div>;
}

Button.propTypes = {
  num: PropTypes.number.isRequired,
};
