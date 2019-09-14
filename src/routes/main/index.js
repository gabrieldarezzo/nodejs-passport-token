const MainController = require('./MainController');
const express = require('express');
const router = express.Router();


module.exports = (passport) => {
    // console.log(passport)
    // router.get('/', passport.authenticate('token'), MainController.index);
    router.get('/', passport.authenticate('token', { session: false }), MainController.index)

    return router;
};