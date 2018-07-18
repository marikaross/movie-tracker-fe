import React from 'react';
import { MoviesContainer, mapStateToProps, mapDispatchToProps } from './MoviesContainer.js'
import * as actions from '../actions'
import { shallow, mount } from 'enzyme';
import {deleteDatabaseFav, postFavorite} from '../api-calls';
jest.mock('../api-calls');



describe('MoviesContainer', () => {
  let wrapper, 
  mockDeleteLocalFav, 
  mockAddLocalFav, 
  mockMovies,
  mockShowAllMovies,
  mockUser;

  beforeEach(() => {
    mockDeleteLocalFav = jest.fn();
    mockAddLocalFav = jest.fn();
    mockUser = {name:'oscar', id: 4, favorites: [1, 4]}
    mockMovies = [{movie_id: 1}]
    mockShowAllMovies = true;

    wrapper = mount(<MoviesContainer 
      deleteLocalFav={mockDeleteLocalFav}
      addLocalFav={mockAddLocalFav}
      showAllMovies={mockShowAllMovies}
      user={mockUser}
      movies={mockMovies}
      history={[]}
      />)

  }) 

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('when toggleFav is called, if the movie id already exists in state, deleteLocalFav should be called', () => {
    wrapper.find('button').simulate('click')

    expect(mockDeleteLocalFav).toBeCalled()
  })

  it('when toggleFave is called it should call deleteDatabaseFav if movie_id already exists in state', async() => {
    await wrapper.find('button').simulate('click')
    expect(deleteDatabaseFav).toBeCalled();
  })
   
})
