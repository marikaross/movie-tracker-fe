import { filterReducer } from './filterReducer.js';
import * as action from '../actions';

describe('filterReducer', () => {
  it('should return the initial state if there is no action specified', () => {
    const expected = true;

    const result = filterReducer(undefined, {})
    expect(result).toEqual(expected);
  })

  it('should toggle the state', () => {
    const expected = false;
    const initialState = true;
    const result = filterReducer(initialState, action.toggleFilter())

    expect(result).toEqual(expected);
  })
})