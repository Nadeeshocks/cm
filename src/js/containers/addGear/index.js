import React, { Component } from 'react';

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'
import {
  Breadcrumb, BreadcrumbItem, Dropdown, Form, DropdownToggle, DropdownMenu,
  DropdownItem, Input, Label, Carousel, CarouselItem, CarouselControl,
  CarouselIndicators, CarouselCaption, InputGroup, InputGroupAddon
} from 'reactstrap';


// component imports
import addgear from './action';
import InfoFrom from '../../components/addGear/info';
import AddressFrom from '../../components/addGear/address'
import PhotoFrom from '../../components/addGear/photos'
import PriceFrom from '../../components/addGear/price'

 class AddGear extends Component {
  constructor() {
    super();
    this.progressSteps = ["Info", "Photo", "Address", "Price"];
    this.state = {
          progressStep: 0,
          dropdownOpen: false,
          isGearAdded: false,
          categoryName: 'Category',
          accessories: [],
          categories : [],
          // numberOfUserImage: [],
          ReplacementAmount :'',
          PricePerDay :'',
          pictures: [],
          url:[],
          ReplacementAmount : '',
          PricePerDay : '',
          Brand : '', 
          Model : '', 
          Description : '', 
          type :  '',
          City : '', 
          Region : '', 
          Address : '', 
          PostalCode :''
         
     }
    this.toggle = this.toggle.bind(this);
    // this.addImage = this.addImage.bind(this);
    // this.onInputHandle = this.onInputHandle.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  // changeCategory(e) {
  //   this.setState({categoryName: e.target.textContent})
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.CreateGear(this.state);
    this.props.history.push('/');
  }
  renderProgress() {
    const { progressStep } = this.state;
    let isDone = true;
    return this.progressSteps.map((i, index) => (
      <div key={i} className={isDone ? 'add-gear-progress-item active' : 'add-gear-progress-item'}>
        {
          function () {
            if (index === progressStep) {
              isDone = false;
              return <i className='far fa-dot-circle' aria-hidden="true"></i>
            } else if (isDone) {
              return <i className='fa fa-check-circle' aria-hidden="true"></i>
            } else {
              return <i className='far fa-circle' aria-hidden="true"></i>
            }
          }()
        }

        <div className="theme-text-small">{i}</div>
      </div>
    ));
  }

  addImage(e){
    console.log("photo upload logic", e);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  renderContent() {
    const { progressStep } = this.state;
    switch (progressStep) {
      case 0:
        return <InfoFrom onInputhandle={this.onInputHandle} toggle={this.toggle} type={this.state.type} isKit={this.state.isKit} pstate={this.state}/>
        break;
      case 1:
        return <PhotoFrom photos={this.state.numberOfUserImage} addPhoto={this.addImage}/>
        break
      case 2:
        return <AddressFrom pstate={this.state} onInputhandle={this.onInputHandle}/>
        break
      case 3:
        return <PriceFrom pstate={this.state} onInputhandle={this.onInputHandle}/>
        break

    }
  }

  nextStep() {
    console.log(this.state);
    if(this.validate()) {
      this.setState({
        progressStep: ++this.state.progressStep
      });
    }
  }
  previousStep()
  {
    this.setState({
      progressStep: --this.state.progressStep
    });
  }

  validate() {
    switch (this.state.progressStep) {
      case 0:
        const { categoryName, Brand, Model, Description, type } = this.state;
        if (categoryName && Brand && Model && Description && type) {
          return true;
        }
        break;
      case 1:
         const 
          return true;
          break
        case 2:
          return true;
          break
        case 3:
          return true;
          break

    }
  
    // handleError("Please provide the required details")
    return false;
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (

      <div className="add-gear">
        <div className="add-gear-head">
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem active>Add Gear</BreadcrumbItem>
          </Breadcrumb>
          <h3>Add Gear</h3>
        </div>
        <div className="add-gear-body">
          <div className="add-gear-progress">
            {
              this.renderProgress()
            }
          </div>
          {
            this.renderContent()
          }
        </div>
        { this.state.progressStep<3 ? (
            <div>
              <div className="flex-row buttons-container">
              {
                this.state.progressStep !== 0 ?
                <button className="theme-btn theme-btn-secondery" onClick={this.previousStep.bind(this)}><span className="fa fa-angle-left" /> Back</button> :
                null
              }
                <button className="theme-btn theme-btn-primary" onClick={this.nextStep.bind(this)}>Continue <span className="fa fa-angle-right" /></button>
              </div>
            </div>
        ) : null }
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    CreateGear: (gear) => dispatch(addgear(gear))
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGear)
