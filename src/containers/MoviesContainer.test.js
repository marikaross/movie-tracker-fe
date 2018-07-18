import React from 'react';
import { MoviesContainer, mapStateToProps, mapDispatchToProps } from './MoviesContainer.js'
import * as actions from '../actions'
import {shallow} from 'enzyme';
import {deleteDatabaseFav, postFavorite} from '../api-calls';



describe('MoviesContainer', () => {
  let wrapper, mockDeleteLocalFav, mockAddLocalFav, mockUserId, mockMovie;

  beforeEach(() => {
    wrapper = shallow(<MoviesContainer 
      deleteLocalFav={mockDeleteLocalFav}
      addLocalFav={mockAddLocalFav}
      
      movies={}
      />)

  }) 
   
})
