// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';

// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"
import AdProfil from "../../components/adProfil/adProfil.js"

// -----------------------------
// Core

export default class Users extends React.Component {

  constructor(props, context) {
    super(props)
        this.state = { users: [] };
  }

  componentDidMount() {
    this.setState({ users : [
      {
        name: "Timothée Chesnin",
        job: "Directeur Artistique Digital",
        promotion: "CRMA 2016",
        location: "Londres, Royaume-Uni",
        description: "lorem ipsum",
        website: "www.portfolio.fr",
        contact: "john-doe@gmail.com / 0607080910",
        picture: "../../assets/profil/default-profil-picture.png",
        works: [
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png"
        ]
      },
      {
        name: "Adrien Lavisiera",
        job: "Web Developer",
        promotion: "CRMA 2016",
        location: "Montréal, Canada",
        description: "lorem ipsum",
        website: "www.portfolio.fr",
        contact: "john-doe@gmail.com / 0607080910",
        picture: "../../assets/profil/default-profil-picture.png",
        works: [
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png"
        ]
      },
      {
        name: "Jérémie Boulay",
        job: "Creative Technologist",
        promotion: "CRMA 2016",
        location: "Paris, France",
        description: "lorem ipsum",
        website: "www.portfolio.fr",
        contact: "john-doe@gmail.com / 0607080910",
        picture: "../../assets/profil/default-profil-picture.png",
        works: [
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png",
          "../../assets/profil/default-profil-picture.png"
        ]
      }
    ]});
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="users">
        <BarMenu title="Annuaire" />
        <section className="ads">
         {
           this.state.users.map(function(user, index) {
            return <Link to={`profil/${index}`} key={index}><AdProfil data={user} /></Link>
           })
         }
        </section>
      </div>
    );
  }
}
