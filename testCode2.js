const request = require('request');
const moment = require('moment');
const readline = require('readline');

// 입력
const input = () => new Promise(resolve => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', line => {
        rl.close();
        resolve(line);
    });
});

function Culture(name, date, startTime, endTime) {
    this.name = name;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.join = function(){
        console.log("입장합니다.");
    }
}

Culture.prototype.seats = function (row, column) {
    seats = Array.from(Array(row), () => Array(column).fill('[ □ ]'));
    return seats;
}

// 여기 Culture.prototype. 할 애들 추가

// 클로저를 이용해 공통적인 부분 리턴, 안 쓰는 기능은 숨긴다.

var Movie = new Culture('testMovieName', 'testMovieDate', 'testMovieStartTime', 'testMovieEndTime'); // 영화
// console.log(Movie.seats(3, 5));
var Musical = new Culture('testMusicalName', 'testMusicalDate', 'testMusicalStartTime', 'testMusicalEndTime'); // 뮤지컬
var Play = new Culture('testTheaterName', 'testTheaterDate', 'testTheaterStartTime', 'testTheaterEndTime'); // 연극
var Opera = new Culture('testOperaName', 'testOperaDate', 'testOperaStartTime', 'testOperaEndTime'); // 오페라
var Gallery = new Culture('testGalleryName', 'testGalleryDate', 'testGalleryStartTime', 'testGalleryEndTime'); // 미술관

// 아래꺼를 커링함수로 = 영화가 저장된 상태 시간을 선택가능하고 시간 상태로 좌석 선택 그리고 이 세가지 정보를 모아서 결제를 팍!
// 아래꺼들은 함수로 구현 그리고 커링 함수로 파바박
// 코스 선택(A, B, C)
// 영화 선택-> 시간 선택-> 좌석 선택-> 결제

var movieData = [];

// 전략 패턴
var Strategy = (function () {
    function Strategy() {
        this.strategy = null;
    };
    Strategy.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Strategy.prototype.execute = function () {
        this.strategy.execute();
    };
    return Strategy;
})();

var CourseA = (function () {
    function CourseA() { }
    CourseA.prototype.execute = function () {
        faca.FacadeCourseA()
    };
    return CourseA;
})();

var CourseB = (function () {
    function CourseB() { }
    CourseB.prototype.execute = function () {
        faca.FacadeCourseB()
    };
    return CourseB;
})();

var CourseC = (function () {
    function CourseC() { }
    CourseC.prototype.execute = function () {
        faca.FacadeCourseC()
    };
    return CourseC;
})();

var SubSystemOne = function () { }
var SubSystemTwo = function () { }
var SubSystemThree = function () { }
var SubSystemFour = function () { }
var SubSystemFive = function () { }

SubSystemOne.prototype.MethodOne = function () {
    console.log('Enjoy Movie [Box Office]');
    for(let i = 0; i < movieData.length; i++){
        console.log(movieData[i]);
    }
}
SubSystemTwo.prototype.MethodTwo = function () {
    console.log('Enjoy Musical');
}
SubSystemThree.prototype.MethodThree = function () {
    console.log('Enjoy play');
}
SubSystemFour.prototype.MethodFour = function () {
    console.log('Enjoy Gallery');
}
SubSystemFive.prototype.MethodFive = function () {
    console.log('Enjoy Opera');
}

var Facade = function () { }

Facade.prototype.one = new SubSystemOne()       // Movie
Facade.prototype.two = new SubSystemTwo()       // Musical
Facade.prototype.three = new SubSystemThree()   // Play
Facade.prototype.four = new SubSystemFour()     // Gallery
Facade.prototype.five = new SubSystemFive()     // Opera

