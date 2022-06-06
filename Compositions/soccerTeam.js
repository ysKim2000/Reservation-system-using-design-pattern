// type
function ManchesterCity() {  // 프리미어 리그
    let teamPrice = 50000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function Liverpool() { // 분데스 리가
    let teamPrice = 40000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function Chelsea() { // 프리메라 리가
    let teamPrice = 70000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function TottenhamHotspur() { // K 리그
    let teamPrice = 20000;
    this.getPrice = function () {
        return teamPrice;
    };
};

function Home(price) { // 홈 경기
    let placePrice = 3;
    this.getPrice = function () {
        return price * placePrice;
    };
};

function Away(price) { // 원정 경기
    let placePrice = 1.5;
    this.getPrice = function () {
        return price * placePrice;
    };
};

//Team Factory
function Team() {
    this.selectTeam = function (type) {
        switch (type) {
            case "Manchester City":
                return new ManchesterCity();
            case "Liverpool":
                return new Liverpool();
            case "Chelsea":
                return new Chelsea();
            case "Tottenham Hotspur":
                return new TottenhamHotspur();
            default:
                return new ManchesterCity();
        }
    };

    this.selectPlace = function (type, price) {
        switch (type) {
            case "Home":
                return new Home(price);
            case "Away":
                return new Away(price);
            default:
                return new Away(price);
        }
    }
};

module.exports = { Team };