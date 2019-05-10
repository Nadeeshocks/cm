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