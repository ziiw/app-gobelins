// -----------------------------
// Import

import PouchDB from "pouchdb";



// -----------------------------
// Core

export default class JobMod {

    constructor(data) {
        this.job = data.job;
        this.firme = data.firme;
        this.location = data.location;
        this.visuel = data.visuel;
        this.contract = data.contract;
        this.secteur = data.secteur;
        this.fonction = data.fonction;
        this.money = data.money;
        this.description = data.description;
        this.author = data.author; // pass from front (detect who is using by profil.getInfo())

        this.timestamp = new Date();
        this.type = "job";
    }

    // createJob(data) {
    //     this.job = data.job;
    //     this.firme = data.firme;
    //     this.location = data.location;
    //     this.visuel = data.visuel;
    //     this.contract = data.contract;
    //     this.secteur = data.secteur;
    //     this.fonction = data.fonction;
    //     this.money = data.money;
    //     this.description = data.description;
    //     this.timestamp = new Date();
    //     this.author = data.author; // pass from front (detect who is using by profil.getInfo())
    //     this.type = "job";
    // }

    persist() {
        let db = new PouchDB('gobelins-app');

        db.info().then((info) => {
            // Ready to use db

            console.log(info, this);
        })
    }
}