Facade.prototype.FacadeCourseA = async function () {  // selected Course A
    do {
        var check = false;
        console.log("Course A");
        console.log("0. [Movie]");
        console.log("1. [Musical]");
        console.log("2. [Gallery]");
        process.stdout.write('What will you next the movie?(1,2): ');
        var secondA = await input();
        if (secondA == 1) {
            this.one.MethodOne()    // Movie
            this.two.MethodTwo()    // Musical
            break;
        }
        else if (secondA == 2) {
            this.one.MethodOne()        // Movie
            this.three.MethodFour()    // Gallery
            break;
        }
        else {
            console.log("Wrong.");
            check = true;
            continue;
        }
    } while (check);
}
Facade.prototype.FacadeCourseB = async function () {
    do {
        var check = false;
        console.log("Course A");
        console.log("0. [Movie]");
        console.log("1. [Play]");
        console.log("2. [Opera]");
        process.stdout.write('What will you see next the movie?(1,2): ');
        var secondA = await input();
        if (secondA == 1) {
            this.one.MethodOne()    // Movie
            this.two.MethodThree()    // Play
            break;
        }
        else if (secondA == 2) {
            this.one.MethodOne()        // Movie
            this.three.MethodFive()    // Opera
            break;
        }
        else {
            console.log("Wrong.");
            check = true;
            continue;
        }
    } while (check);
}
Facade.prototype.FacadeCourseC = async function () {
    do {
        var check = false;
        console.log("Course A");
        console.log("0. [Movie]");
        console.log("1. [Musical]");
        console.log("2. [Opera]");
        process.stdout.write('What will you next the movie?(1,2): ');
        var secondA = await input();
        if (secondA == 1) {
            this.one.MethodOne()    // Movie
            this.two.MethodTwo()    // Musical
            break;
        }
        else if (secondA == 2) {
            this.one.MethodOne()        // Movie
            this.three.MethodFive()    // Opera
            break;
        }
        else {
            console.log("Wrong.");
            check = true;
            continue;
        }
    } while (check);
}

// API 불러오기
var getMovieApi = function () { // JSON 
    const targetDate = moment().subtract(1, 'days').format('YYYYMMDD'); // 하루 전 날
    const REQUEST_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
    var queryParams = '?' + encodeURIComponent('key') + '=999bdc7e274c0a5e1557a0642d612aee'; // Service Key
    queryParams += '&' + encodeURIComponent('targetDt') + '=' + encodeURIComponent(targetDate); // 날짜
    queryParams += '&' + encodeURIComponent('itemPerPage') + '=' + encodeURIComponent('5'); // item의 갯수 
    queryParams += '&' + encodeURIComponent('multiMovieYn') + '=' + encodeURIComponent('N'); // Y: 다양성 영화, N: 상업영화 (default: 전체)
    queryParams += '&' + encodeURIComponent('repNationCd') + '=' + encodeURIComponent(''); // K: 한국영화, F: 외국영화 (default: 전체)
    // queryParams += '&' + encodeURIComponent('wideAreaCd') + '=' + encodeURIComponent(''); // 지역 Code
    request({
        url: REQUEST_URL + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        if (error) throw error;
        const API = JSON.parse(body);
        const dailyBoxOfficeList = API.boxOfficeResult.dailyBoxOfficeList;

        // console.log("\n" + API.boxOfficeResult.boxofficeType);
        for (let i = 0; i < dailyBoxOfficeList.length; i++) {
            // console.log(dailyBoxOfficeList[i].rnum + " - " + dailyBoxOfficeList[i].movieNm);
            movieData.push(dailyBoxOfficeList[i].rnum + " - " + dailyBoxOfficeList[i].movieNm);
        }
    });

}

// 코스 고르기
var selectCourse = async function () {
    do {
        var approval;
        console.log("[Course]");
        console.log("1. A [Movie, Musical, Gallery]");
        console.log("2. B [Movie, Play, Opera]");
        console.log("3. C [Movie, Musical, Opera]");

        process.stdout.write('입력(1,2,3): ');
        var course = await input();

        var strat = new Strategy();
        if (course == 1) {
            strat.setStrategy(new CourseA()); // A strategy
        }
        else if (course == 2) {
            strat.setStrategy(new CourseB()); // B strategy
        }
        else if (course == 3) {
            strat.setStrategy(new CourseC()); // C strategy
        }
        else {
            console.log("Wrong.\n");
            approval = true;
            continue;
        }
        console.log("\nReally?")
        process.stdout.write("Input(yes or no): ");
        var check = await input();

        if (check == 'yes' || check == 'y' || check == 'Yes' || check == 'Y') {
            strat.execute(); // execute strategy
            approval = false;
        }
        else if (check == 'no' || check == 'n' || check == 'No' || check == 'N') {
            approval = true;
            continue;
        }
        else {
            console.log("Wrong.\n");
        }
    } while (approval);
};

var faca = new Facade();

var main = function () {
    getMovieApi();
    selectCourse();
}

main()