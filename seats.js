module.exports = { Seats };

function EconomyZone() {    // 일반석보다 아래
    var price = 0;
    this.getPrice = function () {
        return price;
    }
}

function StandardZone() {    // 일반석
    var price = 1000;
    this.getPrice = function () {
        return price;
    }
}

function PrimeZone() {     // 프라임석
    var price = 2000;
    this.getPrice = function () {
        return price;
    }
}

function ImpairedZone() {  // 장애인석
    var price = -1000;
    this.getPrice = function () {
        return price;
    }
}

//Seats Factory
function Seats() {
    this.createSeats = function (type) {
        switch (type) {
            case "Economy Zone":
                return new EconomyZone();
            case "Standard Zone":
                return new StandardZone();
            case "Prime Zone":
                return new PrimeZone();
            case "Impaired Zone":
                return new ImpairedZone();
            default:
                return new StandardZone();
        }
    }
}
