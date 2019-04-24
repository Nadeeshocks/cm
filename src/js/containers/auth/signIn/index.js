import React, { Component } from 'react';
import Button from '../../../components/button/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../action';

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
    return (
      <div className="sign-in">
        <div className="side-bar">
          <Link to="/">
            <img src='/images/logo.png' alt='logo' />
          </Link>
        </div>
        <div className="main-form">
          <h1>Login</h1>
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
          <p className="mt-2 text-gray">signIn via social networks</p>

          <div className="login-or-divider">Or</div>

          <form className="theme-form">
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
                id="password"
                type="password"
                className="validate"
                value={password}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="flex-row">
              <p>
                <label>
                  <input type="checkbox" className="filled-in" />
                  <span>Remember me on this device</span>
                </label>
              </p>
              <p>
                <Link to="/forgotpassword" className="theme-btn-link" >Forgot password?</Link>
              </p>
            </div>
            <button className="theme-btn theme-btn-primary w-50" onClick={this.handleSubmit}>Sign In</button>
          </form>

          <div className="login-or-divider"></div>
          <div style = {{maxWidth : '50%'}}>
            <div className="flex-row">
              <div>Don't have an account?</div> &nbsp;
              <Button className="theme-btn-filled-white" href="/">
                <span className="fa fa-angle-right" /> &nbsp;
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStatesToProps = state =>{
  return{
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    signIn : (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(SignIn);