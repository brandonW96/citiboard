const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../db');
const Board = mongoose.model('Board');
const Station = mongoose.model('Station');
const User = mongoose.model('User');
router.post('/rent', function(req, res, next) {
	// TODO: select from a station to a board, then
	// get the board's ID, set that equal to the user's
	// currentBoard value to show that that user has that board
	// set isAvailable for that board to false
	// decrement the available value by 1 in that station
	let boardQuery = board.findOne({})
	// let stationQuery = station.findOne({stationId: req.body.station});
	// stationQuery.then(station) => {

	// }
	const selectedBoard = stationQuery.boardList[req.body.boardId];
	const user = req.query.user;
	user.currentBoard = selectedBoard.boardId;
	selectedBoard.isAvailable = false;
	station.available--;	
});

module.exports = router;
