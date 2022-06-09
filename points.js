const Customer = (function () {
    function Customer() { }
    Customer.prototype.getPoint = function (price) {
        let self = this;
        this.subscriber.point(self, price);
    };
    Customer.prototype.getPrice = function (price) {
        let self = this;
        this.subscriber.price(self, price);
    };
    Customer.prototype.register = function (target) {   
        if (this.subscriber != null) return;
        this.subscriber = target;
    };
    return Customer;
})();

const CustomerData = (function () {
    function CustomerData() {
        this.list = [];
    }
    CustomerData.prototype.totalPoint = 0;
    CustomerData.prototype.totalPrice = 0;
    CustomerData.prototype.subscribe = function (target) {   
        this.list.push({
            target: target,
        });
        target.register(this);
    };
    CustomerData.prototype.point = function (target, price) {   
        this.list.some(function (person) {   
            if (person.target === target) {
                CustomerData.prototype.totalPoint += (price * (1 / 100));
                return true;
            }
        });
    };
    CustomerData.prototype.price = function (target, price) {   
        this.list.some(function (person) {   
            if (person.target === target) {
                CustomerData.prototype.totalPrice += price;
                return true;
            }
        });
    };
    return CustomerData;
})();

module.exports =
{
    Customer: Customer,
    CustomerData: CustomerData
}