// type
function Basic() {
    let typePrice = 0;
    this.getPrice = function () {
        return typePrice;
    };
};

function OperaGlasses() {  // 오페라 글라스
    let typePrice = 4000;
    this.getPrice = function () {
        return typePrice;
    };
};

function StockRoom() { // 물품보관소
    let typePrice = 2000;
    this.getPrice = function () {
        return typePrice;
    };
};

function ChildLounge() { // 어린이 놀이터(라운지)
    let typePrice = 20000;
    this.getPrice = function () {
        return typePrice;
    };
};

//Service Factory
function OperaService() {
    this.selectOperaService = function (type) {
        switch (type) {
            case "Opera Glasses":
                return new OperaGlasses();
            case "Stock Room":
                return new StockRoom();
            case "Child Lounge":
                return new ChildLounge();
            default:
                return new Basic();
        }
    };
};

module.exports = { OperaService };