// -----------------------------
// Imports

import PouchDB from "pouchdb";
PouchDB.plugin(require('pouchdb-authentication'));




export let Utils = {
    
    init: () => {
        Utils.db = new PouchDB('http://127.0.0.1:5984/gobelins-app', {skipSetup: true});
    },

    auth: {
        login: (email, pass) => {
            let db = new PouchDB('http://127.0.0.1:5984/gobelins-app', {skipSetup: true});

            // db.login(email, pass, function (err, response) {
            //     if (err) {
            //         if (err.name === 'unauthorized') {
            //             // name or password incorrect
            //             console.warn("Credentials incorrect");
            //         } else {
            //             // cosmic rays, a meteor, etc.
            //             console.warn("Connexion error");
            //         }
            //     }
            //     console.log(response);
            // });

            return false;
        },

        signup: (email, pass, data) => {
            let metadata = {
                metadata: {
                    lastname: data.lastname,
                    firstname: data.firstname,
                    email: email,
                    roles: "gobelins-app"
                }
            }

            console.log(metadata)

            let db = new PouchDB('http://127.0.0.1:5984/gobelins-app', {skipSetup: true});

            db.signup(email, pass, metadata, function (err, response) {
                if (err) {
                    if (err.name === 'conflict') {
                        // "batman" already exists, choose another username
                        console.warn("Already exists");
                    } else if (err.name === 'forbidden') {
                        // invalid username
                        console.warn("Invalid username");
                    } else {
                        // HTTP error, cosmic rays, etc.
                        console.warn("Http error");
                    }
                }

                console.log(response)
            });
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