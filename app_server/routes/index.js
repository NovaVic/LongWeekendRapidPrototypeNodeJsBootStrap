var express = require('express');
var router = express.Router();


var mainCtrl = require('../controllers/index');
var userCreationCtrl = require('../controllers/newuser');
var userCtrl = require('../controllers/user');
var commentsCtrl = require('../controllers/comments');
var therapySessionCtrl = require('../controllers/session_booked');
var therapistsCtrl = require('../controllers/therapists-of-the-month');

/* GET home page. */
router.get('/', mainCtrl.contentAsSecondAidHomePage);
router.get('/newuser', userCreationCtrl.newuser);
router.get('/comments', commentsCtrl.comments);


router.get('/session_booked', therapySessionCtrl.session_booked);
router.get('/therapists_of_the_month', therapistsCtrl.therapistsOfTheMonth);


module.exports = router;
