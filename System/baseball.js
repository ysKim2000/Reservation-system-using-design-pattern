const { ReserveSystem } = require('../main.js');
const { Seats } = require('../Compositions/seats.js');
const { Team } = require('../Compositions/baseballTeam.js');
const { Place } = require('../Compositions/sportPlace.js');

function Baseball(league, baseballTeamPrice, baseballPlacePrice, baseballSeatPrice) {
    this.league = league;                           // 야구 리그 이름
    this.baseballTeamPrice = baseballTeamPrice;     // 야구 팀에 따른 가격
    this.baseballPlacePrice = baseballPlacePrice;   // 야구 장소에 따른 가격
    this.baseballSeatPrice = baseballSeatPrice;     // 야구 좌석에 따른 가격
};

// clone
Baseball.prototype = ReserveSystem.prototype;

// 팀 선택
Baseball.prototype.selectTeam = function () {
    this.league = "K-League"
    this.type = "Baseball";
    const TeamList = Array("Team 1", "Team 2", "Team 3", "Team 4");
    console.log('[' + this.league + ']');
    console.log("1. Team 1 ", " 2. Team 2 ", " 3. Team 3 ", " 4. Team 4");
    this.baseballTeamPrice = new Team().selectTeam(TeamList[0]).getPrice();     // 야구 팀에 따른 가격
    this.name = TeamList[0];
    console.log("Selected \"" + this.name + "\".\n");
};

// 야구 홈, 어웨이 선택
Baseball.prototype.selectHomeOrAway = function () {
    const place = Array("Home", "Away");
    console.log("1. Home ", " 2. Away ");
    this.baseballPlacePrice = new Place().selectPlace(place[1], this.baseballTeamPrice).getPrice();     // 야구 장소에 따른 가격
    console.log("Selected \"" + place[1] + "\".\n");
};

// 야구 좌석 선택
Baseball.prototype.selectBaseballSeat = function () {
    const baseballSeats = Array("Orange Zone", "Green Zone", "Red Zone");
    console.log("1. Orange Zone ", "2. Green Zone ", " 3. Red Zone");
    this.baseballSeatPrice = new Seats().createBaseballSeats(baseballSeats[1]).getPrice();  // 야구 좌석에 따른 가격
    console.log("Selected \"" + baseballSeats[1] + "\".\n");
};

module.exports = { Baseball };