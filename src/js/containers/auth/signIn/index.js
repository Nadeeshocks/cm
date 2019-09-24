import React, { Component } from 'react';
import Button from '../../../components/button/index';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../action';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    password: '',
    email: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { password, email } = this.state;
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="sign-in">
        <div className="side-bar">
          <Link to="/">
            <img src='/images/logo.png' alt='logo' />
          </Link>
        </div>
        <div className="main-form">
          <Container fluid>
            <Row>
              <Col>
                <h1>Login</h1>
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <div className="social-buttons mt-5">
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
                <p className="mt-2 text-gray">signIn via social networks</p>
              </Col>
            </Row>

            <div className="login-or-divider">Or</div>
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


                  <div className="field">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      value={password}
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="flex-row mt-3 flex">
                    <p>
                      <label>
                        <input type="checkbox" className="filled-in" />
                        <span className="remember">Remember me on this device</span>
                      </label>
                    </p>
                    <p>
                      <Link to="/forgotpassword" className="theme-btn-link" >Forgot password?</Link>
                    </p>
                  </div>
                  <button className="theme-btn theme-btn-primary" onClick={this.handleSubmit}>Sign In</button>
                </form>
                {authError ?
                  <div className="alert alert-danger">{authError} </div> : ""}
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <div className="login-or-divider"></div>
                <div>
                  <div className="flex-row">
                    <div>Don't have an account?</div> &nbsp;
                    <Button className="theme-btn-filled-white" href="/">
                      <span className="fa fa-angle-right" /> &nbsp; Get Started
                    </Button>
                  </div>
                </div>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(SignIn);