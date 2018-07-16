import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = (props) => {
  return (
    props.userName ? 
      <div className='log-out'>
        <h2>Welcome {props.userName}! </h2>
        <Link to='/favorites'>Show Favorites</Link> 
        <Link to='/'>Log Out</Link>
      </div>
      : 
      <div className='sign-in-sign-up'>
        <NavLink to='/login'>Sign In</NavLink>
        <NavLink to='/sign-up'>Sign Up</NavLink>
      </div>
  );
};

const mapStateToProps = () => ({
  user: this.state.userName
});

Header.propTypes = {
  userName: PropTypes.object
};

export default connect(mapStateToProps)(Header);