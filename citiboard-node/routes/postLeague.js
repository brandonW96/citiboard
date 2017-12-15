const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const k = require('../kindred');

require('../db');

const League = mongoose.model('League');
const Player = mongoose.model('Player');

/* Post home page. */
router.post('/', function(req, res, next) {

});

module.exports = router;
