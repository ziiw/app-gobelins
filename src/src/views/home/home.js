// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'
import Firebase from "firebase"



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"
import Ad from "../../components/ad/ad.js"



// -----------------------------
// Core

export default class Home extends React.Component {

	constructor(props, context) {
		super(props)

        this.state = {annonces: null}

        this.ads = [];
	}

	componentDidMount() {
        //  This method is called whxen an instance of this component is created.
        //this.firebaseRef = new Firebase("https://shining-torch-7702.firebaseio.com/");
        //this.firebaseRef.on("child_added", function(dataSnapshot) {
        //    console.log(dataSnapshot.val())
        //    this.ads.push(dataSnapshot.val())
        //    this.setState({
        //        ads: this.ads
        //    })
        //}.bind(this))
    }

    componentWillUnmount() {
        //this.firebaseRef.off();
    }

    showSingle() {
        console.log("dssdf")
        this.props.history.push('/single')
    }

  	render() {
        this.ads = [
            {
                jobTitle: "Animateur",
                enterprise: "Pixar",
                localisation: "Silicon Valley"
            },
            {
                jobTitle: "Creative developeur",
                enterprise: "Apple",
                localisation: "Silicon Valley"
            },
            {
                jobTitle: "Graphisme",
                enterprise: "Apple",
                localisation: "Silicon Valley"
            }
        ]

        let handleClick = this.showSingle.bind(this)

    	return (
    		<div id="home">
    			<BarMenu title="Annonces" />

                {this.ads.map(function(ad, index) {
                    return <Ad key={index} data={ad} onClick={handleClick} />
                })}
      		</div>
    	);
  	}
}