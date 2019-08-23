import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import AccountDetails from './accountdetails/accountdetails';
import Listing from './mylisting/listing'
import Rentals from './myRentals/rentals'
import { getUserDetails } from './action'
import Stats from './stats/index'

class Dashboard extends Component {
  state = {
    current_content: 1
  }
  render_NavBar() {
    return (<React.Fragment >
      <button className={`${this.state.current_content == 1 ? 'active' : ''}`} onClick={() => { this.setState({ current_content: 1 }) }}>DashBoard  </button>
      <button className={`${this.state.current_content == 2 ? 'active' : ''}`} onClick={() => { this.setState({ current_content: 2 }) }}>Account Details </button>
      <button className={`${this.state.current_content == 3 ? 'active' : ''}`} onClick={() => { this.setState({ current_content: 3 }) }}>My Listing</button>
      <button className={`${this.state.current_content == 4 ? 'active' : ''}`} onClick={() => { this.setState({ current_content: 4 }) }}>My Rentals</button>
    </React.Fragment>)
  }
  render_content = () => {
    const current_content = this.state.current_content;
    switch (current_content) {
      case 1:
        return <Stats />
        break;
      case 2:
        return <AccountDetails user = {this.props.user.users} />
        break;
      case 3:
        return <Listing />
        break;
      case 4:
        return <Rentals />
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    this.props.getUserDetails();
  }

  render() {
    // Route Gaurding
    const user = this.props.user.users;
    console.log("auth in render ", user)
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/login' />

    return (
      <div className="dashboard">
        <div className="dashboard-head">
          {user && <div className="user-info">
            <img src={user.image} />
            <div className="user-details">
              <h4> {user.fullName} </h4>
              <div className="user-contact">
                <div className="user-contact-email">
                  <span> Email : </span>
                  <p>{user.email}</p>
                </div>
                <div className="user-contact-phone">
                  <span> Phone : </span>
                  <p> {user.phoneNumber} </p>
                </div>

              </div>
            </div>
          </div>}
          <div className="dashboard-navbar">
            {this.render_NavBar()}
          </div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-content">
            {this.render_content()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    user: state.user
  }
}


export default compose(
  connect(mapStateToProps,
    { getUserDetails })
)(Dashboard);