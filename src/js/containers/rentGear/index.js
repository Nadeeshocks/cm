import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom'; 
import SideBar from './sidbar';
import {
  Container, Row, Col, Breadcrumb, Table, Form, ListGroup, ListGroupItem,
  BreadcrumbItem, Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';

class RentGear extends Component {
  render() {
    const { catagories} = this.props;
    console.log(catagories);
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
              <SideBar catagories={catagories} />
              </Col>
              <Col md="9">
                {/* <Main catagory={this.state.catagory}/> */}
              </Col>
            </Row>
          </Container>
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
)(RentGear);