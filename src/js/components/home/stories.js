import React from 'react'
import ThemeCardTwo from '../../components/Theme-Cards/ThemeCardTwo';
import { Container, Row, Col } from 'reactstrap';

export default (props) => {
    return (
        <div className="stories">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center mb-5">Stories</h2>
                    </Col>
                </Row>
                <Row>
                    {
                        props.stories.map((item, index) => {
                        
                          return <Col sm="4" key={index}>
                            <ThemeCardTwo story={item.data()} />
                          </Col>
                        })
                    }
                </Row>
                <Row>
                    <Col className="text-center">
                        <button className="theme-btn theme-btn-primary mt-5">
                            View All
                </button>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}