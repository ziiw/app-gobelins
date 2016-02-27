// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Core

export default class Ad extends React.Component {

    constructor(props, context) {
        super(props)
    }

    componentDidMount() {
        //  This method is called whxen an instance of this component is created.
    }

    render() {

        return (
            <div className="ad">
                <div className="shadow"></div>
                <div className="informations">
                    <div className="jobTitle">{this.props.data.jobTitle}</div>
                    <div className="enterprise">{this.props.data.enterprise}</div>
                    <div className="localisation">{this.props.data.localisation}</div>
                </div>
            </div>
        );
    }
}