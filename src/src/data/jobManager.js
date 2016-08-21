// -----------------------------
// Import

import PouchDB from "pouchdb";



// -----------------------------
// Core

export default class JobManager {

    constructor(data) {
        this.db = new PouchDB('http://127.0.0.1:5984/gobelins-app');
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

        let p1 = this.db.info();
        let p2 = this.db.put(job);

        Promise.all([p1, p2]).then((results) => {
            console.log("👌 Job added !");
        })
    }

    getAll() {
        return this.db.query("job/all");
    }

    getById(id) {
        return this.db.get(id);
    }
}