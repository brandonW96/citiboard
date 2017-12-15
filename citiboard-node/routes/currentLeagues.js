const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../db');
const League = mongoose.model('League');


/* GET currentLeagues page. */
router.get('/currentLeagues', function(req, res, next) {
  League.find((err, leagues, count) => {
    if (err) {
      console.log(err);
      res.render('error');
    } else {
      leagues.sort(compareMap[req.query.sortBy]);
      res.render('currentLeagues', {league: leagues});
    }
  });
});

module.exports = router;
