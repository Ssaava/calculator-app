import { computeResult } from "../components/functions/Functions";

// function to work on the decimal points
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'."
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}

// Addition Functionality
const Add = (operator, currentValue) => {
  const answer = computeResult(currentValue, operator);
  return decimalAdjust("round", answer, -9).toString() + "+";
};

//Subtract Functionality
const Subtract = (operator, currentValue) => {
  const answer = computeResult(currentValue, operator);
  return decimalAdjust("round", answer, -9).toString() + "-";
};

// Multiply function goes here
const Multiply = (operator, currentValue) => {
  const answer = computeResult(currentValue, operator);
  return decimalAdjust("round", answer, -9).toString() + "*";
};
// Divide Functionality
const Divide = (operator, currentValue) => {
  const answer = computeResult(currentValue, operator);
  return decimalAdjust("round", answer, -9).toString() + "/";
};

//Equals Functionality
const Equals = (operator, currentValue) => {
  const answer = computeResult(currentValue, operator);
  return decimalAdjust("round", answer, -9).toString();
};

// export default Symbol;
export { Multiply, Equals, Divide, Subtract, Add };
