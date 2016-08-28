// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';



// -----------------------------
// Managers

import UserManager from "../../data/userManager"
const UM = new UserManager();



// -----------------------------
// Core

export default class Profil extends React.Component {

    constructor(state, context) {
        super(state)

        this.state = {
            user: {
                works: [],
            },
        };
    }

    componentDidMount() {
        let id = this.props.location.query.id;

        UM.getUserById(id).then((res) => {
            this.setState({user: res})
        })

        // this.setState({
        //     name: "Timothé Chesnin",
        //     job: "Directeur Artistique",
        //     promotion: "CRMA 2016",
        //     location: "Londres, Royaume-Uni",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nulla quibusdam consequuntur, facilis totam velit natus earum ea atque labore fugiat nobis deserunt, quam unde nisi nemo, tenetur dolor dicta.",
        //     website: "www.portfolio.fr",
        //     contact: "john-doe@gmail.com / 0607080910",
        //     profil: "../../assets/profil/default-profil-picture.png",
        //     works: [
        //         "../../assets/profil/work.png",
        //         "../../assets/profil/work.png",
        //         "../../assets/profil/work.png",
        //         "../../assets/profil/work.png",
        //         "../../assets/profil/work.png"
        //     ]
        // });
    }

    componentWillUnmount() {

    }

    render() {

        // let pictureUrl = (typeof this.state.picture === 'string') ?
        //     this.state.picture : "../../assets/profil/default-profil-picture.png";

        return (
            <div id="profil">
                <section className="contentProfil">
                    <header className="header">
                        <img src={this.state.user.picture} alt={"Photo de "+this.state.name} className="photo"/>
                        <ul className="details">
                            <li><h1 className="name">{this.state.user.firstname} {this.state.user.lastname}</h1></li>
                            <li>{this.state.user.job}</li>
                            <li>{this.state.user.location}</li>
                            <li className="line"></li>
                            <li>{this.state.user.promoType} {this.state.user.promoYear}</li>
                        </ul>
                    </header>

                    <section className="informations">
                        <h2>À propos</h2>
                        <p>{this.state.user.description}</p>
                        <div className="line"></div>
                        <h2>Site web</h2>
                        <p>{this.state.user.website}</p>
                        <div className="line"></div>
                        <h2>Me contacter</h2>
                        <p>{this.state.user.contact}</p>
                        <div className="line"></div>
                    </section>

                    <footer className="works">
                        <h2>Quelques créations</h2>
                        <ul className="workList">
                            {this.state.user.works.map(function(workUrl, index) {
                                return <li key={index} className="workImage"><img src={workUrl} alt={workUrl} /></li>
                            })}
                            <div style={{clear: "both"}}></div> 
                        </ul>
                    </footer>
                </section>
            </div>
        );
    }
}
