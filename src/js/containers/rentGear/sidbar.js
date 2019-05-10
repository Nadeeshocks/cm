import React, { Component } from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {
  Container, Row, Col, Breadcrumb, Table, Form, ListGroup, ListGroupItem,
  BreadcrumbItem, Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';
import { Link } from 'react-router-dom'; 

class SideBar extends Component {

  render() {
      const { catagories } = this.props;
    return (
        <aside className="sidebar">
            <div className="sidebar-title">
            All Categories
            </div>
            <div className="sidebar-wrapper">
            <ListGroup>
                {catagories && catagories.map((cat , index) =>
                <ListGroupItem >
                    <div>
                    {cat.cat_name}
                    </div>
                </ListGroupItem>
                )}
            </ListGroup>
            </div>
        </aside>
        );
    }
    }


export default (SideBar);