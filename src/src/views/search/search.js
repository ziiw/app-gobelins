// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'
import Firebase from "firebase"



// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"



// -----------------------------
// Core

export default class Search extends React.Component {

	constructor(props, context) {
		super(props)

        this.state = {
            selected: "",
            job: [],
            city: [],
            cursus: [],
            promo: [],
            name: []
        }
	}

	componentDidMount() {
        //  This method is called whxen an instance of this component is created.
        //this.firebaseRef = new Firebase("https://shining-torch-7702.firebaseio.com/");
        //
        //this.firebaseRef.on("child_added", function(dataSnapshot) {
        //    this.ads.push(dataSnapshot.val())
        //    this.setState({
        //        ads: this.ads
        //    })
        //}.bind(this))
    }

    triggerCat(cat) {
        let that = this;

        this.setState({
            selected: cat
        });

        TweenMax.to(this.refs.cat, 0.25, {
            x: -15,
            opacity: 0,
            ease: Power4.easeIn,
            onComplete: function() {
                that.refs.cat.style.display = "none";
            }
        });

        this.refs.choice.style.display = "block";
        TweenMax.to(this.refs.choice, 0.25, {
            delay: 0.25,
            x: -15,
            opacity: 1,
            ease: Power4.easeOut
        });
    }

    triggerChoice(choice){
        let that = this;

        switch(this.state.selected){
            case "job":
                this.setState({job: choice});
                break;
            case "city":
                this.setState({city: choice});
                break;
            case "cursus":
                this.setState({cursus: choice});
                break;
            case "promo":
                this.setState({promo: choice});
                break;
        }

        TweenMax.to(this.refs.choice, 0.25, {
            x: 15,
            opacity: 0,
            ease: Power4.easeIn,
            onComplete: function() {
                that.refs.choice.style.display = "none";
                that.refs.cat.style.display = "block";
            }
        });

        TweenMax.to(this.refs.cat, 0.25, {
            delay: 0.25,
            x: 0,
            opacity: 1,
            ease: Power4.easeOut
        });
    }

    componentWillUnmount() {
        //this.firebaseRef.off();
    }

  	render() {
        let choices = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
        let that = this;

    	return (
    		<div id="search">
                <div className="filters">
                    <h2>Filtrer la recherche</h2>
                    <ul className="categories" ref="cat">
                        <li onClick={this.triggerCat.bind(this, "job")}><p className="left">Métier</p><p className="right">{this.state.job}</p></li>
                        <li onClick={this.triggerCat.bind(this, "city")}><p className="left">Ville</p><p className="right">{this.state.city}</p></li>
                        <li onClick={this.triggerCat.bind(this, "cursus")}><p className="left">Formation</p><p className="right">{this.state.cursus}</p></li>
                        <li onClick={this.triggerCat.bind(this, "promo")}><p className="left">Promo</p><p className="right">{this.state.promo}</p></li>
                        <li onClick={this.triggerCat.bind(this, "name")}><p className="left">Nom</p><p className="right">{this.state.name}</p></li>
                    </ul>

                    <ul className="choice" ref="choice">
                        {choices.map(function(item, id){
                            return <li key={id} onClick={that.triggerChoice.bind(that, item)}><p className="left">{item}</p></li>
                        })}
                    </ul>
                    <div className="clear"></div>
                </div>

                <div className="submit">Rechercher</div>
      		</div>
    	);
  	}
}