// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Core

export default class EventComp extends React.Component {

    constructor(props, context) {
        super(props)
    }

    componentDidMount() {
        //  This method is called whxen an instance of this component is created.
    }

    render() {

        return (
            <div className="eventComp">
                <div className="shadow"></div>
                <div className="informations">
                    <div className="title">{this.props.data.title}</div>
                    <div className="date">{this.props.data.date}</div>
                    <div className="localisation">{this.props.data.localisation}</div>
                </div>
            </div>
        );
    }
}