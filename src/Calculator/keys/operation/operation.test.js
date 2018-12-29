import operation from './operation'    
// OPERATIONS => 'ADD' || 'SUBTRACT' || 'MULTIPLY' || 'DIVIDE'
// it should work without operands => null, null, null || 'OPERATIONS'
// it should work with only the first operand => 1, null, null || 'OPERATIONS'
// it should calculate the result -> 1, 1, null || 'OPERATIONS'

function state(o1, o2, o) {
  return {operandOne: o1, operandTwo: o2, operator: o}
}

it('should return null without operands', () => {
  expect(operation('ADD', state(null, null, null))).toEqual(state(null, null, null))
  expect(operation('SUBTRACT', state(null, null, null))).toEqual(state(null, null, null))
  expect(operation('MULTIPLY', state(null, null, null))).toEqual(state(null, null, null))
  expect(operation('DIVIDE', state(null, null, null))).toEqual(state(null, null, null))
});

it('should work with only the first operand', () => {
  expect(operation('ADD', state('1', null, null))).toEqual(state('1', null, 'ADD'))
  expect(operation('ADD', state('2', null, 'DIVIDE'))).toEqual(state('2', null, 'ADD'))
  expect(operation('SUBTRACT', state('3', null, null))).toEqual(state('3', null, 'SUBTRACT'))
  expect(operation('SUBTRACT', state('4', null, 'MULTIPLY'))).toEqual(state('4', null, 'SUBTRACT'))
  expect(operation('MULTIPLY', state('5', null, null))).toEqual(state('5', null, 'MULTIPLY'))
  expect(operation('MULTIPLY', state('6', null, 'SUBTRACT'))).toEqual(state('6', null, 'MULTIPLY'))
  expect(operation('DIVIDE', state('7', null, null))).toEqual(state('7', null, 'DIVIDE'))
  expect(operation('DIVIDE', state('8', null, 'ADD'))).toEqual(state('8', null, 'DIVIDE'))
});

it('should calculate the result', () => {
  expect(operation('ADD', state('10', '2', 'DIVIDE'))).toEqual(state('5', null, 'ADD'))
  expect(operation('SUBTRACT', state('4', '2', 'MULTIPLY'))).toEqual(state('8', null, 'SUBTRACT'))
  expect(operation('MULTIPLY', state('6', '6', 'SUBTRACT'))).toEqual(state('0', null, 'MULTIPLY'))
  expect(operation('DIVIDE', state('8', '2', 'ADD'))).toEqual(state('10', null, 'DIVIDE'))
});

it('should calculate big numbers', () => {
  // expect(operation('ADD', state(10, 2, 'DIVIDE'))).toEqual(state(5, null, 'ADD'))
  // expect(operation('SUBTRACT', state(4, 2, 'MULTIPLY'))).toEqual(state(8, null, 'SUBTRACT'))
  // expect(operation('MULTIPLY', state(6, 6, 'SUBTRACT'))).toEqual(state(0, null, 'MULTIPLY'))
  expect(operation('DIVIDE', state('999999999999999', '999999999999999', 'ADD'))).toEqual(state('1999999999999998', null, 'DIVIDE'))
});

it('should return string values', () => {
  let op = operation('ADD', state('1', null, 'ADD'))
  expect(typeof op.operandOne).toEqual('string')
});

it.skip('should calculate decimals', () => {
  
});