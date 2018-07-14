import { apiKey } from './apiKey';

export const getMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
    const response = await fetch(url)
    return response.json();
  } 
  catch(error) {
    return error.message;
  }
}

export const logIn = async (state) => {
  try{
    const url = 'http://localhost:3000/api/users/';
    const {email, password} = state;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json();
    return result.data;
 
  } 
  catch (error) {
    return false;
  }
}

export const signUp = async (state) => {
  try{
    const url = 'http://localhost:3000/api/users/new';
    const {name, email, password} = state;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } 
  catch (error) {
    return false;
  }
}

export const postFavorite = async (favorite) => {
  console.log(favorite)
  try {
    const url = 'http://localhost:3000/api/users/favorites/new';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(favorite),
      headers: {
        'Content-Type': 'application/json'
      } 
    });
    return await response.json();
  }
  catch (error) {
    return false;
  }
}
















