import React from "react"
import operation from "../Actions/operation"
import digit from "../Actions/digit"
import toggleSign from "../Actions/toggleSign"
import clear from "../Actions/clear"
import percent from "../Actions/percent"
import decimal from "../Actions/decimal"
import calculate from "../Actions/calculate"
import "./Keypad.scss"

export default ({state, dispatch}) => {
  return (
    <main className="keypad">
      <div className="keypad__row">
        <button className="key key--function" onClick={() => dispatch(clear())}>
          AC
        </button>
        <button
          className="key key--function"
          onClick={() => dispatch(toggleSign(state))}
        >
          +/-
        </button>
        <button
          className="key key--function"
          onClick={() => dispatch(percent(state))}
        >
          %
        </button>
        <button
          className="key key--operation"
          onClick={() => dispatch(operation("DIVIDE", state))}
        >
          &#247;
        </button>
      </div>
      <div className="keypad__row">
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(7, state))}
        >
          7
        </button>
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(8, state))}
        >
          8
        </button>
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(9, state))}
        >
          9
        </button>
        <button
          className="key key--operation"
          onClick={() => dispatch(operation("MULTIPLY", state))}
        >
          &times;
        </button>
      </div>
      <div className="keypad__row">
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(4, state))}
        >
          4
        </button>
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(5, state))}
        >
          5
        </button>
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(6, state))}
        >
          6
        </button>
        <button
          className="key key--operation"
          onClick={() => dispatch(operation("SUBTRACT", state))}
        >
          &minus;
        </button>
      </div>
      <div className="keypad__row">
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(1, state))}
        >
          1
        </button>
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(2, state))}
        >
          2
        </button>
        <button
          className="key key--digit"
          onClick={() => dispatch(digit(3, state))}
        >
          3
        </button>
        <button
          className="key key--operation"
          onClick={() => dispatch(operation("ADD", state))}
        >
          +
        </button>
      </div>
      <div className="keypad__row">
        <button
          className="key key--digit key--double"
          onClick={() => dispatch(digit(0, state))}
        >
          0
        </button>
        <button
          className="key key--digit"
          onClick={() => dispatch(decimal(".", state))}
        >
          .
        </button>
        <button
          className="key key--operation"
          onClick={() => dispatch(calculate(state))}
        >
          =
        </button>
      </div>
    </main>
  )
}
