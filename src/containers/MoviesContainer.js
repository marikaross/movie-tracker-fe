import React from 'react';
import { connect } from 'react-redux';
import { MovieCard } from '../components/MovieCard.js';


// const {movies, showAll } = this.props;
console.log(this.props)

export const MoviesContainer = (movies, showAll) => {
  // const cards = () => {
  //   return movies.map(movie => <Card movie={movie}/>)
  // }

  return (
    <div>
      hahahhahaha
    </div>
    )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  showAll: state.showAll
})


export default connect(mapStateToProps)(MoviesContainer);