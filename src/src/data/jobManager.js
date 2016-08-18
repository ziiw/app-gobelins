// -----------------------------
// Import

import PouchDB from "pouchdb";



// -----------------------------
// Core

export default class JobManager {

    constructor(data) {
        this.db = new PouchDB('gobelins-app');
    }

    new(data) {
        let job = {
            job: data.job,
            firme: data.firme,
            location: data.location,
            visuel: data.visuel,
            contract: data.contract,
            secteur: data.secteur,
            fonction: data.fonction,
            money: data.money,
            description: data.description,
            author: data.author, // pass from front (detect who is using by profil.getInfo())
            timestamp: new Date(),
            type: "job"
        }

        this.db.info().then((info) => {
            // Ready to use db
            console.log(info, this);
        })
    }

    // ERROR: getting all docs. Secondary index not know
    getAll() {
        const map = (doc) => {
            if(doc.type == "job"){
                emit(doc._id, doc);
            }
        }

        this.db.query(map, {include_docs: true}).then((res) => {
            console.log(res)
        })
    }
}