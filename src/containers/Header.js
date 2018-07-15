import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Header = (props) => {
  return (
    props.userName ? 
      <div>
        <h2>Welcome {props.userName}! </h2>
        <Link to='/favorites'>Show Favorites</Link> 
        <Link to='/'>Log Out</Link>
      </div>
      : 
      <div>
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
