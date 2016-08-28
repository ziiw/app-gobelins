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

        let users = JSON.parse(props.location.query.response);

        users.sort((a, b) => {
            return a.lastname > b.lastname;
        })

        this.state = {
            users: users
        }
    }

    componentDidMount() {
        // this.setState({users: JSON.parse(this.props.location.query.response)})
    }

    componentWillUnmount() {
        //this.firebaseRef.off();
    }

    render() {

        return (
            <div id="result">
                <ul>
                    {this.state.users.map(function(item, id) {
                        return <Link key={id} to="profil/" query={{id: item._id}}>
                                    <li>
                                        <div className="visuel"></div>
                                        <div className="infos">
                                            <h3 className="name">{item.firstname} {item.lastname}</h3>
                                            <h4 className="job">{item.job}</h4>
                                            <h4 className="location">{item.location}</h4>
                                        </div>
                                    </li>
                                </Link>
                    })}
                </ul>
            </div>
        );
    }
}