var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user');

/* Route for creating new user */
router.post('/user', userCtrl.userCreate);
/* Route for retrieving user */
router.get('/userSearch', userCtrl.userSearch);

module.exports = router;
