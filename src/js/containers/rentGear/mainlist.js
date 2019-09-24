
import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchgears } from './actions.js';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import CustomInput from '../../components/addGear/customInput';
import { Row, Col, Form, ListGroup, ListGroupItem, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';
import CardView from '../../components/rgCardView/index';
import ListView from '../../components/rgListView/index';
import TableView from '../../components/rgTableView/index';


class Main extends Component {

// constructor(){
//   // this.toggle = this.toggle.bind(this);
// }
  state = {
    search: '',
    location: '',
    activeTab: '1'
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }, () => {
      this.props.searchgears(this.state)
    })
  }

  // changeCategory(e) {
  //   this.setState({categoryName: e.target.textContent})
  // }


  // this.props.history.push('/searchreult');



  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      console.log('toggle is',tab)
      this.setState({
        activeTab: tab
      });
      
    }
  }

  render() {
    const { gears } = this.props;
    const gid = gears.id
    console.log(" id :   ",gid)
    console.log('these are gears in mainlist',gears);
    return (
      <div className="main-wrapper">
        <Row className="main_head">
          <Col md="9">
            <div className="search">
              <Form className="theme-form">
                <div className="search-input">
                  <input icon="fa-search" placeholder="Search" type="text" id="search" label="Search" onChange={this.handleChange}
                    value={this.state.search} />
                </div>
                <div className="location-input">
                  <input icon="fa-map-marker" placeholder="Location" type="text" id="location" label="Location"
                    onChange={this.handleChange}
                    value={this.state.location} />
                </div>
              </Form>
            </div>
          </Col>
          <Col md="3">
            <Nav tabs className="views">
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  <div className="card-view">
                    <i className="fa fa-th"></i>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  <div className="list-view">
                    <i className="fa fa-list"></i>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  <div className="table-view ">
                    <i className="fa fa-grip-lines"></i>
                    <i className="fa fa-grip-lines"></i>
                  </div>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <TabContent activeTab={this.state.activeTab}>
        
          <TabPane tabId="1">
            <Row>
                    {
                      Array.isArray(gears) && gears.map((doc, index) => {
                      const gear=doc.data();
                      console.log('oh yeah',gears.id)
                      return <CardView gear_detail={gear} pid={doc.id} key={index} id={doc.id}/>
                            })
                    }
              
             
             
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {


         
                  Array.isArray(gears) && gears.map((doc, index) => {
                  const gear=doc.data();
                
                  return <ListView gear_detail={gear}  pid={doc.id} key={index} />
                })
              }
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              {
               Array.isArray(gears)&& gears.map((doc, index) => {
                  const gear=doc.data();
                  return <TableView gear_detail={gear} pid={doc.id} key={index} />
                })
              }
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}


const mapStateToProps = state => {
  // console.log(searchgears);
  return {
   
  }
}


const mapDispatchToProps = dispatch => {
  
  return {
    searchgears: (searchd) => dispatch(searchgears(searchd))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
