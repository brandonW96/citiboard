const cdata = require('./championId.json');

function MatchPerformance(kda) {
  if (kda < .499){
    return -4;
  } else if (kda < 1) {
    return -3;
  } else if (kda < 1.499) {
    return -2;
  } else if (kda < 2) {
    return -1;
  } else if (kda < 2.499) {
    return 0;
  } else if (kda < 3) {
    return 1;
  } else if (kda < 3.499) {
    return 2;
  } else if (kda < 4) {
    return 3;
  } else {
    return 4;
  }
}

/*
Returns the participant of a summoner id given a match object
*/
function getParticipantId(match, summonerId) {
  let participantId;
  match.participantIdentities.forEach((participantObject) => {
    if (participantObject.player.summonerId == summonerId) {
      participantId = participantObject.participantId;
    }
  });
  return participantId;
}

/*
Returns true if a summoner won the match
Returns false if the summoner lost the match
*/
function gameWin(match, summonerId) {
  const id = getParticipantId(match, summonerId);
  match.participants.forEach((participant) => {
    if (participant.participantId == id) {
      return participant.stats.winner;
    }
  });
}

/*
Returns the amount of points the player will change based on the following formula:
    If Win:
    Point Change = 20 + Match Performance

    If Loss:
    Point Change = -10 + Match Performance

    Match Performance is calculated by first calculating kill-death-assist ratio:
      k-d-a ratio = (kills + assists)/deaths

    KDA ratio is then mapped to a number based on the following scale to
    get Match Performance:
    0 - 4.999: -4
    .5 - .999: -3
    1 - 1.499: -2
    1.5 - 1.999: -1
    2 - 2.499: 0
    2.5 - 2.999: 1
    3 - 3.499: 2
    3.5 - 3.999: 3
    >= 4: 4

*/
function getPointChange(match, summonerId) {
  const id = getParticipantId(match, summonerId);
  let pointChange;
  // match.participants.forEach((participant) => {
  for (let i = 0; i < match.participants.length; i++) {
    let participant = match.participants[i];
    if (participant.participantId == id) {
      const stats = participant.stats;
      const points = MatchPerformance((stats.kills + stats.assists) / stats.deaths);
      if (stats.winner) {
        pointChange = 20 + points;
      } else {
        pointChange = -10 + points;
      }
      break;
    }
  }
  return pointChange;
}

/*
Takes in a champion id name and returns the file name
*/
function imageName(championId) {
  let championName = cdata[championId];

  if (championName === "Wukong") {
    return 'MonkeyKing.png';
  } else {
    championName = championName.replace(' ', '');
    championName = championName.replace('\'', '');
    championName = championName.concat('.png');
    return championName;
  }
}

/*
Takes in a match object and a summoner id
Returns the champion played, kills, deaths, and assits of a player in a match
*/
function getPlayerStats(match, summonerId) {
  const id = getParticipantId(match, summonerId);

  for (let i = 0; i < match.participants.length; i++) {
    let participant = match.participants[i];
    if (participant.participantId == id) {
      const stats = participant.stats;
      const championId = participant.championId;
      const statsObj = {
        championId: championId,
        championName: cdata[championId],
        championImage: imageName(championId),
        // win: stats.winner,
        kills: stats.kills,
        deaths: stats.deaths,
        assists: stats.assists
      };
      return statsObj;
    }
  }
}

module.exports = {
  getParticipantId: getParticipantId,
  gameWin: gameWin,
  getPointChange: getPointChange,
  imageName: imageName,
  getPlayerStats: getPlayerStats
}
