import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie, userId, toggleFav }) => {
  const handleClick = () => {
    toggleFav(userId, movie);
  };

  return (
    <div id={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
      <h3>{movie.title}</h3>
      <h3>{movie.vote_average}</h3>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  userId: PropTypes.number,
  toggleFav: PropTypes.func
};