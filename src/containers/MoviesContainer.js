import React from 'react';
// import Redux from 'redux';
import { connect } from 'react-redux';
import { toggleFilter } from '../actions'

export const MoviesContainer = ({movies, showAll}) => {

  return (
    <h1> Heeeeey </h1>
    )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  showAll: state.showAll
})

const mapDispatchToProps = (dispatch) => ({
  toggleFilter: () => dispatch(toggleFilter())
})



export default connect(mapStateToProps,  mapDispatchToProps)(MoviesContainer);