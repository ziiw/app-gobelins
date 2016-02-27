// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"
import Ad from "../../components/ad/ad.js"


// -----------------------------
// Core

export default class Single extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //  This method is called whxen an instance of this component is created.

    }

    render() {
        return (
            <div id="single">
                <BarMenu title="Annonces" menu={false}/>

                <Ad data="" />
            </div>
        );
    }
}