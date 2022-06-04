module.exports = { Times };

// time 
function MorningTime() { // 조조
  let timePrice = -2000;
  this.getPrice = function () {
    return timePrice;
  }
}
function BranchTime() { // 아침
  let timePrice = -1000;
  this.getPrice = function () {
    return timePrice;
  }
}

function BasicTime() { // 일반
  let timePrice = 0;
  this.getPrice = function () {
    return timePrice;
  }
}

// Time Factory
function Times() {
  this.selectTime = function (time) {
    switch (time) {
      case "morning":
        return new MorningTime();

      case "branch":
        return new BranchTime();

      case "basic":
        return new BasicTime();

      default:
        return new BasicTime();
    }
  }
}