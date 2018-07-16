import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, logOutUser, populateUserFavs } from '../actions';
import { Redirect, withRouter } from 'react-router';

import { logIn, getFavorites } from '../api-calls';
import './SignIn.css';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      hasError: false
    };
  }

  handleChange = (input) => {
    const { id, value } = input.target;
    this.setState({
      [id]: value
    });
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const user = await logIn(this.state);
    if (user) {
      this.props.login(user);
      this.setState({ hasError: false });
      const favorites = await getFavorites(user.id); 
      this.props.populateUserFavs(favorites.data);  
    } else {
      this.setState({ hasError: true });
    }
  }

  isLoggedIn = () => {
    return this.state.hasError ? 
      <h5>email and password do not match</h5> :
      <div></div>;
  }

  logOutUser = () => {
    this.props.logOutUser();
  }

  toLogOut = () => {
    if (this.props.user.name) {
    return (
      <div>
        <Redirect to='/' />
        <button onClick={this.logOutUser}>Log Out</button>
      </div>  
      )
    }
  }

  render() {
    return (
      <form className='sign-in-form' onSubmit={this.handleSubmit}>
        <input 
          id= 'email'
          type='email'
          placeholder='E-Mail'
          onChange={this.handleChange}
        />
        <input 
          id='password' 
          type='password'
          placeholder='Password'
          onChange={this.handleChange}
        />
        <button>Sign In</button>
        {this.isLoggedIn()}
        {this.toLogOut()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  logOutUser: () => dispatch(logOutUser()),
  populateUserFavs: (id) => dispatch(populateUserFavs(id))
});

SignIn.propTypes = {
  login: PropTypes.func,
  populateUserFavs: PropTypes.func,
  logOutUser: PropTypes.func,
  user: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));