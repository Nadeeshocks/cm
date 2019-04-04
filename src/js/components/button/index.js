import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


export default props => {
    return (
        <Button className={`theme-btn ${props.className}`}>
            <Link to={props.children}>
                {props.children}
            </Link>
        </Button>
    )
};