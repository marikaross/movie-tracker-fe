import { MovieCard } from './MovieCard.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('MovieCard', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockMovieCard = [{
      title: "Legally Blonde",
      vote_average: 100}]
    
    const wrapper = shallow(<MovieCard />)
    expect(wrapper).toMatchSnapshot()
    })
  })
