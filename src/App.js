import React, { Component } from 'react';
import logo from './logo.svg';
import { apiKey } from './apiKey';
import { moviesCleaner } from './helper';

import './App.css';

class App extends Component {

  fetchMovieInfo = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018`;
    fetch(url)
    .then(response => response.json())
    .then(movies => moviesCleaner(movies))
    .catch(error => error.message)
  }

  componentDidMount() {
    this.fetchMovieInfo();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
