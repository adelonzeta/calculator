import React from 'react'
import { shallow } from 'enzyme'
import Calculator from './Calculator'
import Display from './Display/Display'
import Keypad from './Keypad/Keypad'

let wrapper
beforeEach(() => wrapper = shallow(<Calculator />))

it.skip('should render a <article />', () => {
  expect(wrapper.type()).toEqual('article')
})

it.skip('should render the Display component', () => {
  expect(wrapper.containsMatchingElement(<Display />)).toBeTruthy()
})

it.skip('should render the Keypad component', () => {
  expect(wrapper.containsMatchingElement(<Keypad />)).toBeTruthy()
})