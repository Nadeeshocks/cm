import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Link to={props.href}>
            <button className={`theme-btn ${props.className}`}>
                {props.children}
            </button>
        </Link>
    )
};