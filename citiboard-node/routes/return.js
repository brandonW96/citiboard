const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../db');

router.get('/return', function(req, res, next) {
	// TODO: get the station and add the boardId to that station
	// set user's current board value to null
	// increment the station's available board list
	const station = req.query.station;
	const user = req.query.user;
	const selectedBoard = user.currentBoard;
	station.boardList.push(selectedBoard);
	station.available++;
	user.currentBoard = null;
});

module.exports = router;
