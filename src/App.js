import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as apiCalls from './api-calls.js';
import { moviesCleaner } from './moviesCleaner.js';
import MoviesContainer from './containers/MoviesContainer.js';
import { addMovies } from './actions';
import SignIn from './containers/SignIn.js';
import SignUp from './containers/SignUp.js';
import Header from './containers/Header.js';
import './App.css';

export class App extends Component {

  async componentDidMount() {
    const rawMovies =  await apiCalls.getMovies();
    const cleanMovies = moviesCleaner(rawMovies);
    this.props.addRecentMovies(cleanMovies);
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header} />
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/' component={MoviesContainer} />
      </div>
    );
  }
};

export const mapDispatchToProps = (dispatch) => ({
  addRecentMovies: (movies) => dispatch(addMovies(movies))
});


export default withRouter(connect(null, mapDispatchToProps)(App));

App.propTypes = {
  addRecentMovies: PropTypes.func
};