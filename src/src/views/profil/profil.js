// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';

// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"

// -----------------------------
// Core

export default class Profil extends React.Component {

    constructor(state, context) {
        super(state)
        this.state = {
            works: []
        };
    }

    componentDidMount() {
        this.setState({
            name: "Timothé Chesnin",
            job: "Directeur Artistique",
            promotion: "CRMA 2016",
            location: "Londres, Royaume-Uni",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nulla quibusdam consequuntur, facilis totam velit natus earum ea atque labore fugiat nobis deserunt, quam unde nisi nemo, tenetur dolor dicta.",
            website: "www.portfolio.fr",
            contact: "john-doe@gmail.com / 0607080910",
            profil: "../../assets/profil/default-profil-picture.png",
            works: [
                "../../assets/profil/work.png",
                "../../assets/profil/work.png",
                "../../assets/profil/work.png",
                "../../assets/profil/work.png",
                "../../assets/profil/work.png"
            ]
        });
    }

    componentWillUnmount() {

    }

    render() {

        let pictureUrl = (typeof this.state.picture === 'string') ?
            this.state.picture : "../../assets/profil/default-profil-picture.png";

        return (
            <div id="profil">

                <BarMenu title='Profil' />

                <section className="contentProfil">
                    <header className="header">
                        <img src={pictureUrl} alt={"Photo de "+this.state.name} className="photo"/>
                        <ul className="details">
                            <li><h1 className="name">{this.state.name}</h1></li>
                            <li>{this.state.job}</li>
                            <li>{this.state.location}</li>
                            <li className="line"></li>
                            <li>{this.state.promotion}</li>
                        </ul>
                    </header>

                    <section className="informations">
                        <h2>À propos</h2>
                        <p>{this.state.description}</p>
                        <div className="line"></div>
                        <h2>Site web</h2>
                        <p>{this.state.website}</p>
                        <div className="line"></div>
                        <h2>Me contacter</h2>
                        <p>{this.state.contact}</p>
                        <div className="line"></div>
                    </section>

                    <footer className="works">
                        <h2>Quelques créations</h2>
                        <ul className="workList">
                            {this.state.works.map(function(workUrl, index) {
                                return <li key={index} className="workImage"><img src={workUrl} alt={workUrl} /></li>
                            })}
                        </ul>
                    </footer>
                </section>
            </div>
        );
    }
}
