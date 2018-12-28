import digit from './digit'

// should work without operator
// should work with operator
// should work with existing value

function state(o1, o2, o) {
  return {operandOne: o1, operandTwo: o2, operator: o}
}

it('should always save a string value', () => {
  let sampleInput = digit(1, state(2, null, null))
  expect(typeof sampleInput.operandOne).toEqual('string')
})

it('should work without operator', () => {
  expect(digit(1, state(null, null, null))).toEqual(state('1', null, null))
  expect(digit(7, state(null, null, null))).toEqual(state('7', null, null))
});

it('should work with operator', () => {
  expect(digit(1, state(null, null, 'ADD'))).toEqual(state(null, '1', 'ADD'))
  expect(digit(9, state('1', null, 'ADD'))).toEqual(state('1', '9', 'ADD'))
});

it('should work with existing value', () => {
  expect(digit(1, state('1', null, null))).toEqual(state('11', null, null))
  expect(digit(9, state(null, '1', 'ADD'))).toEqual(state(null, '19', 'ADD'))
  expect(digit(9, state('1', '1', 'ADD'))).toEqual(state('1', '19', 'ADD'))
});