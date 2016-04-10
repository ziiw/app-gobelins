// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'
import Firebase from "firebase"



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"



// -----------------------------
// Core

export default class Search extends React.Component {

	constructor(props, context) {
		super(props)
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
    	return (
    		<div id="search">
    			<BarMenu title="Annuaire" menu={true}/>

                <div className="filters">
                <h2>Filtrer la recherche</h2>
                    <ul className="categories">
                        <li><p className="left">Métier</p><p className="right"></p></li>
                        <li><p className="left">Ville</p><p className="right"></p></li>
                        <li><p className="left">Formation</p><p className="right"></p></li>
                        <li><p className="left">Promo</p><p className="right"></p></li>
                        <li><p className="left">Nom</p><p className="right"></p></li>
                    </ul>

                    <ul className="choice">
                        <li><p className="right">2008</p></li>
                        <li><p className="right">2009</p></li>
                        <li><p className="right">2010</p></li>
                        <li><p className="right">2011</p></li>
                        <li><p className="right">2012</p></li>
                        <li><p className="right">2013</p></li>
                        <li><p className="right">2014</p></li>
                        <li><p className="right">2015</p></li>
                        <li><p className="right">2016</p></li>
                    </ul>

                </div>

                <div className="submit">Rechercher</div>
      		</div>
    	);
  	}
}