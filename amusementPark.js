// https://simuing.tistory.com/entry/javascript-%EA%B0%9D%EC%B2%B4-%EA%B8%B0%EB%B0%98-%EB%8D%B0%EC%BB%A4%EB%A0%88%EC%9D%B4%ED%84%B0-%ED%8C%A8%ED%84%B4
// Disney World Tour
function Ticket(name) {
    this.name = name;
    this.price = 0;
    this.items = [];
}
;
Ticket.prototype = {
    showItems: function () {
        var itemString = "- Package information\n",
            length = this.items.length,
            i;
        for (i = 0; i < length; i++) {
            itemString += i + 1 + ". " + this.items[i].name + "\n";
        }
        console.log(itemString);
    },
    decorate: function (item) {
        this.price += item.price;
        this.items.push(item);
    }
};

function TicketDecorator() {
    this.decorateItems = {};
}

TicketDecorator.prototype.decorateTicket = function (ticket, itemName) {
    if (this.decorateItems.hasOwnProperty(itemName)) {
        ticket.decorate(this.decorateItems[itemName]);
    }
    return ticket;
};
TicketDecorator.prototype.addDecorateItem = function (itemName, price) {
    this.decorateItems[itemName] = {
        name: itemName,
        price: price
    }
};

Ticket.prototype.selectTicket = function () {
    let ticketDecorator = new TicketDecorator();
    ticketDecorator.addDecorateItem("Disney World Ticket", 700000);
    ticketDecorator.addDecorateItem("Disney World Resort", 1270000);
    ticketDecorator.addDecorateItem("Food & Drinks", 500000);
    ticketDecorator.addDecorateItem("Public Transportation", 30000);

    console.log("[Diseny World Tour Package]");
    let reservations = new Ticket("Disney World Tour");
    reservations.type = "Amusement Park";
    reservations = ticketDecorator.decorateTicket(reservations, "Disney World Ticket");
    reservations = ticketDecorator.decorateTicket(reservations, "Disney World Resort");
    reservations = ticketDecorator.decorateTicket(reservations, "Food & Drinks");
    reservations = ticketDecorator.decorateTicket(reservations, "Public Transportation");
    reservations.showItems();

    return reservations;
};

// Ticket.prototype.selectTicket();


// module.exports = { Ticket };