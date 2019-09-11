const check = require('express-validator/check').check;

module.exports = [
    check('id', 'Please check name field.')
        .isAlphanumeric()
        .isLength({min: 24}),
];