import React from 'react'
import * as button from '../utilities'

export default ({state, dispatch}) => {
	return (
		<main className="keypad">
			<div className="keypad__row">
				<button className="key key--function" onClick={() => dispatch(button.clear())}>AC</button>
				<button className="key key--function" onClick={() => dispatch(button.toggleSign(state))}>+/-</button>
				<button className="key key--function" onClick={() => dispatch(button.percent(state))}>%</button>
				<button className="key key--operation" onClick={() => dispatch(button.operation('DIVIDE', state))}>&#247;</button>
			</div>
			<div className="keypad__row">
				<button className="key key--digit" onClick={() => dispatch(button.digit(7, state))}>7</button>
				<button className="key key--digit" onClick={() => dispatch(button.digit(8, state))}>8</button>
				<button className="key key--digit" onClick={() => dispatch(button.digit(9, state))}>9</button>
				<button className="key key--operation" onClick={() => dispatch(button.operation('MULTIPLY', state))}>&times;</button>
			</div>
			<div className="keypad__row">
				<button className="key key--digit" onClick={() => dispatch(button.digit(4, state))}>4</button>
				<button className="key key--digit" onClick={() => dispatch(button.digit(5, state))}>5</button>
				<button className="key key--digit" onClick={() => dispatch(button.digit(6, state))}>6</button>
				<button className="key key--operation" onClick={() => dispatch(button.operation('SUBTRACT', state))}>&minus;</button>
			</div>
			<div className="keypad__row">
				<button className="key key--digit" onClick={() => dispatch(button.digit(1, state))}>1</button>
				<button className="key key--digit" onClick={() => dispatch(button.digit(2, state))}>2</button>
				<button className="key key--digit" onClick={() => dispatch(button.digit(3, state))}>3</button>
				<button className="key key--operation" onClick={() => dispatch(button.operation('ADD', state))}>+</button>
			</div>
			<div className="keypad__row">
				<button className="key key--digit key--double" onClick={() => dispatch(button.digit(0, state))}>0</button>
				<button className="key key--digit" onClick={() => dispatch(button.decimal('.', state))}>.</button>
				<button className="key key--operation" onClick={() => dispatch(button.calculate(state))}>=</button>
			</div>
		</main>
	)
}