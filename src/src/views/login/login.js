// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'
import {TweenMax, TimelineMax} from 'gsap'



// -----------------------------
// Core

export default class Login extends React.Component {

	constructor(props, context) {
		super(props)

		this.state = {connected: Utils.auth.loggedIn(), signIn: false, signUp: false, form: false}

		this.updateAuth = this.updateAuth.bind(this)
	}

	componentDidMount() {
        //  This method is called whxen an instance of this component is created.
        Utils.auth.change = this.updateAuth()
        Utils.auth.login()

        if(this.state.connected){
        	this.props.history.push("/home")
        }else{
        	this.setAnims()
        	this.animEntry()
        }
    }

    updateAuth(loggedIn) {
		this.setState({connected: loggedIn})
	}

    setAnims() {
    	// Set signIn animation
        this.tlSignIn = new TimelineMax({paused: true})
		this.tlSignIn
			.addLabel("btnSignIn")
			.addLabel("btnSignUp", "+0.25")
			.addLabel("inputEmail", "+0.25")
			.addLabel("inputPass", "+0.5")
			.addLabel("btnForm")
			.to(this.refs.loginMenu, 0.1, {css:{"z-index": 100}})
			.to(this.refs.signInInput, 0.1, {css:{"z-index": 1000}})
			.to(this.refs.btnSignIn, 0.75, {y: -35, opacity: 0, ease: Power4.easeInOut}, "btnSignIn")
			.to(this.refs.btnSignUp, 0.5, {y: -35, opacity: 0, ease: Power4.easeInOut}, "btnSignUp")
			.to(this.refs.btnForm, 1, {opacity: 1, ease: Power4.easeInOut}, "btnForm")
			.to(this.refs.inputEmail, 0.75, {y: -30, opacity: 1, ease: Power4.easeOut}, "inputEmail")
			.to(this.refs.inputPass, 0.5, {y: -30, opacity: 1, ease: Power4.easeOut}, "inputPass")

		let top = this.refs.logo.offsetTop
		let listInputs = document.querySelectorAll(".signUpInput input")

		// Set signUp animation
		this.tlSignUp = new TimelineMax({paused: true})
		this.tlSignUp
			.addLabel("logo")
			.addLabel("btnSignIn")
			.addLabel("btnSignUp", "+0.25")
			.addLabel("btnForm", "+0.25")
			.addLabel("inputs", "+0.5")
			.to(this.refs.logo, 0.75, {y: -top, scaleX: 0.6, scaleY: 0.6, ease: Power4.easeInOut}, "logo") // css:{top: "120px", width: "100px"}
			.to(this.refs.btnSignIn, 0.75, {y: -35, opacity: 0, ease: Power4.easeInOut}, "btnSignIn")
			.to(this.refs.btnSignUp, 0.5, {y: -35, opacity: 0, ease: Power4.easeInOut}, "btnSignUp")
			.to(this.refs.btnForm, 1, {opacity: 1, ease: Power4.easeInOut}, "btnForm")
			.staggerTo(listInputs, 0.25, {y: -35, opacity: 1, ease: Power4.easeOut}, 0.07, "inputs")
    }

	animEntry() {
		TweenMax.to(this.refs.logo, 1.5, {
			y: -30,
			ease: Power4.easeInOut
		})

		TweenMax.to(this.refs.btnSignIn, 1, {
			delay: 0.75,
			y: -25,
			opacity: 1,
			ease: Power4.easeOut
		})

		TweenMax.to(this.refs.btnSignUp, 0.75, {
			delay: 1,
			y: -25,
			opacity: 1,
			ease: Power4.easeOut
		})
	}

	showSignIn() {
		this.setState({signIn: true, form: true})
		this.tlSignIn.play()
	}

	showSignUp() {
		this.setState({signUp: true, form: true})
		this.tlSignUp.play()
	}

	backMenu() {

		if(this.state.signIn){
			// If come back from signIn
			this.tlSignIn.reverse()
		}else{
			// If come back from signUp
			this.tlSignUp.reverse()	
		}

		this.state = {signIn: false, signUp: false, form: false}
	}

	handleSubmit(event) {
		event.preventDefault()

		if(this.state.signIn){
			const email = this.refs.inputEmail.value
			const pass = this.refs.inputPass.value

			Utils.auth.login(email, pass, (loggedIn) => {
				if (!loggedIn)
					return this.setState({ error: true })

				this.props.history.push('/home')
			})
		}else{
			// let email = this.refs.inputEmail.value
			// let pass = this.refs.inputPass.value
		}
	}

	render() {
		let handleSignIn = this.showSignIn.bind(this)
		let handleSignUp = this.showSignUp.bind(this)
		let handleBack = this.backMenu.bind(this)
		let handleSubmit = this.handleSubmit.bind(this)

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
				<div ref="signUpInput" className="signUpInput">
					<input ref="inputLastname" type="text" disabled={!this.state.signUp} placeholder="NOM" /><br />
					<input ref="inputFirstname" type="text" disabled={!this.state.signUp} placeholder="PRÉNOM" /><br />
					<input ref="inputPhoto" type="text" disabled={!this.state.signUp} placeholder="PHOTO" /><br />
					<input ref="inputEmailSignUp" type="text" disabled={!this.state.signUp} placeholder="ADRESSE EMAIL" /><br />
					<input ref="inputPassSignUp" type="password" disabled={!this.state.signUp} placeholder="MOT DE PASSE" />
					<input ref="inputPhone" type="text" disabled={!this.state.signUp} placeholder="TÉLÉPHONE" /><br />
					<input ref="inputPromo" type="text" disabled={!this.state.signUp} placeholder="FORMATION / PROMO" /><br />
					<input ref="inputCity" type="text" disabled={!this.state.signUp} placeholder="VILLE" /><br />
					<input ref="inputJob" type="text" disabled={!this.state.signUp} placeholder="MÉTIER" /><br />
					<input ref="inputWeb" type="text" disabled={!this.state.signUp} placeholder="SITE WEB / BLOG" /><br />
				</div>
				<div ref="btnForm" className="btnForm">
					<input ref="btnCancel" className="btnCancel" onClick={handleBack} type="button" disabled={!this.state.form} value="RETOUR" />
					<input ref="btnValid" className="btnValid" onClick={handleSubmit} type="button" disabled={!this.state.form} value="VALIDER" />
				</div>
		  	</div>
		)
	}
}