import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import Sidebar from './sidbar';
import MainList from './mainlist';
import { gearsByCategory } from './actions.js';
import {
  Container, Row, Col, Breadcrumb, Table, Form, ListGroup, ListGroupItem,
  BreadcrumbItem, Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';

class RentGear extends Component {
  state = {
    activeIndex: 0,
    category_name: "",

  }

  componentDidMount() {
    // console.log('previius props',prevProps);
    // console.log('previius state',prevState);

    const cat = this.props.match.params;
    if (cat.id !== null) {
      this.props.gearsByCategory(cat.id);
    }


  }

  // testdd(){
  //  const cat= this.props.match.params ;
  //   console.log('params is',cat.id)
  //   this.props.gearsByCategory(cat.id)
  // }
  render() {


    const { catagories, gear } = this.props;

    console.log(gear);
    // console.log(mylisintgs);
    // console.log('these are gears in index',gears);


    return (
      <div className="rent-gear">
        <div className="rent-gear-head">
          <Container>
            <Row>
              <Col>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/">Home </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Rent Gear</BreadcrumbItem>
                </Breadcrumb>
                <div className="d-flex align-items-center">
                  <h2 className="theme-page-title">Rent Gear</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="rent-gear-body">
          <Container>
            <Row>
              <Col md="3">
                <Sidebar catagories={catagories} />

              </Col>
              <Col md="9">
                <MainList gears={gear} catagories={catagories} />

              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}




const mapStateToProps = state => {

  return {
    catagories: state.firestore.ordered.catagories,
    gear: state.gearscat.message

  }

}

const mapDispatchToProps = dispatch => {

  return {
    gearsByCategory: (cat) => dispatch(gearsByCategory(cat))
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {


    // const category=props.match.params;
    // console.log(category.name);
    return [
      { collection: 'catagories' }
    ]

  }
  )
)(RentGear);