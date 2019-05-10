import React from "react";
import { Route , Switch } from 'react-router-dom';
import Home from '../containers/home';
import SignIn from '../containers/auth/signIn/index';
import SignUp from '../containers/auth/signUp/index';
import Dashboard from '../containers/dashboard/index';
import RentGear from '../containers/rentGear/index';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/rentgear/:id" component={RentGear} />
  </Switch>);