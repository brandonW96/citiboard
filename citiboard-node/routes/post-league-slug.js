const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const k = require('../kindred');
const helper = require('../helper.js');

require('../db');
const League = mongoose.model('League');
const Player = mongoose.model('Player');

/* GET League page. */
router.post('/league/:slug', function(req, res, next) {


});

module.exports = router;
