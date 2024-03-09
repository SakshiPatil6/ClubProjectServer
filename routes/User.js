const express = require('express');
const router = express.Router();

const {adminAuthentication, clubReqForm, readClubReqForm} = require('../controllers/User.js');

router.post('/adminAuthentication', adminAuthentication);
router.post('/ClubRequestForm', clubReqForm);
router.post('/readClubRequestForm', readClubReqForm);

module.exports = router;