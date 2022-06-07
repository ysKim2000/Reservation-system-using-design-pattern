const { ReserveSystem } = require('./main.js');
const { Seats } = require('./Compositions/seats.js');
const { Team } = require('./Compositions/baseballTeam.js');
const { Place } = require('./Compositions/sportPlace.js');

function Baseball(baseballTeam, league, baseballPlace, baseballSeat) {
    this.baseballTeam = baseballTeam;
    this.league = league;
    this.baseballPlace = baseballPlace;
    this.baseballSeat = baseballSeat;
};

// clone
Baseball.prototype = ReserveSystem.prototype;
Baseball.prototype.baseballList = {
    team: null,
    place: null,
    seat: null,
    price: null
};

// 팀 선택
Baseball.prototype.selectTeam = function () {
    this.league = "K-League"
    this.type = "Baseball";
    const TeamList = Array("Team 1", "Team 2", "Team 3", "Team 4");
    console.log('[' + this.league + ']');
    console.log("1. Team 1 ", " 2. Team 2 ", " 3. Team 3 ", " 4. Team 4");
    this.baseballTeam = new Team().selectTeam(TeamList[0]).getPrice();
    this.name = TeamList[0];
    Baseball.prototype.baseballList.team = this.name;
    console.log("Selected \"" + this.name + "\".\n");
};

// 야구 홈, 어웨이 선택
Baseball.prototype.selectHomeOrAway = function () {
    const place = Array("Home", "Away");
    console.log("1. Home ", " 2. Away ");
    this.baseballPlace = new Place().selectPlace(place[1], this.baseballTeam).getPrice();
    Baseball.prototype.baseballList.place = place[1];
    console.log("Selected \"" + place[1] + "\".\n");
};

// 야구 좌석 선택
Baseball.prototype.selectBaseballSeat = function () {
    const baseballSeats = Array("Orange Zone", "Green Zone", "Blue Zone", "Red Zone");
    console.log("1. Orange Zone ", "2. Green Zone ", " 3. Red Zone");
    this.baseballSeat = new Seats().createBaseballSeats(baseballSeats[1]).getPrice();
    Baseball.prototype.baseballList.seat = baseballSeats[1];
    console.log("Selected \"" + baseballSeats[1] + "\".\n");
};

module.exports = { Baseball };