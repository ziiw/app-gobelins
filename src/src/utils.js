// -----------------------------
// Imports

import PouchDB from "pouchdb";
PouchDB.plugin(require('pouchdb-authentication'));




export let Utils = {
    
    auth: {
        login: (email, pass) => {
            let db = new PouchDB('http://127.0.0.1:5984/gobelins-app', {skipSetup: true});

            return new Promise((resolve, reject) => {
                db.login(email, pass)
                    .then((response) => {
                        if(response.ok){
                            resolve(response)
                        }
                    })
                    .catch((err) => {
                        if (err.name === 'unauthorized') {
                            // name or password incorrect
                            reject("Credentials incorrect");
                        } else {
                            // cosmic rays, a meteor, etc.
                            reject("Connexion error");
                        }
                    })
            });
        },

        signup: (email, pass, data) => {
            let metadata = {
                metadata: {
                    lastname: data.metadata.lastname,
                    firstname: data.metadata.firstname,
                    email: email,
                    roles: ["gobelins-app-user"]
                }
            }

            let db = new PouchDB('http://127.0.0.1:5984/gobelins-app', {skipSetup: true});

            return new Promise( (resolve, reject) => {
                db.signup(email, pass, metadata)
                    .then((response) => {
                        let id = data.metadata.firstname + data.metadata.lastname + Date.now();

                        let profil = {
                            _id: id,
                            lastname: data.metadata.lastname,
                            firstname: data.metadata.firstname,
                            location: data.metadata.location,
                            promoType: data.metadata.promoType,
                            promoYear: data.metadata.promoYear,
                            description: "",
                            job: data.metadata.job,
                            website: data.metadata.portfolio,
                            mail: email,
                            phone: data.metadata.phone,
                            picture: "../../assets/profil/default-profil-picture.png",
                            works: [
                                "../../assets/profil/work.png",
                                "../../assets/profil/work.png",
                                "../../assets/profil/work.png",
                                "../../assets/profil/work.png",
                                "../../assets/profil/work.png"
                            ],
                            type: "profil"
                        }

                        return db.put(profil)
                    })
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        if (err.name === 'conflict') {
                            // "batman" already exists, choose another username
                            reject("Already exists");
                        } else if (err.name === 'forbidden') {
                            // invalid username
                            reject("Invalid username");
                        } else {
                            // HTTP error, cosmic rays, etc.
                            reject("Http error / Error put");
                        }
                    })
            })
        },

        loginOld: (email, pass, cb) => {
            
            if(localStorage.token) {
                if (cb) {
                    cb(true);
                }

                // Utils.auth.returnLog(true);
                return;
            }

            let authLogin = new Promise((resolve, reject) => {
                Utils.auth.callDB(email, pass, (res) => {
                    resolve(res);
                })
            })

            authLogin.then((res) => {
                if (res.authenticated) {
                    localStorage.token = res.token;
                
                    if (cb) {
                        cb(true);
                    }

                    // Utils.auth.returnLog(true);
                } else {
                    
                    if (cb) {
                        cb(false);
                    }
                    
                    // Utils.auth.returnLog(false);
                }
            })
        },

        getToken: () => {
            return localStorage.token
        },

        logout: (cb) => {
            delete localStorage.token
            if (cb) cb()
            Utils.auth.returnLog(false)
        },

        loggedIn: () => {
            return !!localStorage.token
        },

        // returnLog: () => {},

        callDB: (email, pass, cb) => {
            
            // Call DB to check login

            setTimeout(() => {
                if (email === 'ok' && pass === 'ok') {
                    let data = {
                        authenticated: true,
                        token: Math.random().toString(36).substring(7)
                    };

                    cb(data);

                } else {
                    cb({ authenticated: false });
                }
            }, 0);
        }
    },
    
    hello: () => {
        console.log("hello");
    },

    ya: () => {
        console.log("yaaa");
    }
};