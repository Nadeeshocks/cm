import React from 'react';
import CustomInput from './customInput';
import { Breadcrumb, BreadcrumbItem, Dropdown, Form, DropdownToggle, DropdownMenu,
    DropdownItem, Input, Label, Carousel, CarouselItem, CarouselControl,
    CarouselIndicators, CarouselCaption, InputGroup, InputGroupAddon } from 'reactstrap';
export default props => {

    return <div className="add-gear-price">
      <div>
        {/* <div className="theme-text-small text-gray">{categoryName}</div> */}
        <h4>{ props.pstate.Brand + ' ' + props.pstate.Model }</h4>

        <div className="price-type-tabs">
          <input id="new" type="radio" value="new"/>
          <label className={props.pstate.type === "new" ? 'active' : ''} htmlFor="new">New</label>
          <input id="like-new" type="radio" value="like_new"/>
          <label className={props.pstate.type === "like_new" ? 'active' : ''} htmlFor="like-new">Like New</label>
          <input id="slightly-worn" type="radio" value="slightly_worn"/>
          <label className={props.pstate.type === "slightly_worn" ? 'active' : ''} htmlFor="slightly-worn">Slightly Worn</label>
          <input id="worn" type="radio" value="worn"/>
          <label className={props.pstate.type === "worn" ? 'active' : ''} htmlFor="worn">Worn</label>
        </div>

        <div className="gear-carousel">
          {/* <CustomCarousel items={ props.pstate.numberOfUserImage } /> */}
        </div>
      </div>
      <div className="gear-middle-container">
        <div className="flex-row gear-accessories-address">
          <div>
            <div className="theme-text-small text-gray">Accessories</div>
            {
            //   mappedAccessories
            }
          </div>
          <div>
            <div className="theme-text-small text-gray">Address</div>
            <div className="">{props.pstate.Address}</div>
            <div className="">{props.pstate.City}</div>
          </div>
        </div>
        <div>
          <div className="theme-text-small text-gray">Description</div>
          <p>
            { props.pstate.Description }
          </p>
        </div>
      </div>
      <div className="gear-right-container">
        <div>Replacement Value</div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <CustomInput placeholder='Amount' type="text" name="ReplacementAmount" value={props.pstate.ReplacementAmount} onChange={props.onInputhandle}/>
        </InputGroup>
        <div>Price per day</div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <CustomInput placeholder='Amount' type="text" name="PricePerDay" value={props.pstate.PricePerDay} onChange={props.onInputhandle}/>
        </InputGroup>

        {/* <div className="buttons-container">
          <button className="theme-btn theme-btn-secondery" onClick={this.previousStep.bind(this)}><span className="fa fa-angle-left" /></button>
          <button className="theme-btn theme-btn-primary" onClick={this.addGearDetails.bind(this)} >Submit <span className="fa fa-angle-right" /></button>
        </div> */}
      </div>
    </div>
}

 