import React from 'react';
import NavbarRight from './navbarRight';
import NavbarLeft from './navbarLeft';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ThemeNavbar extends React.Component {
  render(){
    return (
      <div className="theme-navbar">
        <NavbarLeft/>
        <div className="logo">
          <Link to="/">
            <img  src='/images/logo.png' alt='logo' />
          </Link>
        </div>
        <NavbarRight/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return{ }
}
const mapDispatchToProps = state => {
  return{
        
  }
}

export default connect(mapStateToProps , )(ThemeNavbar);
