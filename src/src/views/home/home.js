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
        //
        //this.firebaseRef.on("child_added", function(dataSnapshot) {
        //    this.ads.push(dataSnapshot.val())
        //    this.setState({
        //        ads: this.ads
        //    })
        //}.bind(this))

        let home = document.querySelector("#home");
        if(home.offsetHeight + 65 < window.innerHeight){
            home.style.height = window.innerHeight + "px";
        }
    }

    componentWillUnmount() {
        //this.firebaseRef.off();
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
            },
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
            },
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
            },
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

        // WIP: Routing to the single
        // Probleme: je passe juste l'id, alors quon a l'annonce complete deja dispo ici
        // Le but: passer l'objet annonce en entier a la page single.

    	return (
    		<div id="home">
                <div className="ads">
                    {this.ads.map(function(ad, index) {
                        return <Link to={`single/${index}`} key={index}><Ad data={ad} /></Link>
                    })}
                </div>
      		</div>
    	);
  	}
}