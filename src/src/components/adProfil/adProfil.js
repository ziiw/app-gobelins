// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';

// -----------------------------
// Components

// -----------------------------
// Core

export default class Profil extends React.Component {

  constructor(props, context) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  render() {
    let pictureUrl = (typeof this.props.data.picture === 'string') ?
     this.props.data.picture : "../../assets/profil/default-profil-picture.png";
    return (
      <div className="adProfil">
        <img src={pictureUrl} alt={"Photo de "+this.props.data.name} className="photo"/>
        <div className="informations">
          <h2 className="name">{this.props.data.name}</h2>
          <p>{this.props.data.job}</p>
          <p>{this.props.data.location}</p>
        </div>
      </div>
    );
  }
}
