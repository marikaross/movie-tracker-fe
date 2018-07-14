import React from 'react';
import { connect } from 'react-redux';
import { MovieCard } from '../components/MovieCard.js';
import { NavLink } from 'react-router-dom';

export const MoviesContainer = (props) => {
  const addFavorite = (id, movie) => {
    const newFavorite = {id: id, ...movie}
  }

  const cards = props.movies.map(movie => (
    <MovieCard
      movie={movie} 
      key={movie.id} 
      userId={props.user.id}
      addFavorite={addFavorite}
    />)
  );
  return (
    <div>
      {cards}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  showAll: state.showAll,
  user: state.user
});

export default connect(mapStateToProps)(MoviesContainer);