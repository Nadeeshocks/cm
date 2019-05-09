import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CatagoryList from '../../components/catagoryList/index';

class Home extends Component {
  render() {
    const { catagories } = this.props;
    return (
      // projects && projects.map();
      // React, Redux & Firebase App Tutorial #20 - Project Details Data for Rent Gear.
      <div className="home">
        <div className="home-head">
          <h1>Home</h1>
        </div>
        <div className="home-body">
          <CatagoryList catagories={catagories} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catagories: state.firestore.ordered.catagories
  }
}
export default compose(
  firestoreConnect([
    { collection: 'catagories' }
  ]),
  connect(mapStateToProps)
)(Home);