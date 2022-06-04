const { Culture } = require('./main.js');
// const { OperaType } = require('./Compositions/OperaType.js');
const { Seats } = require('./Compositions/seats.js');
const { OperaService } = require('./Compositions/service.js');
module.exports = { Opera };

function Opera(operaService, operaType, operaSeat) { 
    this.operaService = operaService;
    // this.OperaType = OperaType;
    this.operaSeat = operaSeat;
};
// clone
Opera.prototype = Culture.prototype;

// 오페라 선택
Opera.prototype.selectOpera = function () {
    const operaData= Array("Cats", "Les Miserables", "The Phantom Of The Opera");
    console.log('[Opera Office]');
    console.log("Please choose the opera.");
    for (let i = 0; i < operaData.length; i++) {
        console.log(i + 1 + ". " + operaData[i]);
    }
    this.name = operaData[2];
    this.type = "Opera";
    console.log("Selected \"" + this.name + "\".\n");
};

// 오페라 좌석 선택
Opera.prototype.selectOperaSeat = function(){
    var operaSeats = Array("A Zone", "S Zone", "R Zone", "VIP Zone");
    console.log("Please choose the seat.");
    for (let i = 0; i < operaSeats.length; i++) {
        console.log(i + 1 + ". " + operaSeats[i]);
    }
    this.operaSeat = new Seats().createSeats(operaSeats[1]).getPrice();
    console.log("Selected \"" + operaSeats[1] + "\".\n");
}

// 오페라 서비스 선택
Opera.prototype.selectService = function(){
    var operaServices = Array("Opera Glasses", "Stock Room", "Child Lounge");
    console.log("Please choose the time.");
    for (let i = 0; i < operaServices.length; i++) {
        console.log(i + 1 + ". " + operaServices[i]);
    }
    this.operaService = new OperaService().selectOperaService(operaServices[2]).getPrice();
    console.log("Selected \"" + operaServices[2] + "\".\n");
}

// 오페라 유형 선택
// Opera.prototype.selectType = function(){
//     var OperaTypes = Array("2D Opera", "3D Opera", "IMAX Opera", "4DX Opera");
//     console.log("Please choose the type.");
//     for (let i = 0; i < OperaTypes.length; i++) {
//         console.log(i + 1 + ". " + OperaTypes[i]);
//     }
//     this.OperaType = new OperaType().selectOperaType(OperaTypes[2]).getPrice();
//     console.log("Selected \"" + OperaTypes[2] + "\".\n");
// }
