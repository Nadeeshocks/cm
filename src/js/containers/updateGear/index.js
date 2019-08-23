import React, { Component } from "react";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import CustomInput from '../../components/customInput';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import {
    Breadcrumb, BreadcrumbItem, Form
  } from 'reactstrap';
import Price from '../../components/addGear/price'
import RadioButtons from '../../components/addGear/conditionRadioButton'
import Categories from '../../components/addGear/dropDown'
import CheckBox from '../../components/addGear/checkbox'
import Accessories from '../../components/addGear/accessories'
import Photo from '../../components/addGear/photos'
import Address from '../../components/addGear/address'
import { getGear, updateGear, getCatagories } from './action'

class UpdateGear extends Component{

    constructor(){
        super();
        this.state = {
          updateGear : false,
          dropdownOpen: false,
          cats: [],
          gearId : '',
          categories : [],
          categoryName : 'Categories',
          categoryId : '',
          accessories : [],
          url : [],
          isKit : '',
          ReplacementAmount : '',
          PricePerDay : '',
          Brand : '', 
          Model : '', 
          Description : '', 
          type :  null,
          City : '', 
          Region : '', 
          Address : '', 
          PostalCode :''
        }
    }
    componentDidMount = () => {
        this.props.getGear(this.props.match.params.id);    
        this.props.getCatagories();
    }

    setPropsToLocalState = gear => {
        if( this.state.type == null)
        {
            this.setState( {  categoryName : gear.categoryName,
                categoryId : gear.categoryId,
                accessories : gear.accessories,
                url : gear.url,
                gearId : this.props.match.params.id,
                isKit : gear.isKit,
                ReplacementAmount : gear.ReplacementAmount,
                PricePerDay : gear.PricePerDay,
                Brand : gear.Brand,
                Model : gear.Model,
                Description : gear.Description,
                type : gear.type,
                City : gear.City,
                Region : gear.Region,
                Address : gear.Address,
                PostalCode : gear.PostalCode
            } )
        }
    }

    componentDidUpdate = () => {

        if(this.props.gear){
            if(this.props.gear == 1 && this.state.updateGear == false)
                this.setState({updateGear : true});
            const gear = this.props.gear;
            this.setPropsToLocalState( gear )
        }         
    }

    onInputhandle = (e) => {
        const name = e.target.name;
        const value = e.target.value
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

    handlechips = (chips) => {
        this.setState(
          { accessories : chips }
        );
        
      }
    changeCategory = (e) => {
        this.setState(
          {categoryName: e.cat_name, categoryId: e.id }
          )
    }

    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    changeCategory(e) {
        this.setState(
          {categoryName: e.cat_name, categoryId: e.id }
          )
      }

    addImage = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        let { Images,url } =  this.state;
    
        reader.onloadend = () =>{
        //  Images.push(file);
         url.push(reader.result);
          this.setState({
            // Images,
            url
          });
        };
    
        reader.readAsDataURL(file);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validate())
        {
          this.props.updateGear(this.state);
          
        }  
      }

    validate() {
        const {  Brand, Model, Description, type, accessories, isKit, url ,City, Region, Address, PostalCode ,ReplacementAmount, PricePerDay } = this.state;
        if ( Brand && Model && Description && type && accessories && isKit && City && Region && Address && PostalCode && ReplacementAmount && PricePerDay) {
            if( url.length>0 ){
                return true;
            } 
        }
        return false;
    }

    render()
    {
        console.log("props", this.props);
        if( this.state.updateGear == true )
        {   
            return <h1>Updated Bro</h1>
        }
        else{
        
            return(
                <div className="update-gear">
                    <div className="update-gear-head">
                        <Breadcrumb>
                            <BreadcrumbItem>Home Page</BreadcrumbItem>
                            <BreadcrumbItem>List Gear</BreadcrumbItem>
                            <BreadcrumbItem active>Edit Gear</BreadcrumbItem>
                        </Breadcrumb>
                        <h3>Edit Gear</h3>
                    </div>
                    {/* <div className="update-gear-body"> */}
                        <Form className="update-gear-body theme-form">
                        <div className="gear-left-container">
                            <div className="flex-row">
                                <div className="theme-form-field">
                                    <Categories pstate={this.state} toggle={this.toggle} cats={this.props.catagories} onChangeCat={cat => this.changeCategory( cat )}/>
                                </div>
                                <div className="theme-form-field">
                                    <CustomInput value={this.state.Brand} name='Brand' required="required" onChange={this.onInputhandle} placeholder='Brand' type="text"/>
                                </div>
                                <div className="theme-form-field">
                                    <CustomInput value={this.state.Model} name='Model' placeholder='Model'  onChange={this.onInputhandle} type="text"/>
                                </div>
                            </div>
                      
                                <textarea value={this.state.Description} onChange={this.onInputhandle} name="Description" ></textarea>
                                {/* <CustomInput value={"df"} name='Description' placeholder='Description' onChange={()=>{}} type="text"/> */}
                    
                            <div className="flex-row">
                                <RadioButtons onInputhandle={ this.onInputhandle }  type={this.state.type}/>
                                <CheckBox isKit={this.state.isKit} onInputhandle={ this.onInputhandle } />
                            </div> 
                            <Accessories pstate={this.state} onHandleChips={ (chip) => { this.handlechips(chip) } } />  
                            <Photo pstate={ this.state } addPhoto={ this.addImage } />
                            <Address pstate={this.state} onInputhandle={ this.onInputhandle }/>
                        </div>
                        <div className="gear-right-container">
                            <Price pstate={this.state} addGear={ this.handleSubmit } onInputhandle={ this.onInputhandle } previousStep={() => {}}/>
                        </div>
                        </Form>
                    {/* </div> */}
    
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        catagories : state.catagories,
        gear : state.updateGear
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGear : id => dispatch(getGear(id)),
        updateGear : gear => dispatch(updateGear(gear)),
        getCatagories : () => dispatch(getCatagories())
    }   
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UpdateGear)