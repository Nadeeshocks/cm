import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendEmail } from './action';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Form, FormGroup,Button , Input } from 'reactstrap';
import 'react-accessible-accordion/dist/fancy-example.css';

class FAQ extends Component {

    OnSend = (value) => {
        value.preventDefault();
        this.props.sendEmail(this.state);
    }

    textInput = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
        return (<div className="FAQ">
            <div className="FAQ-head">
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb className="theme-text-small">
                                <BreadcrumbItem>Home </BreadcrumbItem>
                                <BreadcrumbItem active>FAQs</BreadcrumbItem>
                            </Breadcrumb>
                            <h1>FAQs</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="FAQ-body">
                <Container>
                    <Row>
                        <Col>
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h3>HOW TO PAY?</h3>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, sequi at. Ipsum deserunt quos ipsa neque? Magni earum repellat molestiae sapiente voluptatem, laboriosam eligendi vero maiores non iure quam minima?</p>
                                    </AccordionItemBody>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h3>WHAT BRANDS OF THE EQUIPMENT ARE AVAIABLE?</h3>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, sequi at. Ipsum deserunt quos ipsa neque? Magni earum repellat molestiae sapiente voluptatem, laboriosam eligendi vero maiores non iure quam minima?</p>
                                    </AccordionItemBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h3>HOW TO EXTEND RENTED GEAR ?</h3>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, sequi at. Ipsum deserunt quos ipsa neque? Magni earum repellat molestiae sapiente voluptatem, laboriosam eligendi vero maiores non iure quam minima?</p>
                                    </AccordionItemBody>
                                </AccordionItem>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>

                <Container className="email-form">
                    <Row>
                        <Col>
                            <h4> Didn't find the answer to your question? </h4>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            <p> Fill out the form and ask us! </p>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Form onSubmit={ this.OnSend }>
                            <Col>
                                <FormGroup>
                                    <Input type="text" name="name" id="name" placeholder="Name" onChange={ this.textInput } />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="phone" id="phone" placeholder="Phone" onChange={ this.textInput }/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="email" id="email" placeholder="Email" onChange={ this.textInput }/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Input type="textarea" name="message" id="message" placeholder="Message" onChange={ this.textInput }/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button type="submit" >Send</Button>
                            </Col>
                        </Form>
                    </Row>
                </Container>

            </div>
        </div>)
    }
}

const mapStateToProps = () => {

}

export default compose(
    connect(mapStateToProps, 
        { sendEmail } )
  )( FAQ );