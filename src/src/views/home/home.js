// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'
import Firebase from "firebase"



// -----------------------------
// Managers

import UserManager from "../../data/userManager"
const UM = new UserManager();

import JobManager from "../../data/jobManager"
const JM = new JobManager();



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"
import Ad from "../../components/ad/ad.js"



// -----------------------------
// Core

export default class Home extends React.Component {

	constructor(props, context) {
		super(props)

        this.state = {annonces: null, ads: []}
	}

	componentDidMount() {

        // if not connected
        UM.getCurrentUser().then((res) => {
            if(!res){
                this.props.history.push('/');
            }else{
                console.log("🖖 Welcome " + res.userCtx.name)
            }
        })

        JM.getAll()
            .then((res) => {
                let ads = res.rows.map((ad, index) => {
                    return ad.value;
                })
                this.setState({ads: ads})
            })

        let home = document.querySelector("#home");
        if(home.offsetHeight + 65 < window.innerHeight){
            home.style.height = window.innerHeight + "px";
        }
    }

    componentWillUnmount() {
        //this.firebaseRef.off();
    }

  	render() {
        // WIP: Routing to the single
        // Probleme: je passe juste l'id, alors quon a l'annonce complete deja dispo ici
        // Le but: passer l'objet annonce en entier a la page single.

    	return (
    		<div id="home">
                <div className="ads">
                    {this.state.ads.map(function(ad, index) {
                        return <Link to={`single/${ad._id}`} key={index}><Ad data={ad} /></Link>
                    })}
                </div>
      		</div>
    	);
  	}
}