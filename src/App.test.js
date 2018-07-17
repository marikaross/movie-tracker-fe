import React from 'react';
import App from './App';
import * as apiCalls from './api-calls';
import { moviesCleaner } from './helper.js';
import { shallow } from 'enzyme';

  
describe('App', () => {
  it('matches the snapshot', () => {
    const mockAddRecentMovies = jest.fn();
    const wrapper = shallow(<App addRecentMovies={mockAddRecentMovies} />);
    expect(wrapper).toEqualSnapshot();
  });

  describe('componentDidMount', () => {
    it('calls props.addRecentMovies with the correct parameters', async () => {
      apiCalls.getMovies = jest.fn().mockImplementation(() => Promise.resolve({results: ['movies']}));
      moviesCleaner = jest.fn().mockImplementation(() => ['movies']);
      const mockAddRecentMovies = jest.fn();
      const wrapper = await shallow(<App addRecentMovies={mockAddRecentMovies} />);

      expect(wrapper.instance().props.addRecentMovies).toHaveBeenCalledWith(['movies']);
    });
  });
});

