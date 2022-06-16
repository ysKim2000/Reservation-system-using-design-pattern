let Receipt = (function () {
    function Receipt(type, totalPrice, totalPoint) {
        this.type = type;
        this.totalPrice = totalPrice;
        this.totalPoint = totalPoint;
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