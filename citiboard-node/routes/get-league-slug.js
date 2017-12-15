const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const k = require('../kindred');
const helper = require('../helper.js');

require('../db');
const League = mongoose.model('League');
const Game = mongoose.model('Game');

/* GET League page. */
router.get('/league/:slug', function(req, res, next) {


});

module.exports = router;
