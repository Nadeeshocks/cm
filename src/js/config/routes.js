import React from "react";
import { Route , Switch } from 'react-router-dom';
import Home from '../containers/home';
import SignIn from '../containers/auth/signIn/index';
import SignUp from '../containers/auth/signUp/index';
import Dashboard from '../containers/dashboard/index';
import RentGear from '../containers/rentGear/index';
import AddGear from '../containers/rentGear/addgear';
import MainList from '../containers/rentGear/mainlist';
import ViewGear from '../components/ViewGear';
import GearDetail from '../components/geardetail';
import Cart from '../components/cart';
import Checkout from '../containers/rentGear/checkout';
import Favourites from '../components/favourite/favourite'
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/rentgear/:id" component={RentGear} />
    <Route path="/geardetail/:id" component={GearDetail} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/favourite" component={Favourites} />

    {/* <Route path="/addgear" component={AddGear} /> */}
    {/* <Route path="/gear/:id" component={ViewGear} /> */}
    <Route path="/cart" component={Cart} />
  </Switch>);