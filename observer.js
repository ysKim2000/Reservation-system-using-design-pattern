var Customer = (function () {
    function Customer() {
        this.subscribers = [];
    }
    Customer.prototype.reserve = function () {
        var self = this;
        this.subscribers.forEach(function (subscriber) {  
            subscriber.getPoint(self);
        });
    };
    Customer.prototype.register = function (target) {  //target에 들어가는 인자는 Company의 인스턴스
        this.subscribers.push(target);
    };
    return Customer;
})();

var Company = (function () {
    function Company() {
        this.list = [];
    }

    Company.prototype.subscribe = function (target) {  //target에 들어가는 인자는 Customer의 인스턴스
        this.list.push({
            target: target,
            point: 0,
        });
        target.register(this);
    };

    Company.prototype.unsubscribe = function (target) {  //target에 들어가는 인자는 Customer의 인스턴스
        this.list = this.list.filter(function (person) {  //filter : 리스트에 트루값인 요소만 남김
            return person.target !== target;
        });
    };

    Company.prototype.getPoint = function (target) {  //target에 들어가는 인자는 Customer의 인스턴스
        this.list.some(function (person) {  //some : 콜백함수 리턴 값이 한번이라도 참이면 참 리턴
            if (person.target === target) {
                ++person.point;
                return true;
            }
        });
    };
    return Company;
})();

var customer = new Customer();
var company = new Company();
company.subscribe(customer);  //회사가 고객을 구독(관찰)함 
customer.reserve();  //고객이 예매를 하면 고객은 자신을 구독하고 있는 회사에게 이벤트(예약) 발생을 알림 -> 회사는 포인트를 추가해줌
