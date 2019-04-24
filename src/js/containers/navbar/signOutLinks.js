import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignOutLinks = () => {

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
                  <i class="fas fa-angle-down" onClick={toggle}></i> :
                <i class="fas fa-angle-up" onClick={toggle}></i>  
              }
            </p>
          </div>
          {
            dropdownOpen ? 
              <ul className="dropDownMenu">
                <li>
                  <Link to="/dashboard">My Account</Link>
                </li>
                <li>Log Out</li>
              </ul> : ''
          }
          
        </div>
      </li>
    </ul>
  );
}
export default SignOutLinks;
