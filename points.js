const Customer = (function () {
    function Customer() { }
    Customer.prototype.getPoint = function (price) {
        let self = this;
        this.subscriber.point(self, price);
    };
    Customer.prototype.register = function (target) {   
        if (this.subscriber != null) return;
        this.subscriber = target;
    };
    return Customer;
})();

const CustomerPoint = (function () {
    function CustomerPoint() {
        this.list = [];
    }
    CustomerPoint.prototype.totalPoint = 0;
    CustomerPoint.prototype.subscribe = function (target) {   
        this.list.push({
            target: target,
        });
        target.register(this);
    };
    CustomerPoint.prototype.unsubscribe = function (target) {
        this.list = this.list.filter(function (person) { 
            return person.target !== target;
        });
    };
    CustomerPoint.prototype.point = function (target, price) {   
        this.list.some(function (person) {   
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