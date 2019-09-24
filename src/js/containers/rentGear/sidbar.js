

import React, { Component } from 'react';
import {
  ListGroup, ListGroupItem,
} from 'reactstrap';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { gearsByCategory } from './actions.js';
class Sidebar extends Component {
  constructor(props) {
    super(props);


    this.state = {
      activeIndex: 0,
      category_name: ""
    }
  }

  handleClick(index) {
    let activeIndex = this.state.activeIndex === index ? null : index;
    this.setState({
      activeIndex

    },
      () => {
        //   this.props.callback(this.state.category_name);
      }
    );
  }
  // oncategoryChange(id){
  //   this.props.gearsByCategory( id );
  // }
  render() {
    const { catagories } = this.props;

    //   const cat=this.props.match.params;
    //  console.log('params is',cat.name)

    return (
      <aside className="sidebar">
        <div className="sidebar-title">

          <Link to={'/rentgear/' + "all-cat"}  >
            All Categories
           </Link>
        </div>
        <div className="sidebar-wrapper">
          <ListGroup>
            {catagories && catagories.map((element, index) =>
              <ListGroupItem onClick={() => this.props.gearsByCategory(element.id)} value={element}
                key={index}>
                <div className={`${this.state.activeIndex === index && 'item-active'}`}>

                  <Link to={'/rentgear/' + element.id} key={element.id} >
                    {element.cat_name}
                  </Link>
                </div>
              </ListGroupItem>
            )}
          </ListGroup>
        </div>
      </aside>
    );
  }
}

const mapDispatchToProps = dispatch => {

  return {
    gearsByCategory: (cat) => dispatch(gearsByCategory(cat))
  }
}

export default connect(null, mapDispatchToProps)(Sidebar);
