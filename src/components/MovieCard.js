import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie, userId, toggleFav, isFav }) => {
  const handleClick = () => {
    toggleFav(userId, movie);
  };

  return (
    <div id={movie.id} className={`movie-card ${isFav ? 'favorite' : ''}`} >
      <img 
        alt='popular movie' 
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
      />
      <h3>{movie.title}</h3>
      <h3>Rating: {movie.vote_average}</h3>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  userId: PropTypes.number,
  toggleFav: PropTypes.func,
  isFav: PropTypes.bool
};