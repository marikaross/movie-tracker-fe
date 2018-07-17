import {movieReducer} from './movieReducer.js';
import * as action from '../actions';

describe('movieReducer', () => {
  it('should return initial state when the action is undefined', () => {
    const expected = [];
    const result = movieReducer([], {});
    expect(result).toEqual(expected);
  });

  it('should add movies to the state', () => {
    const movies = [{title: 'i am movie'}];
    const expected = [...movies];
    const result = movieReducer([], action.addMovies(movies));
    expect(result).toEqual(expected);
  });
});