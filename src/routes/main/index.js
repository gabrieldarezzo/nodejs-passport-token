const MainController = require('./MainController');
const express = require('express');
const router = express.Router();


router.get('/', MainController.index);



module.exports = router;