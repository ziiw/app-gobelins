// -----------------------------
// Imports

import {Utils as Utils} from "../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




// -----------------------------
// Core

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
        //  This method is called when an instance of this component is created.
        let width = window.innerWidth;
        let height = window.innerHeight;

        let app = document.querySelector("#app");
        app.style.width = width;
        app.style.height = height;
    }

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