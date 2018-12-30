import {State} from '../../types'

export function operation(operator: string, state: State): State {
  const number1 = Number(state.operandOne)
  const number2 = Number(state.operandTwo)
  const hasOperands = state.operandOne && state.operandTwo
  const existingOperator = state.operator || operator
  let result = state.operandOne
  let next = state.operator ? '' : state.operandTwo
  let newOperator = state.operandOne ? operator : ''

  if (hasOperands && (existingOperator === 'DIVIDE')) result = String(number1 / number2)
  if (hasOperands && (existingOperator === 'MULTIPLY')) result = String(number1 * number2)
  if (hasOperands && (existingOperator === 'SUBTRACT')) result = String(number1 - number2)
  if (hasOperands && (existingOperator === 'ADD')) result = String(number1 + number2)
  
  return {
    operandOne: result, 
    operandTwo: next, 
    operator: newOperator
  }
}