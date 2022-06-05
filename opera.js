const { ReserveSystem } = require('./main.js');
const { Seats } = require('./Compositions/seats.js');
const { OperaService } = require('./Compositions/service.js');

function Opera(operaService, operaSeat) {
    this.operaService = operaService;
    this.operaSeat = operaSeat;
};
// clone
Opera.prototype = ReserveSystem.prototype;

// 오페라 선택
Opera.prototype.selectOpera = function () {
    const operaData = Array("Cats", "Les Misérables", "The Phantom of the Opera");
    console.log('[Opera Office]');
    console.log("Please choose the opera.");
    // operaData.forEach((value, index) => console.log(index + 1 + ". " + value + "  "));
    console.log("1. Cats ", " 2. Les Misérables ", " 3. The Phantom Of The Opera");
    this.name = operaData[2];
    this.type = "Opera";
    console.log("Selected \"" + this.name + "\".\n");
};

// 오페라 좌석 선택
Opera.prototype.selectOperaSeat = function () {
    const operaSeats = Array("A Zone", "S Zone", "R Zone", "VIP Zone");
    console.log("Please choose the seat.");
    // operaSeats.forEach((value, index) => console.log(index + 1 + ". " + value + "  "));
    console.log("1. A Zone ", " 2. S Zone ", " 3. R Zone ", " 4. VIP Zone");
    this.operaSeat = new Seats().createOperaSeats(operaSeats[1]).getPrice();
    console.log("Selected \"" + operaSeats[1] + "\".\n");
};

// 오페라 서비스 선택
Opera.prototype.selectService = function () {
    const operaServices = Array("Opera Glasses", "Stock Room", "Child Lounge");
    console.log("Please choose the time.");
    // operaServices.forEach((value, index) => console.log(index + 1 + ". " + value + "  "));
    console.log("1. Opera Glasses ", " 2. Stock Room ", " 3. Child Lounge");
    this.operaService = new OperaService().selectOperaService(operaServices[2]).getPrice();
    console.log("Selected \"" + operaServices[2] + "\".\n");
};

module.exports = { Opera };