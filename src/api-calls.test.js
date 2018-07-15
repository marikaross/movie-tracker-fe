import React from 'react';
import { getMovies } from './api-calls.js';
import  { apiKey } from './apiKey.js';


describe ('getMovies', () => {
  it('should call fetch with the correct parameters', async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => Promise.resolve() }))
    await getMovies();
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('should return the correct data', () => {
    
  })
})