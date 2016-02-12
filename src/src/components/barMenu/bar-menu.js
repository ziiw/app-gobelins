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

    }

	showAdd() {
        this.props.history.push("/add")
	}

    render() {
		let showAdd = this.showAdd.bind(this);

      	return (
      		<div id="barMenu">
                <div className="content">
                    <div className="menu"></div>
                    <h1>{this.props.title}</h1>
                    <div className="btnAdd" onClick={showAdd}></div>
                </div>
        	</div>
      	);
	}
}