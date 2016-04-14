// -----------------------------
// Imports

import {Utils as Utils} from "../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'



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
            menu: false
        }

        this.isMenu = false;
	}

	componentDidMount() {
        //  This method is called when an instance of this component is created.
        let width = window.innerWidth;
        let height = window.innerHeight;

        let app = document.querySelector("#app");
        app.style.width = width;
        app.style.height = height;

        this.setBarMenu(this.props);
    }

    componentWillReceiveProps(nextProps) {
    	this.setBarMenu(nextProps);
    }

    setBarMenu(nextProps) {
    	let route = nextProps.routes[1].path;

    	switch(route){
    		case "home":
    			this.setState({title: "Annonces", menu: true});
    			break;
    		case "single/:ad":
    			this.setState({title: "Annonces", menu: false});
    			break;
    		case "add":
    			this.setState({title: "Poster une annonce", menu: true});
    			break;
    		case "events":
    			this.setState({title: "Évènements", menu: true});
    			break;
    		case "events/:id":
    			this.setState({title: "Évènements", menu: false});
    			break;
    		case "search":
    			this.setState({title: "Annuaire", menu: true});
    			break;
    	}
    }

    showMenu() {
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
	    		ease: Power4.easeOut
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
					<BarMenu title={this.state.title} menu={this.state.menu} showMenu={this.showMenu.bind(this)}/>
					{this.props.children}
				</section>
		  	</div>
		);
	}
}