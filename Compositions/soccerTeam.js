// type
function ManchesterCity() {  
    let teamPrice = 10000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function Liverpool() { 
    let teamPrice = 20000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function Chelsea() { 
    let teamPrice = 30000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function TottenhamHotspur() { 
    let teamPrice = 40000;
    this.getPrice = function () {
        return teamPrice;
    };
};

//Team Factory
function Team() {
    this.selectTeam = function (type) {
        switch (type) {
            case "Manchester City":
                return new ManchesterCity();
            case "Liverpool":
                return new Liverpool();
            case "Chelsea":
                return new Chelsea();
            case "Tottenham Hotspur":
                return new TottenhamHotspur();
            default:
                return new ManchesterCity();
        }
    };
};

module.exports = { Team };