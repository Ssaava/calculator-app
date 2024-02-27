import { Operations } from "../components/functions/Functions";

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
  let result = 0;
  let [int1, int2] = currentValue.split(operator);
  int1 = Number(int1);
  int2 = Number(int2);
  let answer = 0;
  if (currentValue.includes(operator)) answer = int1 + int2;

  if (currentValue.includes(Operations.MULTIPLY)) answer = int1 * int2;

  if (currentValue.includes(Operations.DIVIDE)) {
    if (int2 === 0) return "ERROR";
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.SUBTRACT)) answer = int1 - int2;

  result = decimalAdjust("round", answer, -9).toString() + "+";
  return result;
};

//Subtract Functionality
const Subtract = (operator, currentValue) => {
  let result = 0;
  let [int1, int2] = currentValue.split(operator);
  int1 = Number(int1);
  int2 = Number(int2);
  let answer = 0;
  if (currentValue.includes(operator)) answer = int1 - int2;

  if (currentValue.includes(Operations.MULTIPLY)) answer = int1 * int2;

  if (currentValue.includes(Operations.DIVIDE)) {
    if (int2 === 0) return "ERROR";
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.ADD)) answer = int1 + int2;

  result = decimalAdjust("round", answer, -9).toString() + "+";
  return result;
};

// Multiply function goes here
const Multiply = (operator, currentValue) => {
  let result = 0;
  let [int1, int2] = currentValue.split(operator);
  int1 = Number(int1);
  int2 = Number(int2);
  let answer = 0;
  if (currentValue.includes(operator)) answer = int1 * int2;

  if (currentValue.includes(Operations.ADD)) answer = int1 + int2;

  if (currentValue.includes(Operations.DIVIDE)) {
    if (int2 === 0) return "ERROR";
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.SUBTRACT)) answer = int1 - int2;

  result = decimalAdjust("round", answer, -9).toString() + "*";
  return result;
};
// Divide Functionality
const Divide = (operator, currentValue) => {
  let result = 0;
  let [int1, int2 = ""] = currentValue.split(operator);
  int1 = Number(int1);
  int2 = Number(int2);
  let answer = 0;

  if (currentValue.includes(operator)) {
    if (int2 === 0) return "ERROR";
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.ADD)) answer = int1 + int2;

  if (currentValue.includes(Operations.MULTIPLY)) answer = int1 * int2;

  if (currentValue.includes(Operations.SUBTRACT)) answer = int1 - int2;

  result = decimalAdjust("round", answer, -9).toString() + "/";
  return result;
};

//Equals Functionality
const Equals = (operator, currentValue) => {
  let result = 0;
  let [int1, int2] = currentValue.split(operator);
  int1 = Number(int1);
  int2 = Number(int2);
  let answer = 0;
  if (currentValue[currentValue.length - 1] === "." && operator == undefined)
    return currentValue + "0";

  if (currentValue.includes(Operations.MULTIPLY)) answer = int1 * int2;

  if (currentValue.includes(Operations.ADD)) answer = int1 + int2;

  if (currentValue.includes(Operations.DIVIDE)) {
    if (int2 === 0) return "ERROR";
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.SUBTRACT)) answer = int1 - int2;

  result = decimalAdjust("round", answer, -9).toString();
  return result;
};

// export default Symbol;
export { Multiply, Equals, Divide, Subtract, Add };
