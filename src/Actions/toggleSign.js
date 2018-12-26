export default state => {
  let numberOne = state.operandOne
  let numberTwo = state.operandTwo

  if (state.operator && state.operandTwo) {
    numberTwo = Number(state.operandTwo) * -1
    numberTwo = numberTwo.toString()
  } else {
    numberOne = Number(state.operandOne) * -1
    numberOne = numberOne.toString()
  }

  return {
    operandOne: numberOne,
    operandTwo: numberTwo,
    operator: state.operator
  }
}
