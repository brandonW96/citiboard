const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const User = new mongoose.Schema({
    userId: Number,
    firstName: String,
    lastName: String
    currentBoard: Number,
});

const Board = new mongoose.Schema({
    boardId: Number
    isAvailable: Boolean,
});

const Station = new mongoose.Schema({
    stationId: Number,
    name: String,
    boardList: [Board]
    available: Number,
});

// const Game = new mongoose.Schema({
//     gameStats: Object,
//     playerStats: Object
// });

// const Player = new mongoose.Schema({
//     name: String,
//     summonerId: Number,
//     points: Number,
//     recentGames: [Game]
//     // recentGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
// });

// const League = new mongoose.Schema({
//     name: String,
//     startTime: Date,
//     lastUpdate: Date,
//     players: [Player]
//     // players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
// });

// League.plugin(URLSlugs('name'));

mongoose.model('User', User);
mongoose.model('Board', Board);
mongoose.model('Station', Station);

mongoose.Promise = global.Promise;

// is the environment variable, NODE_ENV, set to PRODUCTION?
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 var fs = require('fs');
 var path = require('path');
 var fn = path.join(__dirname, 'config.json');
 var data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 var conf = JSON.parse(data);
 var dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/finalprojectv2';
}

mongoose.connect(dbconf);
