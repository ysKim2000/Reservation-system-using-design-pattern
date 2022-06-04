var Customer = (function () {
    function Customer() {
        this.subscriber;

    }
    Customer.prototype.getPoint = function (price) {
        var self = this;
        this.subscriber.point(self, price);
    };
    Customer.prototype.register = function (target) {  //target에 들어가는 인자는 CustomerPoint의 인스턴스
        if (this.subscriber != null) return;
        this.subscriber = target;
    };
    return Customer;
})();

var CustomerPoint = (function () {
    function CustomerPoint() {
        this.list = [];
    }

    CustomerPoint.prototype.totalPoint = 0;

    CustomerPoint.prototype.subscribe = function (target) {  //target에 들어가는 인자는 Customer의 인스턴스
        this.list.push({
            target: target,
        });
        target.register(this);
    };

    CustomerPoint.prototype.unsubscribe = function (target) {  //target에 들어가는 인자는 Customer의 인스턴스
        this.list = this.list.filter(function (person) {  //filter : 리스트에 트루값인 요소만 남김
            return person.target !== target;
        });
    };

    CustomerPoint.prototype.point = function (target, price) {  //target에 들어가는 인자는 Customer의 인스턴스
        this.list.some(function (person) {  //some : 콜백함수 리턴 값이 한번이라도 참이면 참 리턴
            if (person.target === target) {
                CustomerPoint.prototype.totalPoint += (price * (1 / 100));
                return true;
            }
        });
    };
    return CustomerPoint;
})();

module.exports =
{
    Customer: Customer,
    CustomerPoint: CustomerPoint
}