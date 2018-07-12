import React from 'react';

export const MovieCard = ({ movie }) => {
  console.log(movie)
  return(
    <div id={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.posterPath}`}/>
      <h3>{movie.title}</h3>
      <h3>{movie.voteAverage}</h3>
    </div>
  );
}