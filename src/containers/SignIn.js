import React, { Component } from 'react';
import {Link, withRouter, Redirect, Route} from 'react-router-dom';
import { loginUser, logOutUser } from '../actions';
import { connect } from 'react-redux';
import { logIn } from '../api-calls';

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
    const user = await logIn(this.state);
    
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

  logOutUser = () => {
    this.props.logOutUser()
  }

  toLogOut = () => {
    console.log(this.props)
    return this.props.user.name ?
    <button onClick={this.logOutUser}>Log Out</button> :
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
        {this.isLoggedIn()}
        {this.toLogOut()}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user)),
  logOutUser: () => dispatch(logOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
