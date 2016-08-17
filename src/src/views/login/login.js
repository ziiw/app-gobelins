// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'
import TweenMax from 'gsap'
import CanvasVideo from "canvasvideo.js";



// -----------------------------
// Globals

let timerSplash = 0;



// -----------------------------
// Core

export default class Login extends React.Component {

    constructor(props, context) {
        super(props)

        this.state = {
            showLogo: false,
            signIn: false,
            signUp: false,
            form: false
        }
    }

    componentDidMount() {
        if(!window.firstStartDone){
            this.startSplashscreen();
        }else{
            this.setAnims();
            this.animEntry();
        }
        // Utils.auth.login(null, null, (loggedIn) => {
        //     console.log(loggedIn)
        //     if(loggedIn){
        //         this.props.history.push("/home");
        //     }else{
        //         if(!window.firstStartDone){
        //             this.startSplashscreen();
        //         }else{
        //             this.setAnims();
        //             this.animEntry();
        //         }
        //     }
        // })
    }

    startSplashscreen() {

        // Fired when video is ended
        let onEnded = () => {
            window.firstStartDone = true;
            this.setAnims();
            this.animEntry();
        }

        // Options to canvas video (autoplay when buffer is ok) 
        let options = {
            xhr: false,
            bufferTime: 6,
            audio: false,
            preload: true,
            autoplay: true
        };

        let video = new CanvasVideo('assets/splash/screen.mp4', options);
        video.width = window.innerWidth;
        video.height = window.innerHeight;

        let container = document.querySelector("#splash");
        container.appendChild(video.element);
        video.addEventListener('ended', this.onEndedSplash.bind(this));
        video.addEventListener('timeupdate', this.onUpdateSplash.bind(this))
    }

    onUpdateSplash(e) {
        let time = e.target.currentTime;

        if(timerSplash > 0.7){
            this.setState({showLogo: true});
            delete e.target._listeners.timeupdate;
        }else{
             timerSplash = time;
        }
    }

    onEndedSplash() {
        document.querySelector("#splash").removeChild(document.querySelector("canvas"));
        window.firstStartDone = true;
        this.setAnims();
        this.animEntry();
    }

    setAnims() {
        let disableButtons = () => {
            this.refs.btnSignIn.style.display = "none";
            this.refs.btnSignUp.style.display = "none";
        }

        // Set signIn animation
        this.tlSignIn = new TimelineMax({paused: true, onComplete: disableButtons})
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

        let top = this.refs.logo.offsetTop;
        let listInputs = document.querySelectorAll(".signUpInput input");

        // Set signUp animation
        this.tlSignUp = new TimelineMax({paused: true, onComplete: disableButtons})
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
            y: "-=30px",
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
        this.setState({signIn: true, form: true, showLogo: true})
        this.tlSignIn.play()
    }

    showSignUp() {
        this.setState({signUp: true, form: true, showLogo: true});
        this.tlSignUp.play();
    }

    backMenu() {

        if(this.state.signIn){
            // If come back from signIn
            this.tlSignIn.reverse()
        }else{
            // If come back from signUp
            this.tlSignUp.reverse() 
        }

        this.refs.btnSignIn.style.display = "inline";
        this.refs.btnSignUp.style.display = "inline";

        this.setState({signIn: false, signUp: false, form: false, showLogo: true});
    }

    handleSubmit(event) {
        event.preventDefault()

        if(this.state.signIn){
            let email = this.refs.inputEmail.value
            let pass = this.refs.inputPass.value

            Utils.auth.login(email, pass)
                .then((res) => {
                    this.props.history.push('/home')
                })
                .catch((err) => {
                    this.setState({ error: true })
                })
        }else{
            let metadata = {
                lastname: this.refs.inputLastname.value,
                firstname: this.refs.inputFirstname.value,
                email: this.refs.inputEmailSignUp.value,
                pass: this.refs.inputPassSignUp.value,
                photo: this.refs.inputPhoto.value,
                phone: this.refs.inputPhone.value,
                promo: this.refs.inputPromo.value,
                city: this.refs.inputCity.value,
                job: this.refs.inputCity.value,
                portfolio: this.refs.inputWeb.value
            }

            Utils.auth.signup(metadata.email, metadata.pass, {metadata: metadata})
                .then((res) => {
                    console.log(res)
                    if(res.ok){
                        this.props.history.push('/home');
                    }else{

                    }
                })
        }
    }

    render() {
        let handleSignIn = this.showSignIn.bind(this)
        let handleSignUp = this.showSignUp.bind(this)
        let handleBack = this.backMenu.bind(this)
        let handleSubmit = this.handleSubmit.bind(this)

        let logoClass = (this.state.showLogo) ? "logo show" : "logo";

        return (
            <div id="login" ref="login">
                <div id="splash"></div>

                <img src="assets/login/logo.png" className={logoClass} ref="logo"/>

                <div ref="loginMenu" className="loginMenu">
                    <button ref="btnSignIn" onClick={handleSignIn}>SE CONNECTER</button><br />
                    <button ref="btnSignUp" onClick={handleSignUp}>CRÉER UN COMPTE</button>
                </div>
                <div ref="signInInput" className="signInInput">
                    <input ref="inputEmail" type="text" disabled={!this.state.signIn} placeholder="ADRESSE EMAIL" /><br />
                    <input ref="inputPass" type="password" disabled={!this.state.signIn} placeholder="MOT DE PASSE" />
                </div>
                <div ref="signUpInput" className="signUpInput">
                    <input ref="inputLastname" type="text" disabled={!this.state.signUp} placeholder="NOM" />
                    <input ref="inputFirstname" type="text" disabled={!this.state.signUp} placeholder="PRÉNOM" />
                    <input ref="inputEmailSignUp" type="text" disabled={!this.state.signUp} placeholder="ADRESSE EMAIL" />
                    <input ref="inputPassSignUp" type="password" disabled={!this.state.signUp} placeholder="MOT DE PASSE" />
                    <input ref="inputPhoto" type="text" disabled={!this.state.signUp} placeholder="PHOTO" />
                    <input ref="inputPhone" type="text" disabled={!this.state.signUp} placeholder="TÉLÉPHONE" />
                    <input ref="inputPromo" type="text" disabled={!this.state.signUp} placeholder="FORMATION / PROMO" />
                    <input ref="inputCity" type="text" disabled={!this.state.signUp} placeholder="VILLE" />
                    <input ref="inputJob" type="text" disabled={!this.state.signUp} placeholder="MÉTIER" />
                    <input ref="inputWeb" type="text" disabled={!this.state.signUp} placeholder="SITE WEB / BLOG" />
                </div>
                <div ref="btnForm" className="btnForm">
                    <div ref="btnCancel" className="btnCancel" onClick={handleBack}>RETOUR</div> 
                    <div ref="btnValid" className="btnValid" onClick={handleSubmit}>VALIDER</div> 
                </div>
            </div>
        )
    }
}