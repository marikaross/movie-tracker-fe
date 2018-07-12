import React, { Component } from 'react';

import { connect } from 'react-redux';

export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state={
      email: '',
      password: '',
      name: ''
    }
  }

  handleChange = (input) => {
    const { type, value } = input.target
    this.setState({
      [type]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('hands')
    const url = `https://localhost3000/api/users`;
    const data = {
      email: 'tman2272@aol.com',
      // name:'taylor',
      password:'password'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='email' onChange={this.handleChange}/>
        <input type='name' onChange={this.handleChange}/>
        <input type='password' onChange={this.handleChange}/>
        <button></button>
      </form>
    );
  }
}
