import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiKey } from './apiKey';
import { moviesCleaner } from './helper';
import MoviesContainer from './containers/MoviesContainer.js';
import { addMovies } from './actions';
import './App.css';

export class App extends Component {

  fetchMovieInfo = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
    fetch(url)
      .then(response => response.json())
      .then(movies => moviesCleaner(movies))
      .then(cleanMovies => this.props.addRecentMovies(cleanMovies))
      .catch(error => error.message);
    
  }

  componentDidMount() {
    this.fetchMovieInfo();
  }

  render() {
    return (
      <div className="App">
        <MoviesContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecentMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(null, mapDispatchToProps)(App);
