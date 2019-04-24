import React, { Component } from 'react';
import Button from '../../../components/button/index';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

export default class SignIn extends Component {
  state = {
    password: '',
    email: '',
    name :'',
    phone :'',
    confirmPassword :''
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    }, () => {
      console.log(this.state.password);
    })
  }

  render() {
    const { password, email, name, phone, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <div className="side-bar">
          <Link to="/">
            <img src='/images/logo.png' alt='logo' />
          </Link>
        </div>
        <div className="main-form">
          <Container fluid>
            <Row>
              <Col>
                <h1>Register</h1>
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <div className="social-buttons mt-2">
                  <button className="theme-btn btn-social btn-fb" >
                    <span className="fab fa-facebook-f"></span>
                    Facebook
                </button>
                  <button className="theme-btn btn-social btn-twitter">
                    <span className="fab fa-twitter"></span>
                    Twitter
                </button>
                  <button className="theme-btn btn-social btn-google-plus" >
                    <span className="fab fa-google-plus-g"></span>
                    Google +
                </button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-gray">sign up via social networks</p>
              </Col>
            </Row>

            <div className="mb-2">Or</div>
            <Row>
              <Col sm="6">
                <form>
                  <div className="input-field">
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="name"
                      type="text"
                      className="validate"
                      value={name}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="phone"
                      type="text"
                      className="validate"
                      value={phone}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="confirmPassword"
                      type="password"
                      className="validate"
                      value={confirmPassword}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                  <div class="file-field input-field">
                    <div style={{ background: 'transparent', boxShadow: 'none'}} class="btn">
                      <span>Photo</span>
                      <input type="file" />
                    </div>

                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text"
                        placeholder="Upload file" />
                    </div>
                  </div>
                  <button className="theme-btn theme-btn-primary w-100 mt-3" onClick={this.handleSubmit}>
                    Sign Up
                  </button>
                </form>
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <div className="flex-row">
                  <div>Already have an account?</div> &nbsp;
                  <Button className="theme-btn-filled-white" href="/login">
                      <span className="fa fa-angle-right" /> &nbsp;
                      Login
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
