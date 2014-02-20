'use strict';

module.exports = {
    db: "mongodb://localhost/crowdshipper",
    app: {
        name: "CrowdShipper - Development"
    },
    facebook: {
        clientID: "478257328941692",
        clientSecret: "5c760b432c8524e3c06c22337279a8d7",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "umUJfNFaSkiUmJYo3y2XDw",
        clientSecret: "eOXsJyWebKYlnWhgPDMxI8HedpyDZSPnlZRWVBeTlg",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}