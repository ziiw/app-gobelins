// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"


// -----------------------------
// Core

export default class Add extends React.Component {

    constructor(props, context) {
        super(props)
    }

    componentDidMount() {
        //  This method is called whxen an instance of this component is created.

    }

    render() {

        return (
            <div id="add">
                <BarMenu title="Poster une annonce" menu={false} />
                Add
            </div>
        );
    }
}