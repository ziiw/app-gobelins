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

    }

    goBack() {
        window.history.back()
    }

    render() {
        let classNav = (this.props.showNav) ? "" : "hide";

        return (
            <div id="barMenu" className={classNav}>
                <div className="content">
                    {(this.props.menu) ? <div className="menu" onClick={this.props.showMenu}></div> : <div className="back" onClick={this.goBack}></div>}
                    <h1>{this.props.title}</h1>
                    <Link to="add"><div className="btnAdd"></div></Link>
                </div>
            </div>
        );
    }
}