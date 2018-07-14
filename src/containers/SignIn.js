import React, { Component } from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import { loginUser } from '../actions';

import { connect } from 'react-redux';

export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state={
      email: '',
      password: '',
      hasError: false
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
      const {email, password} = this.state;

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const user = await response.json();
      this.props.login(user.data);
    } 
    catch (error) {
      this.setState({hasError: true})
    }
  }

  isLoggedIn = () => {
    return this.state.hasError ? 
    <h5>email and password do not match</h5> :
    <div></div>
    
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
        {this.isLoggedIn()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
