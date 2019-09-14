const UserController = require('./UserController');
const express = require('express');
const router = express.Router();

const criteriaCreate = require('./validate/create');
const criteriaDestroy = require('./validate/destroy');
const validate = require('./validate');

module.exports = (passport) => {
    router.get('/', UserController.index);
    router.post('/', criteriaCreate, validate, UserController.store);
    router.delete('/:id', criteriaDestroy, validate, UserController.destroy);
    router.post('/token', UserController.token);
    return router;
};