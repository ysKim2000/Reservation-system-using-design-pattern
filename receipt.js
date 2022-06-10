let Receipt = (function () {
    function Receipt(type, totalPrice, totalPoint) {
        this.type = type;
        this.totalPrice = totalPrice || null;
        this.totalPoint = totalPoint || null;
    }
    Receipt.prototype.showReceipt = function () {
        console.log("["+ this.type + "] - 총 금액" + this.totalPrice + ", 포인트: " + this.totalPoint);
    }
    return Receipt;
})();

Receipt.prototype.makeReceipt = function (type) {
    let totalPrice = null;
    let totalPoint = null;
    return {
        setVal1: function (number) {
            totalPrice = number;
            return this;
        },
        setVal2: function (number) {
            totalPoint = number;
            return this;
        },
        build: function () {
            return new Receipt(type, totalPrice, totalPoint);
        }
    };
};

module.exports = { Receipt };