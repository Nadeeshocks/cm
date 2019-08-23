import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import {
  Container, Row, Col, Breadcrumb, Table,
  BreadcrumbItem, Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ListItem from '../../components/listGear/listItem'

import { getGears, delGear } from './action'


class ListGear extends Component {

  componentDidMount() {
    this.props.GetGears();
  }
  componentDidUpdate() {
    //do something about this 
    this.props.GetGears();
  }

  render() {
    return (
      // <div> 
      //     <h1>List Gear</h1>
      //     <Button href='/addgear' >Add Gear</Button>
      // </div> 
      <div className="list-gear">
        <div className="list-gear-head">
          <Container>
            <Row>
              <Col>
                <Breadcrumb>
                  <BreadcrumbItem>Home Page</BreadcrumbItem>
                  <BreadcrumbItem active>List Gear</BreadcrumbItem>
                </Breadcrumb>

                <div className="d-flex align-items-center">
                  <h2 className="theme-page-title">List Gear</h2>
                  <button className="theme-btn theme-btn-primary theme-btn-link ml-auto">
                    <Link to="/addgear"><span className="fa fa-plus"></span>&nbsp; Add Gear</Link>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="list-gear-body">
          <Container>
            <div className="wrraper">
              <div className="table-responsive">
                <Table className="listing-data-slice" >
                  <thead>
                    <tr className="text-muted theme-text-bold">
                      <th></th>
                      <th>Name & Category</th>
                      <th>Status</th>
                      <th>Price Per day</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <ListItem gears={this.props.gearCRUD} onDelete={id => this.props.OnDel(id)} />
                  </tbody>
                </Table>
                {/* <Pagination aria-label="Page navigation example">
                      <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink
                          onClick={e => this.handleClick(e, currentPage - 1)}
                          previous
                          href="#"
                        />
                      </PaginationItem>
    
                      {[...Array(this.pagesCount)].map((page, i) =>
                        <PaginationItem active={i === currentPage} key={i}>
                          <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      )}
    
                      <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                        <PaginationLink
                          onClick={e => this.handleClick(e, currentPage + 1)}
                          next
                          href="#"
                        />
                      </PaginationItem>
                    </Pagination> */}
              </div>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    GetGears: () => {
      dispatch(getGears())
    },
    OnDel: id => {
      dispatch(delGear(id))
    }
  }
}

const mapStateToProps = state => {
  return {
    gearCRUD: state.gearCRUD
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps)

)(ListGear)