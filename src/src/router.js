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
import Users from './views/users/users';



// -----------------------------
// Core

export default class Root extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Login} />
          <Route path="users" component={Users} />
        </Route>
      </Router>
    );
  }
}