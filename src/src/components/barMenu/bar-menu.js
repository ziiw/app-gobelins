// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Components




// -----------------------------
// Core

export default class BarMenu extends React.Component {

	constructor(props, context) {
		super(props)
	}

	componentDidMount() {
        //  This method is called whxen an instance of this component is created.
        //console.log(window.history.back())
    }

    goBack() {
        window.history.back()
    }

    render() {

      	return (
      		<div id="barMenu">
                <div className="content">
                    {(this.props.menu) ? <div className="menu"></div> : <div className="back" onClick={this.goBack}></div>}
                    <h1>{this.props.title}</h1>
                    <Link to="add"><div className="btnAdd"></div></Link>
                </div>
        	</div>
      	);
	}
}