import React from 'react';
import ThemeCardOne from '../../components/Theme-Cards/ThemeCardOne';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        props.newArrivals ?
            <div className="new_arrival">
                <div className="section-overlay">
                    <Container>
                        <Row>
                            <Col sm="3" className="align-self-center">
                                <h3 className="mb-4">New Arrivals</h3>
                                <img src={'/images/calander.jpg'} alt="" className="w-100" />
                                <button className="theme-btn theme-btn-primary w-100">
                                    <Link to="/listGear">
                                        <span></span>
                                        Find Gear
                                    </Link>
                                </button>
                            </Col>
                            <Col sm={{ size: 8, offset: 1 }}>
                                <Row >
                                    {
                                        props.newArrivals.map((item, index) => {
                                      
                                          return <Col sm="6" key={index}>
                                            <ThemeCardOne Gear={ item.data() } gearId={ item.id }  />
                                          </Col>
                                        })
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div> : null
    )
}