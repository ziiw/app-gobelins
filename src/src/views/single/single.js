// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"
import Ad from "../../components/ad/ad.js"


// -----------------------------
// Core

export default class Single extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            ad:{
                jobTitle: "Graphisme",
                enterprise: "Apple",
                localisation: "Silicon Valley"
            },
            infos:{
                contract: "CDI",
                sector: "Internet et E-commerce",
                profession: "Art et création",
                salary: "$ 35-49 K",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius provident est quasi et impedit quo ab laboriosam ad, fugit ratione quibusdam, sed ipsum facilis deleniti ducimus consequuntur rem nostrum vel!",
                author: "Maxime Dubois",
                date: "1460291357"
            }
        }
    }

    componentDidMount() {
        //  This method is called whxen an instance of this component is created.

        let single = document.querySelector("#single");
        if(single.offsetHeight + 65 < window.innerHeight){
            single.style.height = window.innerHeight - 65 + "px";
        }
    }

    render() {
        return (
            <div id="single">
                <Ad data={this.state.ad} />
                <div className="jobInfos">
                    <h3>Type de poste</h3>
                    <div className="contract bloc">
                        <p className="left">Contrat</p>
                        <p className="right">{this.state.infos.contract}</p>
                    </div>
                    <div className="sector bloc">
                        <p className="left">Secteur</p>
                        <p className="right">{this.state.infos.sector}</p>
                    </div>
                    <div className="profession bloc">
                        <p className="left">Fonction</p>
                        <p className="right">{this.state.infos.profession}</p>
                    </div>
                    <div className="sep"></div>
                    <div className="salary bloc">
                        <p className="left">Rémunération</p>
                        <p className="right">{this.state.infos.salary}</p>
                    </div>
                    <div className="sep"></div>
                    <div className="description">
                        <h3>Description</h3>
                        <p>{this.state.infos.description}</p>
                    </div>
                    <div className="sep"></div>
                    <div className="author">
                        <p>Posté il y a {this.state.infos.date} par <b>{this.state.infos.author}</b></p>
                    </div>
                </div>
            </div>
        );
    }
}