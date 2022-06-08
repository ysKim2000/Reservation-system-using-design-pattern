const { ReserveSystem } = require("./main");

function Show(){}

Show.prototype.selectShow = function (name1, name2, name3, type) {
    const showData = Array(name1, name2, name3);
    console.log('select' + type);
    console.log("1." + name1 + " 2." + name2 + " 3." + name3);
    this.name = showData[2];
    this.type = type;
    console.log("Selected \"" + this.name + "\".\n");
};

module.exports = { Show };
//console.log("1. Cats ", " 2. Les Misérables ", " 3. The Phantom Of The Opera");