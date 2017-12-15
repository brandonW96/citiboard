The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(___TODO__: your project name_)

# MyLeague

## Overview

(___TODO__: a brief one or two paragraph, high-level description of your project_)

Though the computer game League of Legends has an in-game ranking system, this system does not allow all players to compete together or in a long-term fashion. Players can only play with other players who are of a similar in-game rank. Additionally, there is no long-term ranking or ladder system implemented in League of Legends. MyLeague solves this lack of inclusive, long-term competition.

MyLeague is a web app that will allow players to create a League with their friends, regardless each player's rank. can register and login. In this game, players' position in the league will be directly based off their ranked-game performances, not League of Legends' in-game ELO system. This league will allow players to compete with their friends over long periods of time and see who improves the most relative to his or her rank.


## Data Model

(___TODO__: a description of your application's data and their relationships to each other_)

The application will store Leagues, Players and Matches

* Leagues will have multiple players  (via references)
* Players will save multiple matches (by references)
* Games will contain match data in an object

(___TODO__: sample documents_)

An Example League:

```javascript
const League = new mongoose.Schema({
    name: String,
    startTime: Date,
    lastUpdate: Date,
    players: [Player]
});
```

An Example Player

```javascript
const Player = new mongoose.Schema({
    name: String,
    summonerId: Number,
    points: Number,
    recentGames: [Game]
});
```

An Example Game

```javascript
const Game = new mongoose.Schema({
    gameStats: Object,
    playerStats: Object
});
```

## [Link to Commented First Draft Schema](db.js)

(___TODO__: create a first draft of your Schemas in db.js and link to it_)

## Wireframes

(___TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/ - Home page, users will be able to submit new Leagues

![home](documentation/home.jpg)

/currentLeagues - page to display all the current leagues being tracked

![currentleagues](documentation/currentleagues.jpg)

/:league-name-slug - page for displaying a League and the players' standings/statistics

![league slug](documentation/league-slug.jpg)

## Site map

(___TODO__: draw out a site map that shows how pages are related to each other_)

![Site Map](documentation/site-map.jpg)


## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as a user, I can enter my player name and other players' names to form a league
2. as a user, I can view a list of all the current leagues that are occuring
3. as a user, I can view the standings of a league and players' statistics
4. as a user, I can read about how the site works


## Research Topics

(___TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (6 points) External-API
    * I'm going to be using the Riot-Games API
    * This api has a lot of information and multiple endpoints must be called to gather the information needed for this web app
    * This API was challenging to use (many asynchronous calls), and the data I am gathering will be constantly changing as users player more games in real life, so I assigned this to 6 points.
* (2 points) Use a CSS framework
    * I will be using BootStrap throughout this site

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit_)


## [Link to Initial Main Project File](app.js)

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [Riot Games API](https://developer.riotgames.com/)
2. [Kindred API](https://www.npmjs.com/package/kindred-api)
3. [BootStrap](http://getbootstrap.com/css/)
