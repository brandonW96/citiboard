const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const Handlebars = require('hbs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const session = require('express-session');

const index = require('./routes/index');
const postLeague = require('./routes/postLeague');
const about = require('./routes/about');
const currentLeagues = require('./routes/currentLeagues');
const getLeagueSlug = require('./routes/get-league-slug');
const postLeagueSlug = require('./routes/post-league-slug');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


let sessionOptions = {
	secret: 'secret cookie thang',
	resave: true,
	saveUninitialized: true
};
app.use(session(sessionOptions));

// express-validator  middlware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      const namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;


    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use('/', index);
app.use('/', postLeague);
app.use('/', about);
app.use('/', currentLeagues);
app.use('/', getLeagueSlug);
app.use('/', postLeagueSlug);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/* Handlebar helpers */

// Define league path
Handlebars.registerHelper('leaguePath', function(slug) {
    return '/league/' + slug;
});

// Addition
Handlebars.registerHelper('add', function(num, numToAdd) {
    return num + numToAdd;
});

// Champion image path
Handlebars.registerHelper('imagePath', function(imageFile) {
		let path = "/images/champion/";
		path = path.concat(imageFile);
    return path;
});

// League-slug post path
Handlebars.registerHelper('slugPath', function(slug) {
		let path = "/league/";
		path = path.concat(slug);
    return path;
});
