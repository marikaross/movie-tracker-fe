import React from 'react';
import {Link, NavLink, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

export const Header = (props) => {
  return (
      <div>
        <Link to='/login' component={SignIn}>Login</Link>
        <Link to='/signup' component={SignUp}>Sign Up</Link>
      </div>
  );
};

const mapStateToProps = () => ({
  user: this.state.userName
});

Header.propTypes = {
  userName: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(Header));