import React, {useState} from 'react'
import Display from './Display/Display'
import Keypad from './Keypad/Keypad'

export default () => {
  const [state, dispatch] = useState({
    operandOne: '',
    operandTwo: '',
    operator  : ''
  })
  
	return (
    <article className="calculator">
      <Display result={state.operandTwo || state.operandOne || '0'} />
      <Keypad state={state} dispatch={dispatch} />
    </article>
	)
}