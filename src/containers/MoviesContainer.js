import React from 'react';
import { connect } from 'react-redux';
import { MovieCard } from '../components/MovieCard.js';


export const MoviesContainer = (props) => {
  const cards = () => {
    return props.movies.map(movie => <MovieCard movie={movie}/>)
  }

  return (
    <div>
      {cards()}
    </div>
    )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  showAll: state.showAll
})


export default connect(mapStateToProps)(MoviesContainer);