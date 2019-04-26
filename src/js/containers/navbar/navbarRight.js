import React from 'react';
import SignInLinks from './signInLinks';
import SignOutLinks from './signOutLinks';
import { connect } from 'react-redux';

const NavbarRight = props => {
  console.log(props.auth.uid);
  const links = props.auth.uid ? <SignOutLinks/> : <SignInLinks /> ;
  return ( 
    <div className="theme-nav-right">
      {links}
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    auth :state.firebase.auth
  }
}
export default connect(mapStateToProps)(NavbarRight);
