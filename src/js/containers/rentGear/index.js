import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class RentGear extends Component {
  render() {
    
    return (
      <div className="rent-gear">
        <div className="rent-gear-head">
          <h1>Rent Gear</h1>
        </div>
        <div className="rent-gear-body">
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}
export default compose(
  firestoreConnect([
  ]),
  connect(mapStateToProps)
)(RentGear);