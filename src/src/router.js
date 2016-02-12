// -----------------------------
// Imports

import {Utils as Utils} from "./utils";
import React from "react";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';



// -----------------------------
// Layout

import Layout from "./layout/layout";



// -----------------------------
// Components

import Login from './views/login/login';
import Home from './views/home/home';
import Single from './views/single/single';



// -----------------------------
// Core

export default class Root extends React.Component {

  requireAuth(nextState, replace) {
    if (!Utils.auth.loggedIn()) {
      replace(nextState.location.pathname, '/'); 
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Login} />
          <Route path="home" component={Home} onEnter={this.requireAuth}/>
          <Route path="single" component={Single} />
        </Route>
      </Router>
    );
  }
}