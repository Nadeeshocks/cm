import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
class Partner extends Component {
  render() {
    return (
      <div className="partner">
        <div className="partner-head">
          <Container>
            <Row>
              <Col>
                <Breadcrumb className="theme-text-small">
                  <BreadcrumbItem>Home </BreadcrumbItem>
                  <BreadcrumbItem active>Partners</BreadcrumbItem>
                </Breadcrumb>
                <h1>Partners</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="partner-body">
          <Container>
            <Row>
              <Col sm="6">
                <Card className="text-center p-5 mb-5">
                  {/* <CardImg width="100%" src="" alt="Card image cap" />                   */}
                    <CardTitle >CORSPIN CORP. </CardTitle>
                    <CardText >
                      <small className="text-muted">corspin.com</small>
                    </CardText>
                    <CardText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni reiciendis aut similique, mollitia harum corrupti laboriosam iusto a doloremque eum ullam odit iste adipisci cumque, ex sunt vitae nam!
                    </CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="text-center p-5 mb-5">
                  {/* <CardImg width="100%" src="" alt="Card image cap" /> */}
                  <CardTitle >CORSPIN CORP. </CardTitle>
                  <CardText >
                    <small className="text-muted">corspin.com</small>
                  </CardText>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni reiciendis aut similique, mollitia harum corrupti laboriosam iusto a doloremque eum ullam odit iste adipisci cumque, ex sunt vitae nam!
                    </CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="text-center p-5 mb-5">
                  {/* <CardImg width="100%" src="" alt="Card image cap" /> */}
                  <CardTitle >CORSPIN CORP. </CardTitle>
                  <CardText >
                    <small className="text-muted">corspin.com</small>
                  </CardText>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni reiciendis aut similique, mollitia harum corrupti laboriosam iusto a doloremque eum ullam odit iste adipisci cumque, ex sunt vitae nam!
                    </CardText>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="text-center p-5 mb-5">
                  {/* <CardImg width="100%" src="" alt="Card image cap" /> */}
                  <CardTitle >CORSPIN CORP. </CardTitle>
                  <CardText >
                    <small className="text-muted">corspin.com</small>
                  </CardText>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni reiciendis aut similique, mollitia harum corrupti laboriosam iusto a doloremque eum ullam odit iste adipisci cumque, ex sunt vitae nam!
                    </CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Partner;
