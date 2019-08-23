import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../auth/action';
import { firestoreConnect} from 'react-redux-firebase';
import { compose} from 'redux';

const SignOutLinks = ( props ) => {

  const [dropdownOpen, setdropdownOpen] = useState(false);
  const toggle = () => setdropdownOpen(!dropdownOpen);
  const { profile } = props;
  const fullName = profile.fullName;
  let firstName = '';
  if(fullName != null)
    firstName = fullName.split(" ");


  console.log("navbar :", props);
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
          <div className="account">{console.log(profile.image)}
            <img src={profile.image} alt='avatar' className="avatar" />
           
            
            <p>Hello {firstName[0]} &nbsp; 
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
                <li onClick= {props.signOut}>
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
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    signOut : ()=> dispatch(signOut())
  }
} 
export default connect(mapStateToProps , mapDispatchToProps)( SignOutLinks );