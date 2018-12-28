import React, {useState} from 'react'
import Display from './Display/Display'
import Keypad from './Keypad/Keypad'
import './Calculator.scss'

export default () => {
  const [state, dispatch] = useState({
    operandOne: null,
    operandTwo: null,
    operator  : null
  })
  
	return (
    <article className="calculator">
      <Display result={state.operandTwo || state.operandOne || '0'} />
      <Keypad state={state} dispatch={dispatch} />
    </article>
	)
}