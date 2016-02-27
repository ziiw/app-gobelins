// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';

// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"
import AdProfil from "../../components/adProfil/ad-profil.js"

// -----------------------------
// Core

export default class Users extends React.Component {

  constructor(props, context) {
    super(props)
    this.state = {
      name: "",
      job: "",
      promotion: "",
      location: "",
      description: "",
      website: "",
      contact: "",
      profil: "",
      works: []
    };
  }

  componentDidMount() {
    this.setState({
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
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="profil">
        <BarMenu title={this.state.name} />
        <section className="ads">
          <h1>{this.state.name}</h1>
        </section>
      </div>
    );
  }
}
