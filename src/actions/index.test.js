import * as action from './index';

describe('actions', () => {
  it('should return a type of ADD_MOVIES, with movies', () => {
    const movies = [];
    const expected = {
      type: 'ADD_MOVIES',
      movies
    };

    const result = action.addMovies(movies);
    expect(result).toEqual(expected);
  });

  it('should return a type of TOGGLE_FAV with an id', () => {
    const id = 2;
    const expected = {
      type: 'TOGGLE_FAV',
      id
    };
    const result = action.toggleFav(id);
    expect(result).toEqual(expected);
  });

  it('should return a types of TOGGLE_FILTER', () => {

  });
});