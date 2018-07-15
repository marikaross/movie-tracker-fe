import React from 'react';
import {getMovies, logIn, signUp} from './api-calls.js';
import  { apiKey } from './apiKey.js';
import { 
  mockMovieData, 
  mockUserData } from './mockMovieData.js';


describe ('getMovies', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockMovieData) }))
  })

  it('should call fetch with the correct parameters', async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`
    await getMovies();
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('should return the correct data', async () => {
    const expected = mockMovieData;
    const result = await getMovies()
    expect(result).toEqual(expected)
  })

  it('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('Fetch failed')))
    const expected = 'Fetch failed'
    const result = await getMovies()
    expect(result).toEqual(expected);
  })
})

describe ('logIn', () => {
  let url 
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({status: 200, json: () => Promise.resolve(mockUserData) }))

    url = 'http://localhost:3000/api/users/'
  })

  it('should be called with the correct url', async () => {
    const mockOptionsObject = {
      method: 'POST',
      body: JSON.stringify({}),
      headers:{
        'Content-Type': 'application/json'
      }}

    await logIn(url, mockOptionsObject);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptionsObject);
  })

  it('should return the correct data', async() => {
    const url = 'http://localhost:3000/api/users/'
    const expected = mockUserData.data
    const result = await logIn(url)
    expect(result).toEqual(expected)
  })

  it('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error(false)))
    const expected = false
    const result = await logIn(url)
    expect(result).toEqual(expected)
  })

})

describe ('signUp', () => {
  let url
  let mockOptionsObject

  beforeEach(() => {
    url = 'http://localhost:3000/api/users/new';
    mockOptionsObject = {
      method: 'POST',
      body: JSON.stringify(mockUserData.data),
      headers:{
        'Content-Type': 'application/json'
      }
    };

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockUserData.data) }))
  })

    it('should be called with the correct parameters', async () => {
      await signUp(url, mockOptionsObject);
      expect(window.fetch).toHaveBeenCalledWith(url, mockOptionsObject)
    })

    it.only('should return an error if the fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error(false)))
      const expected = false
      const result = await signUp(url, mockOptionsObject)
      expect(result).toEqual(expected)

    })
})

describe ('postFavorite', () => {
  let url
  let mockOptionsObject

  beforeEach(() => {
    url = 'http://localhost:3000/api/users/favorites/new'
    mockOptionsObject
  })
})