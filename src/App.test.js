import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import * as apiCalls from './api-calls';
import { moviesCleaner } from './moviesCleaner.js';
import { shallow } from 'enzyme';
import { addMovies } from './actions';
jest.mock('./moviesCleaner')
  
describe('App', () => {
  it('matches the snapshot', () => {
    const mockAddRecentMovies = jest.fn()
    const wrapper = shallow(<App addRecentMovies={mockAddRecentMovies} />)
    expect(wrapper).toMatchSnapshot()
  })


  describe('mapDispatchtoProps', () => {
    it('calls dispatch with the correct aruguments', () => {
      const mockDispatch = jest.fn()
      const mockAction = {type: 'ADD_MOVIES', movies: ['I am a movie']}

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addRecentMovies(mockAction.movies)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

})





