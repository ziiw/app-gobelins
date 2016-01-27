// -----------------------------
// Imports

import {Utils as Utils} from "../../utils";
import React from "react";
import { Router, Route, browserHistory, Link } from 'react-router';
import TweenMax from 'gsap';



// -----------------------------
// Core
//
// TODO: Define timelines for all animations WIP

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {signIn: false, signUp: false, form: false};
	}

	componentDidMount() {
        //  This method is called when an instance of this component is created.
        this.showSplash();

        // Set form animation
        this.tlSignIn = new TimelineMax({paused: true})
		this.tlSignIn
			.addLabel("btnSignIn")
			.addLabel("btnSignUp", "+0.25")
			.addLabel("inputEmail", "+0.25")
			.addLabel("inputPass", "+0.5")
			.addLabel("btnForm")
			.to(this.refs.btnSignIn, 0.75, {y: -30, opacity: 0, ease: Power4.easeInOut}, "btnSignIn")
			.to(this.refs.btnSignUp, 0.5, {y: -30, opacity: 0, ease: Power4.easeInOut}, "btnSignUp")
			.to(this.refs.btnForm, 1, {opacity: 1, ease: Power4.easeInOut}, "btnForm")
			.to(this.refs.inputEmail, 0.75, {y: -25, opacity: 1, ease: Power4.easeOut}, "inputEmail")
			.to(this.refs.inputPass, 0.5, {y: -25, opacity: 1, ease: Power4.easeOut}, "inputPass")
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

	backMenu() {
		this.state = {signIn: false, signUp: false, form: false};

		this.tlSignIn.reverse();
	}

	showSignIn() {
		console.log("signIn");
		this.setState({signIn: true, form: true});

		this.tlSignIn.play();
	}

	showSignUp() {
		console.log("signup");

		this.setState({signUp: true, form: true});
	}

	render() {
		var handleSignIn = this.showSignIn.bind(this);
		var handleSignUp = this.showSignIn.bind(this);

		var handleBack = this.backMenu.bind(this);
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
					<input ref="btnCancel" className="btnCancel" onClick={handleBack} type="button" disabled={!this.state.form} value="RETOUR" />
					<input ref="btnValid" className="btnValid" type="button" disabled={!this.state.form} value="VALIDER" />
				</div>
		  	</div>
		);
	}
}