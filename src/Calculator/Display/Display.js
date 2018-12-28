import React from 'react'
import './Display.scss'

export default ({result}) => {
  return (
    <header className="display">
      <h1>{result}</h1>
    </header>
  )
}