import React from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const partners = props => {
    return (
        <div className="container">
            <Breadcrumb >
                <BreadcrumbItem> Home Page </BreadcrumbItem>
                <BreadcrumbItem active > Partners </BreadcrumbItem>
            </Breadcrumb>
            <div className="heading">

            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default partners;