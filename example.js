// --------------------------------
// Note: to make the DevToolAddon work, please make sure you access this codepen page through 'http' instead of 'https':
// https://codepen.io/bhou/pen/ObezLN

// ---------
// Please follow the steps to debug this app with collar dev tool
// 1. install collar-dev-server
// sudo npm install collar-dev-server
// 2. run collar-dev-server, type following command line:
// collar-dev-server
// 3. open http://localhost:7500
// 4. run this app


/* enable the dev tool */
Collux.use(new DevToolAddon());

/* create a redux multiple routes app, and init the state */
const app = Collux.createApp('redux-multiple-routes-app', {
  initState: () => {
    return {
      login: {  // state for login page
        username: null,
        password: null,
      },
      user: null  // store user information when login
    }
  }
});

const Link = app.Link;  // Link component used to make client side router

/* the login view */
class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    }
  }
  handleUsernameChange(event) {
    this.props.sensor.send({
      actionType: 'CHANGE_LOGIN_USERNAME',
      username: event.target.value
    })
  }
  handlePasswordChange(event) {
    this.props.sensor.send({
      actionType: 'CHANGE_LOGIN_PASSWORD',
      password: event.target.value
    })
  }
  handleLogin(event) {
    this.props.sensor.send({
      actionType: 'LOGIN'
    });
  }
  render() {
    return (
      <div className="login-form">
        <div>
          <h1>Login</h1>
          <span>Username:</span>&nbsp;<input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
        </div>
        <div>
          <span>Password:</span>&nbsp;<input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
        </div>
        <button onClick={this.handleLogin.bind(this)}>Login</button>
      </div>
    )
  }
}

/* HOME VIEW */
class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  handleLogout() {
    this.props.sensor.send({
      actionType: 'LOGOUT'
    });
  }
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <h3>Hello World! {this.state.user.username}</h3>
        <button onClick={this.handleLogout.bind(this)}>Logout</button>&nbsp;
        <Link to="/business">go to business page</Link>
      </div>
    )
  }
}

/* Another view needs to be seen after login  */
class BusinessView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  handleLogout() {
    this.props.sensor.send({
      actionType: 'LOGOUT'
    });
  }
  render() {
    return (
      <div className="business">
        <h1>Business Page</h1>
        <p>This is another view that requires authentication!</p>
        <button onClick={this.handleLogout.bind(this)}>Logout</button>&nbsp;
        <Link to="/home">go to home page</Link>
      </div>
    )
  }
}

/**
 * register the view to route
 */
var homeView = null;
app.route('/', {
  render: () => { // tell the app how to render home view
    homeView = ReactDOM.render(
      <HomeView sensor={app.getViewSensor()}/>,
      document.getElementById('app')
    );
  },
  updateState: (state) => {   // tell the app how to update home state
    if (!state.user) {
      // you can can send a render action by yourself
      /*app.getViewSensor().send({
        actionType: 'RENDER',
        url: '/login?relay=home'
      });*/
      // or use the predefined API (collux>=0.5.7)
      app.redirect('/login?relay=home')
      return;
    }
    
    homeView.setState({
      user: state.user
    });
  }
});

var bizView = null;
app.route('/business', {
  render: () => { // tell the app how to render home view
    bizView = ReactDOM.render(
      <BusinessView sensor={app.getViewSensor()}/>,
      document.getElementById('app')
    );
  },
  updateState: (state) => {   // tell the app how to update home state
    if (!state.user) {  // go to login view if user not login
      app.getViewSensor().send({
        actionType: 'RENDER',
        url: '/login'
      });
    }
    
    bizView.setState({
      user: state.user
    });
  }
})

var loginView = null;
app.route('/login', {
  render: () => { // tell the app how to render login view
    loginView = ReactDOM.render(
      <LoginView sensor={app.getViewSensor()}/>,
      document.getElementById('app')
    );
  },
  updateState: (state) => { // tell the app how to update login view
    if (state.user) {
      app.getViewSensor().send({
        actionType: 'RENDER',
        url: '/home'
      });
    }
    loginView.setState({
      username: state.login.username,
      password: state.login.password
    });
  }
});


/* reducer to handle actions */
app.store.reduce('CHANGE_LOGIN_USERNAME', (prevState, action) => {
  prevState.login.username = action.username;
  return prevState;
});

app.store.reduce('CHANGE_LOGIN_PASSWORD', (prevState, action) => {
  prevState.login.password = action.password;
  return prevState;
});

app.store.reduceAsync('LOGIN', (prevState, action, done) => {
  let username = prevState.login.username;
  let password = prevState.login.password;
  
  // call your backend api here to check the credential
  setTimeout(() => {
    prevState.user = {
      id: new Date().getTime(),
      username: username,
      // other user information you get from your backend
    }
    // pass the new state to call back function
    done(null, prevState);
  }, 1000);
});

app.store.reduce('LOGOUT', (prevState, action) => {
  prevState.user = null;
  return prevState;
});


app.run();

