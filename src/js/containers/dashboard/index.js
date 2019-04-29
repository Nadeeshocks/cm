import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    // Route Gaurding
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/login' />

    return (
      // projects && projects.map();
      // React, Redux & Firebase App Tutorial #20 - Project Details Data for Rent Gear.
      <h1>Dashboard</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth
  }
}
export default compose(
  firestoreConnect([
    { collection: 'catagories' }
  ]),
  connect(mapStateToProps)
)(Dashboard);