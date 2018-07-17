import {userReducer} from './userReducer.js';
import * as action from '../actions';

describe('userReducer', () => {
  it('should return initial state when the action is undefined', () => {
    const expected = [];
    const result = userReducer([], {});
    expect(result).toEqual(expected);
  });

  it('should add user to state when loginUser is invoked', () => {
    const user = { id: 1, name: 'Tom'};
    const expected = {...user};
    const result = userReducer({}, action.loginUser(user));
    expect(result).toEqual(expected);
  });

  it('should remove user from state when logOutUser is invoked', () => {
    const user = { id: 1, name: 'Tom'};
    const expected = {};
    const result = userReducer({...user}, action.logOutUser());
    expect(result).toEqual(expected);
  });

  it('should populate users favorites when populateUserFavs is invoked', () => {
    const user = { id: 1, name: 'Tom'};
    const favorites = [442249, 427641];
    const expected = {
      id: 1, 
      name: 'Tom', 
      favorites: [
        442249,
        427641
      ]
    };
    const result = userReducer({...user}, action.populateUserFavs(favorites));
    expect(result).toEqual(expected);
  });

  it('should add movie id to favorites when addLocalFav is invoked', () => {
    const user = {
      id: 1, 
      name: 'Tom', 
      favorites: [
        442249,
        427641
      ]
    };
    const movie_id = 123456;
    const expected = {
      id: 1, 
      name: 'Tom', 
      favorites: [
        442249,
        427641,
        123456
      ]
    };
    const result = userReducer({...user}, action.addLocalFav(movie_id));
    expect(result).toEqual(expected);
  });

  it('should remove movie_id passed to deleteLocalFav from favorites', () => {
    const user = {
      id: 1, 
      name: 'Tom', 
      favorites: [
        442249,
        427641
      ]
    };
    const movie_id = 427641;
    const expected = {
      id: 1, 
      name: 'Tom', 
      favorites: [
        442249
      ]
    };
    const result = userReducer({...user}, action.deleteLocalFav(movie_id));
    expect(result).toEqual(expected);
  });
});