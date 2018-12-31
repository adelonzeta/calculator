import React from 'react'
import {StateHook} from '../../types'
import * as button from 'calculator-keys'

export default ({state, dispatch}: StateHook) => {
	return (
		<main className="keypad">
			<div className="row">
				<button className="function" onClick={() => dispatch(button.clear())}>AC</button>
				<button className="function" onClick={() => dispatch(button.negation(state))}>+/-</button>
				<button className="function" onClick={() => dispatch(button.percent(state))}>%</button>
				<button className="operation" onClick={() => dispatch(button.operation('DIVIDE', state))}>&#247;</button>
			</div>
			<div className="row">
				<button className="number" onClick={() => dispatch(button.number('7', state))}>7</button>
				<button className="number" onClick={() => dispatch(button.number('8', state))}>8</button>
				<button className="number" onClick={() => dispatch(button.number('9', state))}>9</button>
				<button className="operation" onClick={() => dispatch(button.operation('MULTIPLY', state))}>&times;</button>
			</div>
			<div className="row">
				<button className="number" onClick={() => dispatch(button.number('4', state))}>4</button>
				<button className="number" onClick={() => dispatch(button.number('5', state))}>5</button>
				<button className="number" onClick={() => dispatch(button.number('6', state))}>6</button>
				<button className="operation" onClick={() => dispatch(button.operation('SUBTRACT', state))}>&minus;</button>
			</div>
			<div className="row">
				<button className="number" onClick={() => dispatch(button.number('1', state))}>1</button>
				<button className="number" onClick={() => dispatch(button.number('2', state))}>2</button>
				<button className="number" onClick={() => dispatch(button.number('3', state))}>3</button>
				<button className="operation" onClick={() => dispatch(button.operation('ADD', state))}>+</button>
			</div>
			<div className="row">
				<button className="double" onClick={() => dispatch(button.number('0', state))}>0</button>
				<button className="number" onClick={() => dispatch(button.decimal(state))}>.</button>
				<button className="operation" onClick={() => dispatch(button.equals(state))}>=</button>
			</div>
		</main>
	)
}