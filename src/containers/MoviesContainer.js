import React from 'react';
import { connect } from 'react-redux';
import { MovieCard } from '../components/MovieCard.js';
import { NavLink } from 'react-router-dom';
import { postFavorite, deleteDatabaseFav } from '../api-calls.js';
import { addLocalFav, deleteLocalFav } from '../actions';

export const MoviesContainer = (props) => {


  const toggleFav = async (userId, movie) => {
    if (isDuplicate(movie.movie_id)) {  
      props.deleteLocalFav(movie.movie_id)
      const deleted = await deleteDatabaseFav(userId, movie.movie_id)
    } else { 
    const newFavorite = {user_id: userId, ...movie};
    const newFavId = await postFavorite(newFavorite);
    addFav(movie)
    } 
   
  }

  const addFav = (movie) => {
    props.addLocalFav(movie)
  }


  const isDuplicate = (movieId) => {
    return props.user.favorites.find(favorite => favorite.movie_id === movieId)
  
  }

  const cards = props.movies.map(movie => (
    <MovieCard
      movie={movie} 
      key={movie.id} 
      userId={props.user.id}
      toggleFav={toggleFav}
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

const mapDispatchToProps = (dispatch) => ({
  addLocalFav: (movie) => dispatch(addLocalFav(movie)),
  deleteLocalFav: (movieId) => dispatch(deleteLocalFav(movieId))  
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);