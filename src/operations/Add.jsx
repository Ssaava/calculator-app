import { Operartions as operations } from "./Operations";
const Add = (operator, currentValue) => {
  let result = 0;
  const values = currentValue.split(operator);
  const int1 = parseInt(values[0]);
  const int2 = parseInt(values[1]);
  let answer = 0;
  if (currentValue.includes(operator)) {
    answer = int1 + int2;
  }
  if (currentValue.includes(operations.MULTIPLY)) {
    answer = int1 * int2;
  }
  if (currentValue.includes(operations.DIVIDE)) {
    answer = int1 / int2;
  }
  if (currentValue.includes(operations.SUBTRACT)) {
    answer = int1 - int2;
  }

  result = answer.toString() + "+";
  return result;
};

export default Add;
