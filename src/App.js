import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Link, withRouter } from 'react-router-dom';
import { apiKey } from './apiKey';
import { moviesCleaner } from './helper.js';
import MoviesContainer from './containers/MoviesContainer.js';
import { addMovies } from './actions';
import { SignIn } from './containers/SignIn.js';
import { SignUp } from './containers/SignUp.js';
import { Header } from './containers/Header.js';
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
        <Header />
        <Route exact path='/' component={MoviesContainer} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/login' component={SignIn} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecentMovies: (movies) => dispatch(addMovies(movies))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
