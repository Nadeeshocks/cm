import React from 'react'
import { Breadcrumb, BreadcrumbItem, Dropdown, Form, DropdownToggle, DropdownMenu,
    DropdownItem, Input, Label, Carousel, CarouselItem, CarouselControl,
    CarouselIndicators, CarouselCaption, InputGroup, InputGroupAddon } from 'reactstrap';

export default props => {
    return (
        <Dropdown  isOpen={props.pstate.dropdownOpen} toggle={props.toggle}>
            <DropdownToggle caret className="form-control">
                { props.pstate.categoryName }
            </DropdownToggle>
        <DropdownMenu right>
        {
            props.cats && props.cats.map((ele, index)=>{
                return <DropdownItem key={index} onClick={ ()=>{ props.onChangeCat(ele);  }} > {ele.cat_name} </DropdownItem>
            })
        }
        </DropdownMenu>
        </Dropdown>
    )
   
}