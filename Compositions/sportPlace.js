// Sports Place
function Home() { // 홈 경기
    let price = 50000;
    this.getPrice = function () {
        return price;
    };
};

function Away() { // 원정 경기
    let price = 30000;
    this.getPrice = function () {
        return price;
    };
};

//Place Factory
function Place() {
    this.selectPlace = function (type) {
        switch (type) {
            case "Home": return new Home();
            case "Away": return new Away();
            default: return new Away();
        }
    };
};

module.exports = { Place };