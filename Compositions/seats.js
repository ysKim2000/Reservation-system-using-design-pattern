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

function ImpairedZone() {  // Movie 장애인석
    let price = 8000;
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

function RZone() {  // Musical R Zone
    let price = 130000;
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
            case "A Zone":
                return new AZone();
            case "S Zone":
                return new SZone();
            case "R Zone":
                return new RZone();
            case "VIP Zone":
                return new VIPZone();
            default:
                return new StandardZone();
        }
    };
};

module.exports = { Seats };