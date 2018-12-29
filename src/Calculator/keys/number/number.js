export function number(number, state) {
  let numberString = String(number)
  let numberOne = state.operandOne
  let numberTwo = state.operandTwo
  
  if (state.operator) {
    if (state.operandTwo) {
      numberTwo = state.operandTwo === '0' ? numberString : state.operandTwo + numberString
    } else {
      numberTwo = numberString
    }
  } else {
    if (state.operandOne) {
      numberOne = state.operandOne + numberString
    } else {
      numberOne = number === 0 ? null : numberString
    }
  }

  return {
    operandOne: numberOne,
    operandTwo: numberTwo,
    operator: state.operator
  }
}