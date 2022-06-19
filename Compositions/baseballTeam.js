// Baseball Team
function Team1() {  
    let teamPrice = 20000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function Team2() { 
    let teamPrice = 30000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function Team3() { 
    let teamPrice = 40000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function Team4() { 
    let teamPrice = 50000;
    this.getPrice = function () {
        return teamPrice;
    };
};

//Team Factory
function Team() {
    this.selectTeam = function (type) {
        switch (type) {
            case "Team 1": return new Team1();
            case "Team 2": return new Team2();
            case "Team 3": return new Team3();
            case "Team 4": return new Team4();
            default: return new Team1();
        }
    };
};

module.exports = { Team };