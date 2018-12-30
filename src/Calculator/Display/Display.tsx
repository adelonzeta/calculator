import * as React from 'react'
import {Result} from '../../types'

export default ({result}: Result) => {
  return (
    <header className="display">
      <h1>{result}</h1>
    </header>
  )
}