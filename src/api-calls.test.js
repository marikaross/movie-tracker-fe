import React from 'react';
import {
  getMovies, 
  logIn, 
  signUp, 
  postFavorite, 
  getFavorites, 
  deleteDatabaseFav } from './api-calls.js';
import  { apiKey } from './apiKey.js';
import { 
  mockMovieData, 
  mockUserData,
  mockFavoriteData } from './mockMovieData.js';


describe ('getMovies', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(mockMovieData) }))
  })

  it.only('should call fetch with the correct parameters', async () => {
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

    it('should return the correct data as a response object', async () => {
      const expected = mockUserData.data
      const result = await signUp(url, mockOptionsObject)
      expect(result).toEqual(expected);

    })

    it('should return an error if the fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error(false)))
      const expected = false
      const result = await signUp(url, mockOptionsObject)
      expect(result).toEqual(expected)

    })
})

describe ('postFavorite', () => {
  let userId
  let url
  let mockOptionsObject
  let mockMovie

  beforeEach(() => {
    userId = 10

    url = 'http://localhost:3000/api/users/favorites/new';

    mockMovie = {
      user_id: userId, 
      movie_id: 400155, 
      title: "Best Movie", 
      poster_path: "http://url.movie.jpg", 
      release_date: "2018-07-12",
      overview: "SO good",
      vote_average: 7.5
    }

    mockOptionsObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockMovie)
      } 

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({status: 200}))

  })

  it('should be called with the proper parameters', async () => {
    await postFavorite(mockMovie)
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptionsObject)
  })

  it('should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error(false)))
    const expected = false
    const result = await postFavorite(mockMovie)
    expect(result).toEqual(expected)
  })
})

describe('getFavorites', () => {
  let userId
  let url
  let mockFavorites 

  beforeEach(() => {
    userId = 2
    url = `http://localhost:3000/api/users/2/favorites`
    mockFavorites = = [{
      user_id: 2, 
      movie_id: 400155, 
      title: "Best Movie", 
      poster_path: "http://url.movie.jpg", 
      release_date: "2018-07-12",
      overview: "SO good",
      vote_average: 7.5}
  ]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({status: 200, json: () => Promise.resolve(mockFavorites)}))
  })

  it('should call fetch with the correct parameters', async () => {
    await getFavorites(2)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return the correct data', () => {
    const expected = mockFavorites
    const result = getFavorites(1)
    expect(result).toEqual(expected)
  })

  it('should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error(false)))
    const expected = false
    const result = await getFavorites(2)
    expect(result).toEqual(expected)

  })
})

describe ('deleteDatabaseFav', () => {
  let url
  let userId
  let movieId

  beforeEach(() => {
    userId = 2
    movieId = 400155
    url = `http://localhost:3000/api/users/2/favorites/400155`
  })

  it('should call fetch with the correct parameters', async () => {
    await deleteDatabaseFav
  })

})