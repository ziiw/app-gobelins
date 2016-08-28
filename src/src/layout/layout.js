// -----------------------------
// Imports

import {Utils as Utils} from "../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'




// -----------------------------
// Managers

import UserManager from "../data/userManager";
const UM = new UserManager();




// -----------------------------
// Components

import BarMenu from "../components/barMenu/bar-menu"
import Menu from "../components/menu/menu"




// -----------------------------
// Core

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            menu: false,
            showNav: false
        }

        this.isMenu = false;
    }

    componentDidMount() {
        // Check login
        UM.getCurrentUser()
            .then((res) => {
                if(!res || res.error){
                    this.props.history.push('/');
                }
            })

        let width = window.innerWidth;
        let height = window.innerHeight;

        let app = document.querySelector("#app");
        app.style.width = width;
        app.style.height = height;

        this.setBarMenu(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // Each change of route
        if(nextProps.route.path != "/"){
            UM.getCurrentUser()
                .then((res) => {
                    if(!res || res.error){
                        this.props.history.push('/');
                    }
                })
        }

        this.setBarMenu(nextProps);
    }

    componentDidUpdate(prevProps, prevState) {
        // Check if menu has to be open or not
        let currentPath = this.props.location.pathname;
        let prevPath = prevProps.location.pathname;

        if(currentPath != prevPath && this.isMenu){
            this.showMenu();
        }
    }

    setBarMenu(nextProps) {
        let route = nextProps.routes[1].path;

        switch(route){
            case "home":
                this.setState({title: "Annonces", menu: true, showNav: true});
                break;
            case "single/:ad":
                this.setState({title: "Annonces", menu: false, showNav: true});
                break;
            case "add":
                this.setState({title: "Poster une annonce", menu: true, showNav: true});
                break;
            case "events":
                this.setState({title: "Évènements", menu: true, showNav: true});
                break;
            case "event/:id":
                this.setState({title: "Évènements", menu: false, showNav: true});
                break;
            case "search":
                this.setState({title: "Annuaire", menu: true, showNav: true});
                break;
            case "profil/":
                this.setState({title: "Profil", menu: true, showNav: true});
                break;
            case "result/":
                this.setState({title: "Résultat", menu: false, showNav: true});
                break;
            default: 
                this.setState({title: "Profil", menu: true, showNav: false});
                break;
        }
    }

    showMenu() {
        let content = this.refs.content;
        if(!this.isMenu){
            this.isMenu = true;
            TweenMax.to(this.refs.content, 0.5, {
                x: 250,
                ease: Power3.easeOut
            })
        }else{
            this.isMenu = false;
            TweenMax.to(this.refs.content, 0.5, {
                x: 0,
                ease: Power4.easeOut,
                onComplete: () => {
                    content.style = "";
                }
            })
        }
    }

    render() {

        // {this.props.children}
        // To render the component required by the routing
        return (
            <div id="layout">
                <Menu />
                <section className="main" ref="content">
                    <BarMenu title={this.state.title} menu={this.state.menu} showMenu={this.showMenu.bind(this)} showNav={this.state.showNav}/>
                    {this.props.children}
                </section>
            </div>
        );
    }
}