import React, { Component } from 'react';
import Button from '../../../components/button/index';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { signUp } from '../action';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: "",
    phoneNumber: "",
    fullName: "",
    gender: "",
    address: "",
    picture: null,
    url: null,
   
    // images :null
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  handleChange = e => {
  
    
    this.setState({
      [e.target.id]: e.target.value
    })
  }
displayPicture(event){
  let reader=new FileReader();
  let file=event.target.files[0];
  reader.onloadend = () =>{
    this.setState({
      picture: file,
      url:reader.result
    },()=>{
      // console.log(this.state.picture);
      console.log(this.state.url);

    });
  };
reader.readAsDataURL(file);
}
  render() {
    const { password, email, fullName, phoneNumber, confirmPassword } = this.state;
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    const previewStyle = {
      maxHeight: "50px",
      maxWidth: "50px"
    }
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
                      id="fullName"
                      type="text"
                      className="validate"
                      value={fullName}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="fullName">Name</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="phoneNumber"
                      type="text"
                      className="validate"
                      value={phoneNumber}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
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
                  <div className="file-field input-field">
                    <div style={{ background: 'transparent', boxShadow: 'none'}} className="btn">
                      <span>Photo</span>
                      <input id="input" type="file" onChange={
                        (event) =>{ this.displayPicture(event); }
                      }/>
                       <img src={this.state.url} style={previewStyle}/>
                    </div>

                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text"
                        placeholder="Upload file" />
                    </div>
                  </div>
                  <button className="theme-btn theme-btn-primary w-100 mt-3" onClick={this.handleSubmit}>
                    Sign Up
                  </button>
                </form>
                {authError ?
                  <div className="alert alert-danger">{authError} </div> : ""}
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
const mapStatesToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(SignUp);
