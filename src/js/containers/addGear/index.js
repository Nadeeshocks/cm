import React, { Component } from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import {
  Breadcrumb, BreadcrumbItem, Dropdown, Form, DropdownToggle, DropdownMenu,
  DropdownItem, Input, Label, Carousel, CarouselItem, CarouselControl,
  CarouselIndicators, CarouselCaption, InputGroup, InputGroupAddon
} from 'reactstrap';
import InfoFrom from '../../components/addGear/info';
import AddressFrom from '../../components/addGear/address'
import PhotoFrom from '../../components/addGear/photos'
import Review from '../../components/addGear/review'
import {addgear} from './action'
import RenderGearAdded from '../../components/addGear/gearAdded'


class AddGear extends Component {
  constructor() {
    super();
    this.progressSteps = ["Info", "Photo", "Address", "Price"];
    this.state = {
          progressStep: 3,
          dropdownOpen: false,
          isGearAdded: false,
          categoryName : 'Categories',
          categoryId : '',
          accessories : [],
          categories : [],
          url : [],
          Images : [],
          isKit : '',
          ReplacementAmount : 0,
          PricePerDay : 0,
          Brand : '', 
          Model : '', 
          Description : '', 
          type :  '',
          City : '', 
          Region : '', 
          Address : '', 
          PostalCode : 0
    }
    this.renderGearAdded =this.renderGearAdded.bind(this);
    this.handlechips = this.handlechips.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.toggle = this.toggle.bind(this);
    this.addImage = this.addImage.bind(this);
    this.onInputHandle = this.onInputHandle.bind(this);
  }

  // const { auth } =this.props;
  // console.log("auth : ",auth);
  // if(!auth.uid) return <Redirect to='/login' />

  onInputHandle(e)
  {
    const name = e.target.name;
    const value = e.target.value
    console.log(" data " , typeof value )
    if(e.target.type == 'checkbox')
    {

      if(this.state.isKit)
      {
        this.setState({
          [name]: 0
        });
      }
      else{
        this.setState({
          [name]: 1
        });
      }
    }
    else{
      this.setState({
      [name]: value
      });
    } 
  }
  handlechips(chips){
    this.setState(
      { accessories : chips }
    );
    
  }
  changeCategory(e) {
    this.setState(
      {categoryName: e.cat_name, categoryId: e.id }
      )
  }

  renderProgress() {
    const { progressStep } = this.state;
    let isDone = true;
    return this.progressSteps.map((i, index) => (
      // <div key={i} className={isDone ? 'add-gear-progress-item active' : 'add-gear-progress-item'}>
      <div key={i} className={`add-gear-progress-item ${isDone ? 'active' : ''}`}>
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
    let reader = new FileReader();
    let file = e.target.files[0];
    let { Images,url } =  this.state;

    reader.onloadend = () =>{
     Images.push(file);
     url.push(reader.result);
      this.setState({
        Images,
        url
      });
    };

    reader.readAsDataURL(file);
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
        return <InfoFrom onInputhandle={this.onInputHandle} onHandleChips={this.handlechips} onChangeCat={ cat => this.changeCategory(cat ) } toggle={this.toggle} type={this.state.type} isKit={this.state.isKit} pstate={this.state} cats={this.props.catagories}/>
        break;
      case 1:
        return <PhotoFrom pstate={this.state} addPhoto={this.addImage}/>
        break
      case 2:
        return <AddressFrom pstate={this.state} onInputhandle={this.onInputHandle}/>
        break
      case 3:
        return <Review pstate={this.state} onInputhandle={this.onInputHandle} previousStep={this.previousStep} addGear={this.handleSubmit}/>
        break
    }
  }

  nextStep() {
    
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
        const { categoryName, Brand, Model, Description, type,accessories,isKit } = this.state;
        if(categoryName != 'Categories')
        if ( Brand && Model && Description && type && accessories && isKit) {
          return true;
        }
        break;
      case 1:
        const {url} = this.state;
        if(url.length>0)
        {
          return true;
        }
         break
      case 2:
        const { City, Region, Address, PostalCode} = this.state;
        if( City && Region && Address && PostalCode )
        {
          return true;
        }
        break
      case 3:
        const { ReplacementAmount, PricePerDay } = this.state;
        if(ReplacementAmount && PricePerDay)
        {
          return true;
        }
        // else{
        //   console.log("price add a lai");
        // }
        break

    }
  
    // handleError("Please provide the required details")
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("data :  ", this.state)
    if(this.validate())
    {
      this.props.CreateGear(this.state);
    }  
  }

  renderGearAdded()
  {
    return <RenderGearAdded pstate={this.state} />
  }

  render() {
  
    if(this.props.addgearstatus)
    {
      return this.renderGearAdded();
    }
    else{
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
                <button className="theme-btn theme-btn-secondery" onClick={this.previousStep}><span className="fa fa-angle-left" /> Back</button> :
                null
              }
                <button className="theme-btn theme-btn-primary" onClick={this.nextStep}>Continue <span className="fa fa-angle-right" /></button>
              </div>
            </div>
        ) : null }
      </div>

    )
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    CreateGear: (gear) => dispatch(addgear(gear))
  }
  }
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    catagories: state.firestore.ordered.catagories,
    addgearstatus: state.gearStatus.status
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      { collection: 'catagories' } 
    ]
  }
  )
)(AddGear);
