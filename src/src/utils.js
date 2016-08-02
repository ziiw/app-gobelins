export let Utils = {

    auth: {
        login: (email, pass, cb) => {
            
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