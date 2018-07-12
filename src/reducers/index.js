import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer.js';
import { movieReducer } from './movieReducer.js';

export const rootReducer = combineReducers({
  movies: movieReducer,
  showAllMovies: filterReducer
})