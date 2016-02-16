// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';

// -----------------------------
// Components

//import BarMenu from "../barMenu/bar-menu.js"

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
    //<BarMenu title="Profil" />
    return (
      <div id="profil">
        <h2>{this.props.data.name}</h2>
      </div>
    );
  }
}
