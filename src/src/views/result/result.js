// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'




// -----------------------------
// Components




// -----------------------------
// Managers

import UserManager from "../../data/userManager"
const UM = new UserManager();



// -----------------------------
// Globals

// let users = [];



// -----------------------------
// Core

export default class Result extends React.Component {

    constructor(props, context) {
        super(props)

        this.state = {
            users: JSON.parse(props.location.query.response)
        }
    }

    componentDidMount() {
        // this.setState({users: JSON.parse(this.props.location.query.response)})
    }

    componentWillUnmount() {
        //this.firebaseRef.off();
    }

    render() {
        console.log(this.state.users);

        return (
            <div id="result">
                <ul>
                    {this.state.users.map(function(item, id) {
                        return <li key={id}>{item.lastname}</li>
                    })}
                </ul>
            </div>
        );
    }
}