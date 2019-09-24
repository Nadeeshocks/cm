import React, { Component } from 'react';
import Button from '../../components/button/index';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { forgetPassword } from './action';
import { Redirect } from 'react-router-dom';

class ForgetPassword extends Component {
  state = {
    email: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.forgetPassword(this.state);
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { email } = this.state;
    const { status, auth } = this.props;

    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="forget-password">
        <div className="side-bar">
          <Link to="/">
            <img src='/images/logo.png' alt='logo' />
          </Link>
        </div>
        <div className="main-form">
          <Container fluid>
            <Row>
              <Col>
                <h3>Forgot Password?</h3>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <p className="mt-2 text-gray">
                  Enter your email, The insutruction will be 
                </p>
                <p className="mt-2 text-gray">
                  sent for password recovery. 
                </p>
              </Col>
            </Row>
            

            <Row>
              <Col sm="6">
                <form className="theme-form">
                  <div className="field">
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      value={email}
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                    <label for="email">Email</label>
                  </div>

                  <button className="theme-btn theme-btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
                {
                  status.status == "Sucsess" ? 
                  <div className="alert alert-success"> {status.message} </div> :
                  status.status == "Failed" ? 
                  <div className="alert alert-danger"> {status.message} </div> : ""} 
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
const mapStatesToProps = state => {
  return {
    auth: state.firebase.auth,
    status : state.forgerPassword.forgetPasswordStatus
  }
}

export default connect(mapStatesToProps, {
  forgetPassword
} )(ForgetPassword);