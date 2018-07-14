import { apiKey } from './apiKey';

export const getMovies = async () =>{
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
    const response = await fetch(url)
    return response.json();
  } 
  catch(error) {
    return error.message;
  }
}
