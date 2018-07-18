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

  it('should return a type of TOGGLE_FILTER', () => {
    const expected = {
      type: "TOGGLE_FILTER"
    };
    const result = action.toggleFilter();
    expect(result).toEqual(expected);
  });

  it('should return a type of LOGIN_USER, with user', () => {
    const user = {};
    const expected = {
      type: "LOGIN_USER",
      user
    };
    const result = action.loginUser(user);
    expect(result).toEqual(expected);
  });

  it('should return a type of LOG_OUT_USER', () => {
    const expected = {
      type: "LOG_OUT_USER"
    };
    const result = action.logOutUser();
    expect(result).toEqual(expected);
  });

  it('should return a type of POPULATE_USER_FAVS, with favorites', () => {
    const favorites = [];
    const expected = {
      type: "POPULATE_USER_FAVS",
      favorites
    };
    const result = action.populateUserFavs(favorites);
    expect(result).toEqual(expected);
  });

  it('should return a type of DELETE_LOCAL_FAV, with movie_id', () => {
    const movie_id = 123;
    const expected = {
      type: "DELETE_LOCAL_FAV",
      movie_id
    };
    const result = action.deleteLocalFav(movie_id);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_LOCAL_FAV, with movie_id', () => {
    const movie_id = 123;
    const expected = {
      type: "ADD_LOCAL_FAV",
      movie_id
    };
    const result = action.addLocalFav(movie_id);
    expect(result).toEqual(expected);
  });
});