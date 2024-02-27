export default function Functions() {
  return;
}
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
// function numberSplitter(currentValue, operator) {
//   let [int1, int2] = currentValue.split(operator);
//   int1 = Number(int1);
//   int2 = Number(int2);
//   return {
//     int1,
//     int2,
//   };
// }
export { Operations, handleDecimal, Symbol };
