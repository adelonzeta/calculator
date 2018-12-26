export default ({operandOne, operandTwo, operator}) => {
  const exists = operandOne && operandTwo && operator
  let result = operandOne
  let next = exists ? null : operandTwo
  let newOperator = exists ? null : operator

  if (exists && operator === "DIVIDE")
    result = String(Number(operandOne) / Number(operandTwo))
  if (exists && operator === "MULTIPLY")
    result = String(Number(operandOne) * Number(operandTwo))
  if (exists && operator === "SUBTRACT")
    result = String(Number(operandOne) - Number(operandTwo))
  if (exists && operator === "ADD")
    result = String(Number(operandOne) + Number(operandTwo))

  return {
    operandOne: result,
    operandTwo: next,
    operator: newOperator
  }
}
