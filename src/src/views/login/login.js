// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';
import TweenMax from 'gsap';



// -----------------------------
// Core

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {signIn: false};
	}

	componentDidMount() {
        //  This method is called when an instance of this component is created.
        this.setState({signIn: false});
        this.showSplash();
    }

    showSplash() {

    	// Only if not already connected else go to home
    	this.animEntry();
    }

	animEntry() {
		TweenMax.to(this.refs.logo, 1.5, {
			y: -50,
			ease: Power4.easeInOut
		});

		TweenMax.to(this.refs.btnSignIn, 1, {
			delay: 0.75,
			y: -25,
			opacity: 1,
			ease: Power4.easeOut
		});

		TweenMax.to(this.refs.btnSignUp, 0.75, {
			delay: 1,
			y: -25,
			opacity: 1,
			ease: Power4.easeOut
		});
	}

	showSignIn(e) {
		console.log(e);
		this.setState({signIn: true});

		TweenMax.to(this.refs.inputEmail, 0.75, {
			y: -25,
			opacity: 1,
			ease: Power4.easeOut
		});

		TweenMax.to(this.refs.inputPass, 0.5, {
			delay: 0.5,
			y: -25,
			opacity: 1,
			ease: Power4.easeOut
		});
	}

	render() {
		return (
			<div id="login">
				<img src="assets/login/logo.png" className="logo" ref="logo"/>
				<div ref="loginMenu" className="loginMenu">
					<button ref="btnSignIn" onClick={this.showSignIn}>SE CONNECTER</button><br />
					<button ref="btnSignUp" onClick={this.showSignUp}>CRÉER UN COMPTE</button>
				</div>
				<div ref="signInInput" className="signInInput">
					<input ref="inputEmail" type="text" disabled={!this.state.signIn} placeholder="ADRESSE EMAIL" /><br />
					<input ref="inputPass" type="password" disabled={!this.state.signIn} placeholder="MOT DE PASSE" />
				</div>
		  	</div>
		);
	}
}