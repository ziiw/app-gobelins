// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Models

import JobManager from "../../data/jobManager";
const JM = new JobManager();



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
        // this.triggerAdd();
    }

    triggerAdd() {
        JM.new({
            job: this.refs.job.value,
            firme: this.refs.firme.value,
            location: this.refs.location.value,
            visuel: this.refs.visuel,
            contract: this.refs.contract.value,
            secteur: this.refs.secteur.value,
            fonction: this.refs.fonction.value,
            money: this.refs.money.value,
            description: this.refs.description.value,
            author: "author" // pass from front (detect who is using by profil.getInfo())
        });
    }

    render() {

        return (
            <div id="add">
                <input type="text" ref="job"/>
                <input type="text" ref="firme"/>
                <input type="text" ref="location"/>
                <input type="text" ref="contract"/>
                <input type="text" ref="secteur"/>
                <input type="text" ref="fonction"/>
                <input type="text" ref="money"/>
                <input type="text" ref="description"/><br/>
                <button onClick={this.triggerAdd.bind(this)}>HEEEEEEEEY</button>
            </div>
        );
    }
}