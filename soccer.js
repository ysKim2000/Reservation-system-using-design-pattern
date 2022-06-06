const { ReserveSystem } = require('./main.js');
const { Seats } = require('./Compositions/seats.js');
const { Team } = require('./Compositions/soccerTeam.js');

function Soccer(soccerTeam, league, soccerPlace, soccerSeat) {
    this.soccerTeam = soccerTeam;
    this.league = league;
    this.soccerPlace = soccerPlace;
    this.soccerSeat = soccerSeat;
};

// clone
Soccer.prototype = ReserveSystem.prototype;
Soccer.prototype.soccerList = {
    team: null,
    place: null,
    seat: null,
    price: null
};

// 팀 선택
Soccer.prototype.selectTeam = function () {
    this.league = "Premier League"
    this.type = "Soccer";
    const TeamList = Array("Manchester City", "Liverpool", "Chelsea", "Tottenham Hotspur");
    console.log('[' + this.league + ']');
    console.log("1. Manchester City ", " 2. Liverpool ", " 3. Chelsea ", " 4. Tottenham Hotspur");
    this.soccerTeam = new Team().selectTeam(TeamList[0]).getPrice();
    this.name = TeamList[0];
    Soccer.prototype.soccerList.team = this.name;
    console.log("Selected \"" + this.name + "\".\n");
};

// 축구 홈, 어웨이 선택
Soccer.prototype.selectHomeOrAway = function () {
    const Place = Array("Home", "Away");
    console.log("1. Home ", " 2. Away ");
    this.soccerPlace = new Team().selectPlace(Place[1], this.soccerTeam).getPrice();
    Soccer.prototype.soccerList.place = Place[1];
    console.log("Selected \"" + Place[1] + "\".\n");
};

// 축구 좌석 선택
Soccer.prototype.selectSoccerSeat = function () {
    const soccerSeats = Array("Orange Zone", "Green Zone", "Blue Zone", "Red Zone");
    console.log("1. Orange Zone ", "2. Green Zone ", " 3. Red Zone");
    this.soccerSeat = new Seats().createSoccerSeats(soccerSeats[1]).getPrice();
    Soccer.prototype.soccerList.seat = soccerSeats[1];
    console.log("Selected \"" + soccerSeats[1] + "\".\n");
};

module.exports = { Soccer };