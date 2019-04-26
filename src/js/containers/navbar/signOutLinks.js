import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../auth/action';

const SignOutLinks = ( props ) => {

  const [dropdownOpen, setdropdownOpen] = useState(false);
  const toggle = () => setdropdownOpen(!dropdownOpen);

  return (
    <ul className="right-menu">
      <li>
        <Link to="/listgear" >List Gear</Link>
      </li>
      <li>
        <Link to="/rentgear" >Rent Gear</Link>
      </li>
      <li className={`right ${dropdownOpen ? 'alpha' : ''}`}>
        <div className="drop-menu">
          <div className="account">
            <img src={'/images/avatar.png'} alt='avatar' className="avatar" />
            <p>Hello Nadia &nbsp; 
              {
                dropdownOpen ? 
                  <i className="fas fa-angle-down" onClick={toggle}></i> :
                <i className="fas fa-angle-up" onClick={toggle}></i>  
              }
            </p>
          </div>
          {
            dropdownOpen ? 
              <ul className="dropDownMenu">
                <li>
                  <Link to="/dashboard">My Account</Link>
                </li>
                <li onClick= { props.signOut}>
                  <a>Log Out</a>
                </li>
              </ul> : ''
          }
          
        </div>
      </li>
    </ul>
  );
}

const mapStateToProps = state =>{
  return{
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    signOut : ()=> dispatch(signOut)
  }
} 
export default connect(mapStateToProps , mapDispatchToProps)( SignOutLinks );
