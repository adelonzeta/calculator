import {clear} from './clear'

const state = clear()

describe('clear function', () => {
  it('should return an object', () => {
    expect(typeof state).toEqual('object')
  });  

  describe('operandOne', () => {
    it('should have a null value', () => {
      expect(state.operandOne).toEqual(null)
    });
  });

  describe('operandTwo', () => {
    it('should have a null value', () => {
      expect(state.operandTwo).toEqual(null)
    });
  });

  describe('operator', () => {
    it('should have a null value', () => {
      expect(state.operator).toEqual(null)
    });
  });
});
