const { ReserveSystem } = require('./main.js');
const { Seats } = require('./Compositions/seats.js');
const { Team } = require('./Compositions/soccerLeague.js');

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
    console.log('['+ this.league +']');
    console.log("Please choose the Team.");
    // TeamList.forEach((value, index) => console.log(index + 1 + ". " + value + "  "));
    console.log("1. Manchester City ", " 2. Liverpool ", " 3. Chelsea ", " 4. Tottenham Hotspur");
    this.soccerTeam = new Team().selectTeam(TeamList[0]).getPrice();
    this.name = TeamList[0];
    Soccer.prototype.soccerList.team = this.name;
    console.log("Selected \"" + this.name + "\".\n");
};

// 축구 홈, 어웨이 선택
Soccer.prototype.selectHomeOrArray = function () {
    const Place = Array("Home", "Away");
    console.log("Please choose the Home or Away");
    console.log("1. Home ", " 2. Away ");
    // Place.forEach((value, index) => console.log(index + 1 + ". " + value + "  "));
    this.soccerPlace = new Team().selectPlace(Place[1], this.soccerTeam).getPrice();
    Soccer.prototype.soccerList.place = Place[1];
    console.log("Selected \"" + Place[1] + "\".\n");
};

// 축구 좌석 선택
Soccer.prototype.selectSoccerSeat = function () {
    const soccerSeats = Array("Orange Zone", "Yellow Zone", "Green Zone", "Blue Zone", "Red Zone");
    console.log("Please choose the seat.");
    // soccerSeats.forEach((value, index) => console.log(index + 1 + ". " + value + "  "));
    console.log("1. Orange Zone ", " 2. Yellow Zone ", " 3. Green Zone ", " 4. Blue Zone ", " 5. Red Zone");
    this.soccerSeat = new Seats().createSoccerSeats(soccerSeats[2]).getPrice();
    Soccer.prototype.soccerList.seat = soccerSeats[2];
    console.log("Selected \"" + soccerSeats[2] + "\".\n");
};

module.exports = { Soccer };