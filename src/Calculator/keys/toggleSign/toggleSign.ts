import {State} from '../../types'

export function toggleSign(state: State): State {
  let numberOne: string | number = state.operandOne
  let numberTwo: string | number = state.operandTwo

  if (state.operator && state.operandTwo) {
    numberTwo = Number(state.operandTwo) * (-1)
    numberTwo = numberTwo.toString()
  } else {
    numberOne = Number(state.operandOne) * (-1)
    numberOne = numberOne.toString()
  }
    
  return {
    operandOne: numberOne,
    operandTwo: numberTwo,
    operator: state.operator
  }
}