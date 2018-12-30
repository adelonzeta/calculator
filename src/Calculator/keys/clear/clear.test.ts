import {clear} from './clear'

const state = clear()

describe('clear function', () => {
  it('should return an object', () => {
    expect(typeof state).toEqual('object')
  });  

  describe('operandOne property', () => {
    it('should have a null value', () => {
      expect(state.operandOne).toEqual('')
    });
  });

  describe('operandTwo property', () => {
    it('should have a null value', () => {
      expect(state.operandTwo).toEqual('')
    });
  });

  describe('operator property', () => {
    it('should have a null value', () => {
      expect(state.operator).toEqual('')
    });
  });
});
