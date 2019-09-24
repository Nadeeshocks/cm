import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { getGears, getNewArrivals, getStories } from './actions'
import { Container, Row, Col } from 'reactstrap';
import Search from '../../components/home/search'
import Catagory from '../../components/home/categories'
import NewArrivals from '../../components/home/newArrivals'
import Stories from '../../components/home/stories'
// import catagoryList from '../../components/catagoryList/index';

class Home extends Component {

  getGears = catagory => {
    this.props.getGears(catagory)
  }

  componentDidMount = () => {
    this.props.getNewArrivals();
    this.props.getStories();
  }

  render() {
    const { catagories, newArrivals,stories } = this.props;
 
    return (
      <div className="home">
        <div className="home-head">
          <Search catagories={catagories} />
        </div>
        <div className="home-body">
          <Container>
            <Catagory catagories={catagories} />
            <div className="clearfix mb-4"></div>
          </Container>

          <NewArrivals newArrivals={ newArrivals } />
          <Stories stories={ stories } />
          <div className="payments">
            <img src="/images/temp.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catagories: state.firestore.ordered.catagories,
    newArrivals: state.home.gear,
    stories : state.home.stories
  }
}
export default compose(
  firestoreConnect([
    { collection: 'catagories' }
  ]),
  connect(mapStateToProps, { getGears, getNewArrivals, getStories })
)(Home);