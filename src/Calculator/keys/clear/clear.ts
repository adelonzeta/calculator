import {State} from '../../types'

export function clear(): State {
  return {
    operandOne: '',
    operandTwo: '',
    operator: ''
  }
}