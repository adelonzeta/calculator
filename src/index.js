import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './Calculator/Calculator'
import * as serviceWorker from './serviceWorker'
import './styles.scss'

ReactDOM.render(<Calculator />, document.getElementById('calculator'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
