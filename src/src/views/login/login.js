// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';
import TweenMax from 'gsap';



// -----------------------------
// Core
//
// TODO: Define timelines for all animations

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {signIn: false, signUp: false, form: false};
	}

	componentDidMount() {
        //  This method is called when an instance of this component is created.
        this.showSplash();
    }

    showSplash() {

    	// Only if not already connected else go to home
    	this.animEntry();
    }

	animEntry() {
		TweenMax.to(this.refs.logo, 1.5, {
			y: -30,
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

	showSignIn() {
		console.log("signIn");
		this.setState({signIn: true, form: true});

		// Hide button menuLogin
		TweenMax.to(this.refs.btnSignIn, 0.75, {
			y: -30,
			opacity: 0,
			ease: Power4.easeOut
		});

		TweenMax.to(this.refs.btnSignUp, 0.5, {
			delay: 0.25,
			y: -30,
			opacity: 0,
			ease: Power4.easeOut
		});

		// Show signIn form
		TweenMax.to(this.refs.inputEmail, 0.75, {
			delay: 0.25,
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

		TweenMax.to(this.refs.btnForm, 0.75, {
			delay: 0.25,
			opacity: 1,
			ease: Power4.easeOut
		});
	}

	showSignUp() {
		console.log("signup");

		this.setState({signUp: true, form: true});
	}

	render() {
		var handleSignIn = this.showSignIn.bind(this);
		var handleSignUp = this.showSignIn.bind(this);
		return (
			<div id="login">
				<img src="assets/login/logo.png" className="logo" ref="logo"/>
				<div ref="loginMenu" className="loginMenu">
					<button ref="btnSignIn" onClick={handleSignIn}>SE CONNECTER</button><br />
					<button ref="btnSignUp" onClick={handleSignUp}>CRÉER UN COMPTE</button>
				</div>
				<div ref="signInInput" className="signInInput">
					<input ref="inputEmail" type="text" disabled={!this.state.signIn} placeholder="ADRESSE EMAIL" /><br />
					<input ref="inputPass" type="password" disabled={!this.state.signIn} placeholder="MOT DE PASSE" />
				</div>
				<div ref="btnForm" className="btnForm">
					<input ref="btnCancel" className="btnCancel" type="button" disabled={!this.state.form} value="RETOUR" />
					<input ref="btnValid" className="btnValid" type="button" disabled={!this.state.form} value="VALIDER" />
				</div>
		  	</div>
		);
	}
}