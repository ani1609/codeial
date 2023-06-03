const express = require('express');
const router = express.Router();

const usersConrtoller = require('../contollers/users_controller');

router.get('/profile', usersConrtoller.profile);


module.exports = router;