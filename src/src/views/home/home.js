// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Components




// -----------------------------
// Core

export default class Home extends React.Component {

	constructor(props, context) {
		super(props)

	}

	componentDidMount() {
        //  This method is called whxen an instance of this component is created.
    }

  	render() {
    	return (
    		<div id="home">
      			<h1>Home</h1>
      			<Link to='/users'>Users</Link>
      		</div>
    	);
  	}
}