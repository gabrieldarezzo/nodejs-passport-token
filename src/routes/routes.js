const express = require('express');

module.exports = (app) => {
    app.use('/main', require('./main'));
    app.use('/users', require('./users'));
};