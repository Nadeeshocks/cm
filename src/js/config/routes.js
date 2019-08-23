import React from "react";
import { Route , Switch } from 'react-router-dom';
import Home from '../containers/home';
import SignIn from '../containers/auth/signIn/index';
import SignUp from '../containers/auth/signUp/index';
import Dashboard from '../containers/dashboard/index';
import RentGear from '../containers/rentGear/index';
import ListGear from '../containers/listGear/index';
import AddGear from '../containers/addGear/index';
import UpdateGear from '../containers/updateGear/index'
import About from '../components/aboutus/aboutus'
import Partners from '../components/partners/index';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/rentgear/:id" component={RentGear} />
    <Route path="/listgear" component={ListGear} />
    <Route path="/addgear" component={AddGear} />
    <Route path="/updategear/:id" component={UpdateGear} />
    <Route path="/aboutus" component={About} />
    <Route path="/partners" component={Partners} />
  </Switch>
  );