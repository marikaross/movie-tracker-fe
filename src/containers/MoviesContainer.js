import React from 'react';
import { connect } from 'react-redux';
import { MovieCard } from '../components/MovieCard.js';
import { postFavorite, deleteDatabaseFav } from '../api-calls.js';
import { addLocalFav, deleteLocalFav } from '../actions';
import PropTypes from 'prop-types';
import './MoviesContainer.css';

export const MoviesContainer = (props) => {

  const toggleFav = async (userId, movie) => {
    if(!props.user.name) {
      props.history.push('/login');
      return null;
    }
    if (isDuplicate(movie.movie_id)) {  
      props.deleteLocalFav(movie.movie_id);
      await deleteDatabaseFav(userId, movie.movie_id);
    } else { 
      const newFavorite = {user_id: userId, ...movie};
      await postFavorite(newFavorite);
      props.addLocalFav(movie.movie_id);
    }
  };


  const isDuplicate = (movieId) => {
    return props.user.favorites.find(favoriteId => favoriteId === movieId);
  };

  const isFavorite = (id) => {
    return props.user.favorites ? 
    props.user.favorites.includes(id) : null;
  }
  
  const cards = props.movies.map(movie => (
    <MovieCard
      movie={movie} 
      key={movie.id} 
      userId={props.user.id}
      toggleFav={toggleFav}
      isFav={isFavorite(movie.movie_id)}
    />)
  );

  const favoriteCards = props.movies.map(movie => {
    if (isFavorite(movie.movie_id)) {
      return ( 
        <MovieCard
          movie={movie} 
          key={movie.id} 
          userId={props.user.id}
          toggleFav={toggleFav}
          isFav={true}
        />
      )
    }
  })

  return (
    <div className='movie-container'>
      {props.showAllMovies  ? cards : favoriteCards}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  movies: state.movies,
  showAllMovies: state.showAllMovies,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  addLocalFav: (movie) => dispatch(addLocalFav(movie)),
  deleteLocalFav: (movieId) => dispatch(deleteLocalFav(movieId))  
});

MoviesContainer.propTypes = {
  addLocalFav: PropTypes.func,
  deleteLocalFav: PropTypes.func,
  user: PropTypes.object,
  movies: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);