// Builder Pattern
let Receipt = (function () {
    function Receipt(type, totalPrice, totalPoint) {
        this.type = type;               // Reservation의 유형(movie, opera, soccer, baseball)
        this.totalPrice = totalPrice;   // 세부사항을 합한 가격
        this.totalPoint = totalPoint;   // 세부사항의 포인트
    }
    return Receipt;
})();

Receipt.prototype.makeReceipt = function (type) {
    let totalPrice;
    let totalPoint;
    return {
        getPrice: function (number) {
            totalPrice = number;
            return this;
        },
        getPoint: function (number) {
            totalPoint = number / 100;
            return this;
        },
        build: function () {
            return new Receipt(type, totalPrice, totalPoint);
        }
    };
};

module.exports = { Receipt };