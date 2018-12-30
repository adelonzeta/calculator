import {State} from '../../types'

export function percent(state: State): State {
  let numberOne: string | number = state.operandOne
  let numberTwo: string | number = state.operandTwo

  if (state.operator && state.operandTwo) {
    numberTwo = Number(state.operandTwo) / 100
    numberTwo = numberTwo.toString()
  } else {
    numberOne = Number(state.operandOne) / 100
    numberOne = numberOne.toString()
  }
    
  return {
    operandOne: numberOne,
    operandTwo: numberTwo,
    operator: state.operator
  }
}

// bug when operand is null it adds zero infront
// bug same with toggleSign function