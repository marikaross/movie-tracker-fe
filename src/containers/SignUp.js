import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../api-calls';
import { loginUser } from '../actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SignUp.css';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      email: '',
      password: '',
      hasError: false
    };
  }

  handleChange = (input) => {
    const { name, value } = input.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const reply = await signUp(this.state);
    if (reply.id) {
      this.setState({id: reply.id, favorites: [], hasError: false});
      this.props.login(this.state);    
      this.props.history.push('/');
    } else {
      this.setState({ hasError: true });
    }
  }

  handleError = () => {
    if (this.state.hasError) {
      return (
        <h5 className="user-message">Try A Diffrent E-Mail</h5>
      );
    }
  }

  render() {
    return (
      <form className='sign-up' onSubmit={this.handleSubmit}>
        <input 
          id='name' 
          name='name' 
          placeholder='Name'
          onChange={this.handleChange}
        />
        <input 
          id= 'email' 
          type='email' 
          name='email'
          placeholder='E-Mail'
          onChange={this.handleChange}
        />
        <input 
          id='password' 
          type='password' 
          name='password'
          placeholder='Password'
          onChange={this.handleChange}
        />
        <button onClick={this.showSignUp}>Sign Up</button>
        <Link to='/' ><button>Home</button></Link>
        {this.handleError()}
      </form>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(loginUser(user))
});

SignUp.propTypes = {
  login: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);