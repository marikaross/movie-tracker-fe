import {movieReducer} from './movieReducer.js'
import * as action from '../actions';

describe('movieReducer', () => {
  it('should return initial state when the action is undefined', () => {
    const expected = []
    const result = movieReducer([], {})
    expect(result).toEqual(expected)
  })

  it('should add movies to the state', () => {
    const movies = {title: 'i am movie'}
    const expected = [movies]
    const result = movieReducer([], action.addMovies(movies))
    expect(result).toEqual(expected)
  })

  it('should add a favorite property to a movie', () => {
    const id = 2
    const initialState = [{title: 'i am movie', id}]
    const expected = [{title: 'i am movie', id, favorite: true}]
    console.log(action)
    const result = movieReducer(initialState, action.toggleFav(id))
    expect(result).toEqual(expected);

  })
})