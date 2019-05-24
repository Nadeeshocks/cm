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
    state = {
        activeIndex: 0,
        category_name: ""
    }
    handleClick(index, name) {
        let activeIndex = this.state.activeIndex === index ? null : index;
        this.setState({
            activeIndex,
            category_name: name
        });
    }
    render() {
        const { catagories } = this.props;
        return (
            <aside className="sidebar">
                <h6 className="sidebar-title">
                    CATEGORIES
                </h6>
                <div className="sidebar-wrapper">
                    <ListGroup>
                        {catagories && catagories.map((cat, index) =>
                            <ListGroupItem
                                onClick={this.handleClick.bind(this, index, cat.cat_name)}
                                value={cat.cat_name}
                                key={index}
                            >
                                <div className={`${this.state.activeIndex === index && 'item-active'}`}>
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