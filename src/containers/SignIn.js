import React, { Component } from 'react';
import {Link, withRouter, Redirect, Route} from 'react-router-dom';
import { loginUser } from '../actions';
import { connect } from 'react-redux';
import { signIn } from '../api-calls';

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
    const user = await signIn(this.state);
    console.log(user);
    if (user) {
      this.props.login(user);
      this.setState({ hasError: false })    
    } else {
      this.setState({ hasError: true })
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
