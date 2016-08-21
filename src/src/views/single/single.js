// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';




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

export default class Single extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ad: null, author: null, loading: true};

    }

    componentDidMount() {
        //  This method is called whxen an instance of this component is created.
        let ad;
        let id = this.props.params.ad;

        JM.getById(id).then((res) => {
            ad = res;
            return UM.getUserById(ad.author);
        }).then((author) => {
            this.setState({ad: ad, author: author, loading: false});

            let single = document.querySelector("#single");
            if(single.offsetHeight + 80 < window.innerHeight){
                single.style.height = window.innerHeight - 80 + "px";
            }
        })
    }

    render() {
        if (!this.state.ad) {
            return <div />
        }

        return (
            <div id="single">
                <Ad data={this.state.ad} />
                <div className="jobInfos">
                    <h3>Type de poste</h3>
                    <div className="contract bloc">
                        <p className="left">Contrat</p>
                        <p className="right">{this.state.ad.contract}</p>
                    </div>
                    <div className="sector bloc">
                        <p className="left">Secteur</p>
                        <p className="right">{this.state.ad.secteur}</p>
                    </div>
                    <div className="profession bloc">
                        <p className="left">Fonction</p>
                        <p className="right">{this.state.ad.fonction}</p>
                    </div>
                    <div className="sep"></div>
                    <div className="salary bloc">
                        <p className="left">Rémunération</p>
                        <p className="right">{this.state.ad.remuneration}</p>
                    </div>
                    <div className="sep"></div>
                    <div className="description">
                        <h3>Description</h3>
                        <p>{this.state.ad.description}</p>
                    </div>
                    <div className="sep"></div>
                    <div className="author">
                        <p>Posté il y a {this.state.ad.timestamp} par <b>{this.state.author.firstname} {this.state.author.lastname}</b></p>
                    </div>
                </div>
            </div>
        );
    }
}