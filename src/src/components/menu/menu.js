// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'



// -----------------------------
// Components




// -----------------------------
// Core

export default class Menu extends React.Component {

	constructor(props, context) {
		super(props)
	}

	componentDidMount() {

    }

    componentWillUnmount() {

    }

  	render() {

    	return (
    		<div id="menu">
                <ul>
                    <li><Link to={'/home'}>Annonces</Link></li>
                    <li><Link to={'/search'}>Annuaire</Link></li>
                    <li><Link to={'/home'}>Map monde</Link></li>
                    <li><Link to={'/profil/1'}>Profil</Link></li>
                    <li><Link to={'/events'}>évènements</Link></li>
                    <li><Link to={'/home'}>Paramètres</Link></li>
                </ul>
      		</div>
    	);
  	}
}