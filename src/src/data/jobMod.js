export default class JobMod {

    constructor() {
        // this.job = "",
        // this.firme = "",
        // this.location = "",
        // this.visuel = "",
        // this.contract = "",
        // this.secteur = "",
        // this.fonction = "",
        // this.remuneration = "",
        // this.description = "",
        // this.timestamp = new Date(),
        // this.author = 0,
        // this.type = "job"
    }

    createJob(data) {
        this.job = data.job;
        this.firme = data.firme;
        this.location = data.location;
        this.visuel = data.visuel;
        this.contract = data.contract;
        this.secteur = data.secteur;
        this.fonction = data.fonction;
        this.remuneration = data.remuneration;
        this.description = data.description;
        this.timestamp = new Date();
        this.author = data.author; // pass from front (detect who is using by profil.getInfo())
        this.type = "job";
    }

    saveJob() {
        
    }
}