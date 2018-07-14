import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../api-calls';
import { loginUser } from '../actions';


export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state={
      name: '',
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
    const reply = await signUp(this.state)
    
    if (reply.id) {
      this.props.login(this.state); 
      this.setState({ hasError: false })    
    } else {
      this.setState({ hasError: true })
    }
  }

  signUpSuccess = () => {
    return this.state.hasError ? 
    <h5>email unavailable</h5> :
    <div>Welcome {this.props.user.name}</div>
  }

  render() {
    return(
      <form className='sign-up' onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' onChange={this.handleChange}/>
        <label htmlFor='email'>E-Mail:</label>
        <input id= 'email' type='email' onChange={this.handleChange}/>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' onChange={this.handleChange}/>
        <button onClick={this.showSignUp}>Sign Up</button>
        {this.signUpSuccess}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);