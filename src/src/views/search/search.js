// -----------------------------
// Imports

import {Utils as Utils} from "../../utils"
import React from "react"
import { Router, Route, browserHistory, Link } from 'react-router'




// -----------------------------
// Components

import BarMenu from "../../components/barMenu/bar-menu.js"



// -----------------------------
// Managers

import UserManager from "../../data/userManager"
const UM = new UserManager();



// -----------------------------
// Core

export default class Search extends React.Component {

	constructor(props, context) {
		super(props)

        this.state = {
            selected: "",
            choice: [],
            job: [],
            city: [],
            cursus: [],
            promo: [],
            name: [],
            lists: {
                job: [],
                city: [],
                cursus: [],
                promo: [],
                names: []
            }
        }
	}

	componentDidMount() {
        let lists = {
            job: [],
            city: [],
            cursus: [],
            promo: [],
            names: []
        };

        UM.getAll().then((res) => {
            res.rows.map((resp, index) => {
                let user = resp.value;

                if(lists.job.indexOf(user.job) == -1)
                    lists.job.push(user.job);

                if(lists.city.indexOf(user.location) == -1)
                    lists.city.push(user.location);

                if(lists.cursus.indexOf(user.promoType) == -1)
                    lists.cursus.push(user.promoType);

                if(lists.promo.indexOf(user.promoYear) == -1)
                    lists.promo.push(user.promoYear);

                lists.names.push(user.lastname + " " + user.firstname);
            })

            this.setState({lists: lists});
        })
    }

    triggerCat(cat) {
        let that = this;

        let choice;

        switch(cat){
            case "job":
                choice = this.state.lists.job;
                break;
            case "city":
                choice = this.state.lists.city;
                break;
            case "cursus":
                choice = this.state.lists.cursus;
                break;
            case "promo":
                choice = this.state.lists.promo;
                break;
            case "name":
                choice = this.state.lists.names;
                break;
        }

        if(choice.indexOf("< Back") == -1)
            choice.unshift("< Back");

        this.setState({selected: cat, choice: choice});

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

        if(choice == "< Back"){
            choice = "";
        }

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
            case "name":
                this.setState({name: choice});
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
                        {this.state.choice.map(function(item, id){
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