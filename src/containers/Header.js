import React from 'react';
import {Link, NavLink, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import { logOutUser, toggleFilter } from '../actions';

export const Header = (props) => {
  return (
    props.user.name ?
      <div>
        <h4> Welcome {props.user.name} !</h4>
        <button className='log-out' onClick={props.logOutUser}> Log Out </button>
        <button 
          className='favorites' 
          onClick={props.toggleFilter}>
          {props.showAllMovies ? "Favorites" : "Show All" }
        </button>
      </div>
      :
      <div>
        <Link to='/login' component={SignIn}>Login</Link>
        <Link to='/signup' component={SignUp}>Sign Up</Link>
      </div>
  );
};



const mapStateToProps = (state) => ({
  user: state.user,
  showAllMovies: state.showAllMovies
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser()),
  toggleFilter: () => dispatch(toggleFilter())
}) 

Header.propTypes = {
  user: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));