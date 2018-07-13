import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

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
      
  

    )
  }





const mapStateToProps = (state) => ({
  user: this.state.userName
})

export default connect(mapStateToProps)(Header)