const Operations = {
  ADD: "+",
  SUBTRACT: "-",
  DIVIDE: "/",
  MULTIPLY: "*",
};
function Symbol(currentValue) {
  const symbol =
    currentValue.match(/\+/) ||
    currentValue.match(/-/) ||
    currentValue.match(/\*/) ||
    currentValue.match(/\//);
  return symbol;
}
// Addition Functionality
const Add = (operator, currentValue) => {
  let result = 0;
  const values = currentValue.split(operator);
  const int1 = parseInt(values[0]);
  const int2 = parseInt(values[1]);
  let answer = 0;
  if (currentValue.includes(operator)) {
    answer = int1 + int2;
  }
  if (currentValue.includes(Operations.MULTIPLY)) {
    answer = int1 * int2;
  }
  if (currentValue.includes(Operations.DIVIDE)) {
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.SUBTRACT)) {
    answer = int1 - int2;
  }

  result = answer.toString() + "+";
  return result;
};

//Subtract Functionality
const Subtract = (operator, currentValue) => {
  let result = 0;
  const values = currentValue.split(operator);
  const int1 = parseInt(values[0]);
  const int2 = parseInt(values[1]);
  let answer = 0;
  if (currentValue.includes(operator)) {
    answer = int1 - int2;
  }
  if (currentValue.includes(Operations.MULTIPLY)) {
    answer = int1 * int2;
  }
  if (currentValue.includes(Operations.DIVIDE)) {
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.ADD)) {
    answer = int1 + int2;
  }

  result = answer.toString() + "+";
  return result;
};

// Multiply function goes here
const Multiply = (operator, currentValue) => {
  let result = 0;
  const values = currentValue.split(operator);
  const int1 = parseInt(values[0]);
  const int2 = parseInt(values[1]);
  let answer = 0;
  if (currentValue.includes(operator)) {
    answer = int1 * int2;
  }
  if (currentValue.includes(Operations.ADD)) {
    answer = int1 + int2;
  }
  if (currentValue.includes(Operations.DIVIDE)) {
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.SUBTRACT)) {
    answer = int1 - int2;
  }

  result = answer.toString() + "*";
  return result;
};
// Divide Functionality
const Divide = (operator, currentValue) => {
  let result = 0;
  const values = currentValue.split(operator);
  const int1 = parseInt(values[0]);
  const int2 = parseInt(values[1]);
  let answer = 0;
  if (currentValue.includes(operator)) {
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.ADD)) {
    answer = int1 + int2;
  }
  if (currentValue.includes(Operations.MULTIPLY)) {
    answer = int1 * int2;
  }
  if (currentValue.includes(Operations.SUBTRACT)) {
    answer = int1 - int2;
  }

  result = answer.toString() + "/";
  return result;
};

//Equals Functionality
const Equals = (operator, currentValue) => {
  let result = 0;
  const values = currentValue.split(operator);
  const int1 = parseInt(values[0]);
  const int2 = parseInt(values[1]);
  let answer = 0;
  if (currentValue.includes(Operations.MULTIPLY)) {
    answer = int1 * int2;
  }
  if (currentValue.includes(Operations.ADD)) {
    answer = int1 + int2;
  }
  if (currentValue.includes(Operations.DIVIDE)) {
    answer = int1 / int2;
  }
  if (currentValue.includes(Operations.SUBTRACT)) {
    answer = int1 - int2;
  }

  result = answer.toString();
  return result;
};

export default Symbol;
export { Operations, Multiply, Equals, Divide, Subtract, Add };
