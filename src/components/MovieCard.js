import React from 'react';

export const MovieCard = ({ movie, userId, addFavorite }) => {
  const handleClick = () => {
    addFavorite(userId, movie);
  } 

  return(
    <div id={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
      <h3>{movie.title}</h3>
      <h3>{movie.vote_average}</h3>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
}