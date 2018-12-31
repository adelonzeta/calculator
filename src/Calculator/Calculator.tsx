import React, {useState} from 'react'
import Display from './Display/Display'
import Keypad from './Keypad/Keypad'

export default () => {
  const [state, dispatch] = useState({
    operand1: '',
    operand2: '',
    operator: ''
  })
  
	return (
    <article className="calculator">
      <Display result={state.operand2 || state.operand1 || '0'} />
      <Keypad state={state} dispatch={dispatch} />
    </article>
	)
}