function EconomyZone() {    // Movie 일반석보다 아래
    let price = 10000;
    this.getPrice = function () {
        return price;
    };
};

function StandardZone() {    // Movie 일반석
    let price = 12000;
    this.getPrice = function () {
        return price;
    };
};

function PrimeZone() {     // Movie 프라임석
    let price = 14000;
    this.getPrice = function () {
        return price;
    };
};

function AZone() {  // Musical A Zone
    let price = 70000;
    this.getPrice = function () {
        return price;
    };
};

function SZone() {  // Musical S Zone
    let price = 100000;
    this.getPrice = function () {
        return price;
    };
};

function VIPZone() {  // Musical VIP Zone
    let price = 150000;
    this.getPrice = function () {
        return price;
    };
};

function OrangeZone() {  // Movie 장애인석
    let price = 100000;
    this.getPrice = function () {
        return price;
    };
};

function GreenZone() {  // Musical S Zone
    let price = 200000;
    this.getPrice = function () {
        return price;
    };
};

function RedZone() {  // Musical VIP Zone
    let price = 800000;
    this.getPrice = function () {
        return price;
    };
};

//Seats Factory
function Seats() {
    this.createMovieSeats = function (type) {
        switch (type) {
            case "Economy Zone": return new EconomyZone();
            case "Standard Zone": return new StandardZone();
            case "Prime Zone": return new PrimeZone();
            default: return new StandardZone();
        }
    };
    this.createOperaSeats = function (type) {
        switch (type) {
            case "A Zone": return new AZone();
            case "S Zone": return new SZone();
            case "VIP Zone": return new VIPZone();
            default: return new AZone();
        }
    };
    this.createSoccerSeats = function (type) {
        switch (type) {
            case "Orange Zone": return new OrangeZone();
            case "Green Zone": return new GreenZone();
            case "Red Zone": return new RedZone();
            default: return new OrangeZone();
        }
    };
}

module.exports = { Seats };