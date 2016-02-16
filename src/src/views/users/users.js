// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';

// -----------------------------
// Components

//import BarMenu from "../barMenu/bar-menu.js"
import Profil from "../profil/profil.js"

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
        profil: "photo/work.pgn",
        works: [
          "photo/work.pgn",
          "photo/work.pgn",
          "photo/work.pgn",
          "photo/work.pgn"
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
        profil: "photo/work.pgn",
        works: [
          "photo/work.pgn",
          "photo/work.pgn",
          "photo/work.pgn",
          "photo/work.pgn"
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
        profil: "photo/work.pgn",
        works: [
          "photo/work.pgn",
          "photo/work.pgn",
          "photo/work.pgn",
          "photo/work.pgn"
        ]
      }
    ]});
  }

  componentWillUnmount() {}

  render() {
    //<BarMenu title="Annuaire" />
    return (
      <div id="users">
        <div className="annuaire">
         {
           this.state.users.map(function(user, index) {
             return <Profil key={index} data={user} />
           })
         }
        </div>
      </div>
    );
  }
}
