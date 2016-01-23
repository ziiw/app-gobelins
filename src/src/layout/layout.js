// -----------------------------
// Imports

import {Utils as Utils} from "../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




// -----------------------------
// Core

export default class Layout extends React.Component {

	render() {

		// {this.props.children}
		// To render the component required by the routing
		return (
			<div id="layout">
				{this.props.children}
		  	</div>
		);
	}
}