import React from 'react';
import { Breadcrumb, BreadcrumbItem, Dropdown, Form, DropdownToggle, DropdownMenu,
    DropdownItem, Input, Label, Carousel, CarouselItem, CarouselControl,
    CarouselIndicators, CarouselCaption, InputGroup, InputGroupAddon } from 'reactstrap';
import CustomInput from '../customInput';

export default props => {
    return (
        <Form className="theme-form add-gear-address">
          <div className="theme-form-field">
            <CustomInput placeholder='City' type="text" name='City' value={props.pstate.City} onChange={props.onInputhandle}/>
          </div>
          <div className="theme-form-field">
            <CustomInput placeholder='Region' type="text" name='Region' value={props.pstate.Region} onChange={props.onInputhandle}/>
          </div>
          <div className="theme-form-field">
            <CustomInput placeholder='Address' type="text" name='Address' value={props.pstate.Address} onChange={props.onInputhandle}/>
          </div>
          <div className="theme-form-field">
            <CustomInput placeholder='Postal Code' type="text" name='PostalCode' value={props.pstate.PostalCode} onChange={props.onInputhandle}/>
          </div>
        </Form>
      )
}