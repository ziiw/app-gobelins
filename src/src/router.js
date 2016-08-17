// -----------------------------
// Imports

import {Utils as Utils} from "./utils";
import React from "react";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';




// -----------------------------
// Layout

import Layout from "./layout/layout";




// -----------------------------
// Components

import Login from './views/login/login';
import Home from './views/home/home';
import Single from './views/single/single';
import Add from './views/add/add';
import Profil from './views/profil/profil';
import Events from './views/events/events';
import Event from './views/events/event';
import Search from './views/search/search';




// -----------------------------
// Core

export default class Root extends React.Component {

    requireAuth(nextState, replace) {
        if (!Utils.auth.loggedIn()) {
            replace(nextState.location.pathname, '/');

        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Login}/>

                    <Route path="home" component={Home}/>

                    <Route path="single/:ad" component={Single}/>

                    <Route path="add" component={Add}/>

                    <Route path="profil/:id" component={Profil}/>

                    <Route path="events" component={Events}/>
                    <Route path="event/:id" component={Event}/>

                    <Route path="search" component={Search}/>
                </Route>
            </Router>
        );
    }
}