export default (period, {operandOne, operandTwo, operator}) => {
  let numberOne = operandOne
  let numberTwo = operandTwo

  if (operator) {
    if (operandTwo) {
      if (!numberTwo.includes(period)) numberTwo += period
    } else {
      numberTwo = "0" + period
    }
  } else {
    if (operandOne) {
      if (!numberOne.includes(period)) numberOne += period
    } else {
      numberOne = "0" + period
    }
  }

  return {
    operandOne: numberOne,
    operandTwo: numberTwo,
    operator: operator
  }
}
