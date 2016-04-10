// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'
import Firebase from "firebase"



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"
import EventComp from "../../components/event/eventComp.js"



// -----------------------------
// Core

export default class Events extends React.Component {

	constructor(props, context) {
		super(props)

        this.state = {events: null}

        this.events = [];
	}

	componentDidMount() {
        //  This method is called whxen an instance of this component is created.
        //this.firebaseRef = new Firebase("https://shining-torch-7702.firebaseio.com/");
        //
        //this.firebaseRef.on("child_added", function(dataSnapshot) {
        //    this.ads.push(dataSnapshot.val())
        //    this.setState({
        //        ads: this.ads
        //    })
        //}.bind(this))
    }

    componentWillUnmount() {
        //this.firebaseRef.off();
    }

  	render() {
        this.events = [
            {
                title: "Apéro Gobelins Paris #32",
                date: "Mercredi 5 août, 19:30",
                localisation: "Le Spootnik, Paris"
            },
            {
                title: "Apéro Gobelins Paris #32",
                date: "Mercredi 5 août, 19:30",
                localisation: "Le Spootnik, Paris"
            },
            {
                title: "Apéro Gobelins Paris #32",
                date: "Mercredi 5 août, 19:30",
                localisation: "Le Spootnik, Paris"
            }
        ];

    	return (
    		<div id="events">
    			<BarMenu title="Évènements" menu={true}/>

                <div className="list">
                    {this.events.map(function(event, index) {
                        return <Link to={`event/${index}`} key={index}><EventComp data={event} /></Link>
                    })}
                </div>
      		</div>
    	);
  	}
}