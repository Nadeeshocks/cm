import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Dropdown, Form, DropdownToggle, DropdownMenu,
  DropdownItem, Input, Label, Carousel, CarouselItem, CarouselControl,
  CarouselIndicators, CarouselCaption, InputGroup, InputGroupAddon } from 'reactstrap';
import Chips, { Chip } from 'react-chips';
import CustomInput from './customInput';

export default props => {
     
        return( 
        <Form className="theme-form add-gear-info">
        <div className="flex-row">
          <div>    
            <Dropdown className="theme-form-field" isOpen={props.pstate.dropdownOpen} toggle={props.toggle}>
              <DropdownToggle caret>
                { props.pstate.categoryName }
              </DropdownToggle>
              <DropdownMenu right>
                {
                  props.pstate.categories.map((ele, index)=>{
                    return <DropdownItem key={index} onClick={props.changeCategory}>{ele.categoryName}</DropdownItem>
                  })
                }
              </DropdownMenu>
            </Dropdown>
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
            <div className="type-tabs">
              {console.log("here" ,props.type) }
              <input name="type" id="new" type="radio" value="new" onChange={props.onInputhandle}/>
              <label className={props.type === "new" ? 'active' : ''} htmlFor="new">New</label>
              <input name="type" id="like-new" type="radio" value="like_new" onChange={props.onInputhandle}/>
              <label className={props.type === "like_new" ? 'active' : ''} htmlFor="like-new">Like New</label>
              <input name="type" id="slightly-worn" type="radio" value="slightly_worn" onChange={props.onInputhandle}/>
              <label className={props.type === "slightly_worn" ? 'active' : ''} htmlFor="slightly-worn">Slightly Worn</label>
              <input name="type" id="worn" type="radio" value="worn" onChange={props.onInputhandle}/>
              <label className={props.type === "worn" ? 'active' : ''} htmlFor="worn">Worn</label>
            </div>
            <div className="theme-form-field">
              <Input type="checkbox" id="is-kit" checked={props.isKit} onChange={props.onInputhandle} name="isKit"/>
              <Label for="is-kit">Is this a Kit?</Label>
            </div> 
            <div>
              <div className="theme-text-small">Accessories</div>
              <div className="theme-form-field">
                <Chips
                  onChange={props.onInputhandle}
                  fromSuggestionsOnly={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Form> 
        )

    }
