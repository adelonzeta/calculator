import React from 'react'
import {StateHook} from '../types'
import * as keys from '../keys'

export default ({state, dispatch}: StateHook) => {
	return (
		<main className="keypad">
			<div className="row">
				<button className="function" onClick={() => dispatch(keys.clear())}>AC</button>
				<button className="function" onClick={() => dispatch(keys.toggleSign(state))}>+/-</button>
				<button className="function" onClick={() => dispatch(keys.percent(state))}>%</button>
				<button className="operation" onClick={() => dispatch(keys.operation('DIVIDE', state))}>&#247;</button>
			</div>
			<div className="row">
				<button className="number" onClick={() => dispatch(keys.number(7, state))}>7</button>
				<button className="number" onClick={() => dispatch(keys.number(8, state))}>8</button>
				<button className="number" onClick={() => dispatch(keys.number(9, state))}>9</button>
				<button className="operation" onClick={() => dispatch(keys.operation('MULTIPLY', state))}>&times;</button>
			</div>
			<div className="row">
				<button className="number" onClick={() => dispatch(keys.number(4, state))}>4</button>
				<button className="number" onClick={() => dispatch(keys.number(5, state))}>5</button>
				<button className="number" onClick={() => dispatch(keys.number(6, state))}>6</button>
				<button className="operation" onClick={() => dispatch(keys.operation('SUBTRACT', state))}>&minus;</button>
			</div>
			<div className="row">
				<button className="number" onClick={() => dispatch(keys.number(1, state))}>1</button>
				<button className="number" onClick={() => dispatch(keys.number(2, state))}>2</button>
				<button className="number" onClick={() => dispatch(keys.number(3, state))}>3</button>
				<button className="operation" onClick={() => dispatch(keys.operation('ADD', state))}>+</button>
			</div>
			<div className="row">
				<button className="double" onClick={() => dispatch(keys.number(0, state))}>0</button>
				<button className="number" onClick={() => dispatch(keys.decimal('.', state))}>.</button>
				<button className="operation" onClick={() => dispatch(keys.calculate(state))}>=</button>
			</div>
		</main>
	)
}