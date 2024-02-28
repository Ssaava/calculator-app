function handleDecimal(currentValue, operator, setCurrentValue) {
  // add Symbol when decimal point is present in current value
  if (currentValue.includes(".") && !currentValue.includes("+")) {
    setCurrentValue(currentValue + operator);
    return;
  }
}

const Operations = {
  ADD: "+",
  SUBTRACT: "-",
  DIVIDE: "/",
  MULTIPLY: "*",
  EQUALS: "equals",
  DECIMAL: ".",
  RESET: "RESET",
  DELETE: "DEL",
};

// symbols used in the project
function Symbol(currentValue) {
  const symbol =
    currentValue.match(/\+/) ||
    currentValue.match(/-/) ||
    currentValue.match(/\*/) ||
    currentValue.match(/\//);
  return symbol;
}
function numberSplitter(currentValue, operator) {
  let [int1, int2] = currentValue.split(operator);
  int1 = Number(int1);
  int2 = Number(int2);
  return [int1, int2];
}

function buttonClicks(
  currentValue,
  setCurrentValue,
  setValue,
  Operation,
  operator,
  testCombination
) {
  const testOperators = /[+-/*]/;

  // set this for the general buttons
  // add Symbol when decimal point is present in current value
  if (currentValue.includes(".") && !currentValue.includes("+")) {
    setCurrentValue(currentValue + operator);
    return;
  }
  // set this if statement for the subtract and add buttons
  if (testCombination.test(currentValue[currentValue.length - 1])) {
    setCurrentValue(currentValue.slice(0, currentValue.length - 1) + operator);
    return;
  }

  // set this if statement for the multiply and divide buttons
  if (testCombination.test(currentValue[currentValue.length - 1])) {
    if (
      currentValue === Operations.ADD ||
      currentValue === Operations.SUBTRACT
    ) {
      return;
    }
    setCurrentValue(currentValue.slice(0, currentValue.length - 1) + operator);
    return;
  }
  // general if statement
  if (
    testOperators.test(currentValue) &&
    currentValue[currentValue.length - 1] != operator
  ) {
    const symbol = Symbol(currentValue);
    setCurrentValue(Operation(symbol[0], currentValue));
    return;
  }
  setValue(operator);
}

// function to compute the results
function computeResult(currentValue, operator) {
  let [int1, int2] = numberSplitter(currentValue, operator);
  if (currentValue[currentValue.length - 1] === "." && operator == undefined)
    return currentValue + "0";

  if (currentValue.includes(Operations.MULTIPLY)) return int1 * int2;

  if (currentValue.includes(Operations.ADD)) return int1 + int2;

  if (currentValue.includes(Operations.DIVIDE)) {
    if (int2 === 0) return "ERROR";
    return int1 / int2;
  }
  if (currentValue.includes(Operations.SUBTRACT)) return int1 - int2;
}
export {
  Operations,
  handleDecimal,
  Symbol,
  numberSplitter,
  computeResult,
  buttonClicks,
};
