import React from 'react';
import { connect } from 'react-redux';
import { MovieCard } from '../components/MovieCard.js';
import { NavLink } from 'react-router-dom';
import { postFavorite } from '../api-calls.js';

export const MoviesContainer = (props) => {
  const addFavorite = async (id, movie) => {
    const newFavorite = {user_id: id, ...movie};
    const newFavId = await postFavorite(newFavorite);
    console.log(newFavId)
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