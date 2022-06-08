let Calculation = (function () {
    function Calculation(operator, value1, value2) {
        this.operator = operator;
        this.value1 = value1 || null;
        this.value2 = value2 || null;
    }
    Calculation.prototype.calculate = function () {
        console.log(this.operator + "연산을" + this.value1 + "과" + this.value2 + "값으로 연산해줍니다");
    }
    return Calculation;
})();

let makeCalculation = function (operator) {
    var value1 = null;
    var value2 = null;
    return {
        setVal1: function (number) {
            value1 = number;
            return this;
        },
        setVal2: function (number) {
            value2 = number;
            return this;
        },
        build: function () {
            return new Calculation(operator, value1, value2);
        }
    };
};

var builder = makeCalculation('Plus').setVal1(1).setVal2(2).build();

console.log(builder);