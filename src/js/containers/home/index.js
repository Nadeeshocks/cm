import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import {compose } from 'redux';

class Home extends Component {
  render(){
    return(
      // projects && projects.map();
      // React, Redux & Firebase App Tutorial #20 - Project Details Data for Rent Gear.
      
      <h1>Home</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default compose(
  firestoreConnect([
    { collection : 'catagories'}
  ]),
  connect(mapStateToProps)
)(Home);