import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer.js';
import { movieReducer } from './movieReducer.js';
import { userReducer } from './userReducer.js';

export const rootReducer = combineReducers({
  movies: movieReducer,
  showAllMovies: filterReducer,
  user: userReducer
});