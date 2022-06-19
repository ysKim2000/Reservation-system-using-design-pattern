// const Customer = (function () {
//     function Customer() { }
//     Customer.prototype.getPoint = function (price) {
//         let self = this;
//         this.subscriber.point(self, price);
//         return price * (1 / 100);
//     };
//     Customer.prototype.getPrice = function (price) {
//         let self = this;
//         this.subscriber.price(self, price);
//         return price;
//     };
//     Customer.prototype.register = function (target) {
//         if (this.subscriber != null) return;
//         this.subscriber = target;
//     };
//     return Customer;
// })();

// const CustomerData = (function () {
//     function CustomerData() {
//         this.list = [];
//     }
//     CustomerData.prototype.totalPoint = 0;
//     CustomerData.prototype.totalPrice = 0;
//     CustomerData.prototype.subscribe = function (target) {
//         this.list.push({
//             target: target,
//         });
//         target.register(this);
//     };
//     CustomerData.prototype.point = function (target, price) {
//         this.list.some(function (person) {
//             if (person.target === target) {
//                 CustomerData.prototype.totalPoint += (price * (1 / 100));
//                 return true;
//             }
//         });
//     };
//     CustomerData.prototype.price = function (target, price) {
//         this.list.some(function (person) {
//             if (person.target === target) {
//                 CustomerData.prototype.totalPrice += price;
//                 return true;
//             }
//         });
//     };
//     return CustomerData;
// })();

// module.exports =
// {
//     Customer: Customer,
//     CustomerData: CustomerData
// }


function CardPoint() {
    this.cardCompanies = [];
}

CardPoint.prototype = {
    totalPoint : 0,
    totalPrice : 0,
    subscribe: function (companyName) {
        this.cardCompanies.push(companyName);

        return this;
    },
    notifyAllCompanies: function (price) {
        this.cardCompanies.forEach(companyName => {
            companyName.getPoint(price);
        });

        return this;
    }
}

function CardCompany(name) {
    this.name = name;
}

CardCompany.prototype = {
    getPoint: function (price) {
        console.log(`${this.name} 카드에 포인트가 적립되었습니다.`);
        CardPoint.prototype.totalPoint += (price * (1 / 100));
    },
};


module.exports =
{
    CardPoint: CardPoint,
    CardCompany: CardCompany
}
