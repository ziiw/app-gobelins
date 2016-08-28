// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'



// -----------------------------
// Managers

import UserManager from "../../data/userManager"
const UM = new UserManager();



// -----------------------------
// Core

export default class Menu extends React.Component {

	constructor(props, context) {
		super(props)

        this.state = {
            id: 0
        }
	}

	componentDidMount() {

        UM.getCurrentUser().then((res) => {
            if(res.ok){
                let id = res.userCtx.name;

                return UM.getUserById(id);
            }else{
                throw false
            }
        }).then((res) => {
            this.setState({id: res._id});
        }).catch((err) => {

        })

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
                    <li><Link to={'profil/'} query={{id: this.state.id}}>Profil</Link></li>
                    <li><Link to={'/events'}>évènements</Link></li>
                    <li><Link to={'/home'}>Paramètres</Link></li>
                </ul>
      		</div>
    	);
  	}
}