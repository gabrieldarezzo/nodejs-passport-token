const check = require('express-validator/check').check;

module.exports = [
    check('name', 'Please check name field.')
        .isAlphanumeric()
        .isLength({min: 3}),        
    check('username', 'Please check username field.')
        .isAlphanumeric()
        .isLength({min: 3}),
    check('password', 'Please check password field.')
        .isAlphanumeric()
        .isLength({min: 4}),
];