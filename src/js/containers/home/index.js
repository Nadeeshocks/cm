import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CatagoryList from '../../components/catagoryList/index';
import FindTools from '../../components/home/findtools'
import { getGears } from './actions'
// import catagoryList from '../../components/catagoryList/index';

class Home extends Component {

  getGears = catagory => {
    this.props.getGears( catagory )
  }

  render() {
    const { catagories, filterd_gears } = this.props;
    // if( this.props.filterd_gears != null )
    //   console.log("index : " , this.props.filterd_gears.data())
    return (
      // projects && projects.map();
      // React, Redux & Firebase App Tutorial #20 - Project Details Data for Rent Gear.
      <div className="home">
        <div className="home-head">
          <FindTools catagories={catagories} getGears={this.getGears} gears={filterd_gears}/>
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
    catagories: state.firestore.ordered.catagories,
    filterd_gears : state.home.gear
  }
}
export default compose(
  firestoreConnect([
    { collection: 'catagories' }
  ]),
  connect(mapStateToProps, { getGears })
)(Home);