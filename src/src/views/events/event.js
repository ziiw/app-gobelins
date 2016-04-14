// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"
import EventComp from "../../components/event/eventComp.js"


// -----------------------------
// Core

export default class Event extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            event:{
                title: "Conférence Plexus : Pixar",
                localisation: "Gobelins, Paris",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil illum minus quas architecto cupiditate maiores fugiat delectus magni tenetur? Recusandae unde officiis vitae? Inventore nisi eveniet, eaque odit, tempore commodi.",
                date: "timestamp",
                author: "Plexus"
            },
        }
    }

    componentDidMount() {
        //  This method is called whxen an instance of this component is created.

    }

    render() {
        return (
            <div id="event">
                <EventComp data={this.state.event} />
                <div className="eventInfos">
                    <div className="description">
                        <h3 className="title">Description</h3>
                        <p className="text">{this.state.event.description}</p>
                    </div>
                    <div className="sep"></div>
                    <div className="author">
                        <p>Posté il y a {this.state.event.date} par <b>{this.state.event.author}</b></p>
                    </div>
                </div>
            </div>
        );
    }
}