import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class NavbarRight extends Component {
    constructor(props) {
        super(props);


        this.state={
            dropdownToggle : false
        };
    }
    toggle(){
        this.setState({
            dropdownToggle: !this.state.dropdownToggle
        })
    }

    render() {
        const { location, isAuthenticated, user } = this.props;
        return (
            <ul className="theme-navbar theme-nav-right theme-text-small">
                <li>List Gear</li>
                <li>Rent Gear</li>
            </ul>
        );
    };
};

export default NavbarRight;