// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




// -----------------------------
// Core

export default class Users extends React.Component {

  render() {
    return (
    	<div id="users">
      		<h1>Users</h1>
      		<Link to='/'>Home</Link>
      	</div>
    );
  }
}