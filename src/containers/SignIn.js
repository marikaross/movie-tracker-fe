import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom';
import { loginUser } from '../actions';

import { connect } from 'react-redux';

export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange = (input) => {
    const { type, value } = input.target
    this.setState({
      [type]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const url = 'http://localhost:3000/api/users/';
      const data = this.state;

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const user = await response.json();
      console.log(this.props)
      this.props.loginUser(user.data);

    } 
    catch (error) {
      //redirect to sign up
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>E-Mail</label>
        <input id= 'email' type='email' onChange={this.handleChange}/>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' onChange={this.handleChange}/>
        <button>Sign In</button>
        <button>Sign Up</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(SignIn);
