import PropTypes from "prop-types";
export default function Button({ num, classname = "nums", onClick }) {
  return (
    <button type="button" className={`btn ${classname}`} onClick={onClick}>
      {num}
    </button>
  );
}

Button.propTypes = {
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  classname: PropTypes.string,
  onClick: PropTypes.func,
};
