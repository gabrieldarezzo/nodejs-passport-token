const UserController = require('./UserController');
const express = require('express');
const router = express.Router();


router.get('/', UserController.index);
router.post('/', UserController.store);
router.delete('/:id', UserController.destroy);

module.exports = router;