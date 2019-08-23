import React from 'react';
import { Breadcrumb, BreadcrumbItem, Dropdown, Form, DropdownToggle, DropdownMenu,
  DropdownItem, Input, Label, Carousel, CarouselItem, CarouselControl,
  CarouselIndicators, CarouselCaption, InputGroup, InputGroupAddon } from 'reactstrap';
import Chips, { Chip } from 'react-chips';
import CustomInput from '../customInput';
import ConditionRadioButton from './conditionRadioButton'
import Checkbox from './checkbox'
import Categories from './dropDown'
import Accessories from './accessories'

export default props => {
        return( 
        <Form className="theme-form add-gear-info">
        <div className="flex-row">
          <div className="info-left-container">    
          <div className="theme-form-field">
            <Categories pstate={props.pstate} toggle={props.toggle} cats={props.cats} onChangeCat={ cat =>props.onChangeCat(cat) }/>
            </div>
            <div className="theme-form-field">
              <CustomInput value={props.pstate.Brand} name='Brand' required="required" onChange={props.onInputhandle} placeholder='Brand' type="text"/>
            </div>
            <div className="theme-form-field">
              <CustomInput value={props.pstate.Model} name='Model' placeholder='Model'  onChange={props.onInputhandle} type="text"/>
            </div>
            <div className="theme-form-field">
              <CustomInput value={props.pstate.Description} name='Description' placeholder='Description' onChange={props.onInputhandle} type="text"/>
            </div>
          </div>
          <div className="info-right-container">
            
            <ConditionRadioButton onInputhandle={props.onInputhandle}  type={props.type}/>
            <Checkbox isKit={props.isKit} onInputhandle={props.onInputhandle}/> 
            <Accessories pstate={props.pstate} onHandleChips={props.onHandleChips}/>
            
          </div>
        </div>
      </Form> 
        )

    }
