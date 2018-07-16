import React from 'react';
import {Link, NavLink, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import { logOutUser } from '../actions';

export const Header = (props) => {
  console.log(props)
  return (
    props.user.name ?
      <div>
        <button className='log-out' onClick={props.logOutUser}> Log Out </button>
      </div>
      :
      <div>
        <Link to='/login' component={SignIn}>Login</Link>
        <Link to='/signup' component={SignUp}>Sign Up</Link>
      </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser())
}) 

Header.propTypes = {
  user: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));