import {State} from '../../types'

export function decimal(period: string, {operandOne, operandTwo, operator}: State): State {
  let numberOne = operandOne
  let numberTwo = operandTwo
  
  if (operator) {
    if (operandTwo) {
      if (numberTwo.indexOf(period) === -1) numberTwo += period
    } else {
      numberTwo = '0' + period
    }
  } else {
    if (operandOne) {
      if (numberOne.indexOf(period) === -1) numberOne += period
    } else {
      numberOne = '0' + period
    }
  }

  return {
    operandOne: numberOne,
    operandTwo: numberTwo,
    operator: operator
  }
}