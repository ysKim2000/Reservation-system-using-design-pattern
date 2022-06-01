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

function Culture() { }

Culture.prototype = {
    startTimeList: [8, 9, 10, 11, 12, 13, 14],
    courseTimeList: [0, 0, 0],
    type : this.type
};

Culture.prototype.settingCourseTime = async function (courseNum) {
    var approval = true;
    while (approval) {
        console.log("set the " + this.type + " time");
        console.log("<" + this.type + " timetable>");
        for (let i = 0; i < this.startTimeList.length; i++) {
            console.log(i + 1 + ".【" + this.startTimeList[i] + " : 00】" + "~【" + (this.startTimeList[i] + 1) + " : 00】");
        }
        console.log();
        console.log("Choose the time you want to watch" + this.type + "(input : 1 ~ " + this.startTimeList.length + "): ");
        var timeNum = await input();

        if (timeNum < 1 || timeNum > this.startTimeList.length) {
            console.log("Wrong.\n");
            this.courseTimeList[courseNum] = 0;
            continue;
        }
        else {
            this.courseTimeList[courseNum] = timeNum;
            return;
        }
    }
}

Culture.prototype.settingTime = async function () {
    if (this.courseTimeList[0] == 0) {
        await this.settingCourseTime(0);
    }
    else if (this.courseTimeList[1] == 0) {
        await this.settingCourseTime(1);
    }
    else {
        await this.settingCourseTime(2);
    }
};

function watchShow() { }
function watchArt() { }

watchShow.prototype = Culture.prototype;
watchArt.prototype = Culture.prototype;

function culture(type, name) {
    this.type = type;
    this.name = name;
};

var Movie = culture;
var Musical = culture;
var Opera = culture;
var Gallery = culture;
var Museum = culture;

// 영화, 뮤지컬, 오페라, 박물관, 미술관  
Movie.prototype = watchShow.prototype;
Musical.prototype = watchShow.prototype;
Opera.prototype = watchShow.prototype;
Gallery.prototype = watchArt.prototype;
Museum.prototype = watchArt.prototype;


watchShow.prototype.seats = function (row, column) {
    seats = Array.from(Array(row), () => Array(column));
    return seats;
}


Movie.prototype.selectMovie = async function () {
    var movieNum;

    do {
        console.log("Please choose a movie.");
        for (let i = 0; i < movieData.length; i++) {
            console.log(movieData[i]);
        }
        var approval;
        process.stdout.write('Input(1,2,3 ~): ');
        movieNum = await input();

        if (movieName[movieNum - 1] == undefined) {
            console.log("Wrong.");
            approval = true;
            continue;
        }
        console.log("\nDid you choose [" + movieName[movieNum - 1] + "]?");
        process.stdout.write("Input(yes or no): ");
        var check = await input();

        if (check == 'yes' || check == 'y' || check == 'Yes' || check == 'Y') {
            approval = false;
            Movie.name = movieName[movieNum - 1];
            // console.log(Movie.name);
            // console.log(Musical.name);
            // console.log(Play.name);
            // console.log(Opera.name);
            // console.log(Gallery.name);
        }
        else if (check == 'no' || check == 'n' || check == 'No' || check == 'N') {
            approval = true;
            continue;
        }
        else {
            console.log("Wrong.\n");
            approval = true;
            continue;
        }
    } while (approval);

    // return movieName[movieNum];
};

// 아래꺼를 커링함수로 = 영화가 저장된 상태 시간을 선택가능하고 시간 상태로 좌석 선택 그리고 이 세가지 정보를 모아서 결제를 팍!
// 아래꺼들은 함수로 구현 그리고 커링 함수로 파바박
// 코스 선택(A, B, C)
// 영화 선택-> 시간 선택-> 좌석 선택-> 결제

// Think: 이 Movie Data와 name, date 등을 Movie 객체에 넣는 것은 어떠한가? (전역 변수로 말고)
var movieData = [];
var movieName = [];

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

var SubSystemOne = function () { }      // Movie
var SubSystemTwo = function () { }      // Musical
var SubSystemThree = function () { }    // Play
var SubSystemFour = function () { }     // Gallery
var SubSystemFive = function () { }     // Opera

SubSystemOne.prototype.MethodOne = async function () {        // Movie
    console.log('\n[Box Office]');
    await Movie.selectMovie();
    await Movie.reserveMovie();

}
SubSystemTwo.prototype.MethodTwo = function () {        // Musical
    // console.log('\nEnjoy Musical');
}
SubSystemThree.prototype.MethodThree = function () {    // Play
    // console.log('\nEnjoy play');
}
SubSystemFour.prototype.MethodFour = function () {      // Gallery
    // console.log('\nEnjoy Gallery');
}
SubSystemFive.prototype.MethodFive = function () {      // Opera
    // console.log('\nEnjoy Opera');
}

var Facade = function () { }

Facade.prototype.one = new SubSystemOne()       // Movie
Facade.prototype.two = new SubSystemTwo()       // Musical
Facade.prototype.three = new SubSystemThree()   // Play
Facade.prototype.four = new SubSystemFour()     // Gallery
Facade.prototype.five = new SubSystemFive()     // Opera

Facade.prototype.FacadeCourseA = function () {  // selected Course A
    console.log("Course A");
    this.one.MethodOne();   // Movie
    this.two.MethodTwo();   //Musical
    this.four.MethodFour(); // Gallery
}
Facade.prototype.FacadeCourseB = function () {
    console.log("Course B");
    this.one.MethodOne();       // Movie
    this.three.MethodThree();   // Play
    this.five.MethodFive();     // Opera
}
Facade.prototype.FacadeCourseC = function () {
    console.log("Course C");
    this.one.MethodOne();       // Movie
    this.two.MethodTwo();       // Musical
    this.five.MethodFive();     // Opera
}

Movie.prototype.reserveMovie = async function () {

    console.log("\n" + Movie.name);
    seats = Movie.seats(5, 5);
    var isRun = false;
    do {
        console.log("──────────────────SCREEN──────────────────\n");
        process.stdout.write("       ");
        for (let i = 0; i < seats.length; i++) {
            process.stdout.write(" [ " + (i + 1) + " ] ");
        }
        console.log();
        for (let i = 0; i < seats.length; i++) {
            process.stdout.write("\n");
            process.stdout.write(" [ " + String.fromCharCode([i + 65]) + " ] ");
            for (let j = 0; j < seats[i].length; j++) {
                if (seats[i][j] == null) {
                    process.stdout.write(" [ □ ] ");
                } else if (seats[i][j] == 0) {
                    process.stdout.write(" [ □ ] ");
                } else {
                    process.stdout.write(" [ ■ ] ");
                }
            }
            process.stdout.write("\n");
        }
        console.log("──────────────────────────────────────────");
        console.log("(예약 종료 exit)")
        process.stdout.write("Input(A ~ E): ");
        var q1 = await input();
        if (q1 == 'exit' || q1 == 'EXIT') {
            isRun = false;
            break;
        }
        process.stdout.write("Input(1 ~ 5): ");
        var q2 = await input();
        if (q2 == 'exit' || q2 == 'EXIT') {
            isRun = false;
            break;
        }
        if (q1 >= String.fromCharCode([65]) && q1 <= String.fromCharCode([69]) && q2 > 0 && q2 < 6) {// A, B, C, D, E
            console.log(q1 + "열 " + q2 + "행");
        }
        else {
            console.log("Wrong!");
            isRun = true;
            continue;
        }
        process.stdout.write("Is Correct? (yes or no): ");
        var q3 = await input();
        if (q3 == 'yes' || q3 == 'y' || q3 == 'Yes' || q3 == 'Y') {
            if (seats[q1.charCodeAt() - 65][q2 - 1] == undefined || seats[q1.charCodeAt() - 65][q2 - 1] == 0 || seats[q1.charCodeAt() - 65][q2 - 1] == null) {
                seats[q1.charCodeAt() - 65][q2 - 1] = 1;
                console.log("\nComplete reservation");
            }
            else {
                console.log("This seat is already reserved.");
            }
            isRun = true;
            continue;

        }
        else if (q3 == 'no' || q3 == 'n' || q3 == 'No' || q3 == 'N') {
            isRun = true;
            continue;
        }
        else if (q3 == 'exit' || q3 == 'EXIT') {
            isRun = false;
            break;
        }
        else {
            console.log("Wrong!");
            isRun = true;
            continue;
        }
    } while (isRun);

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
            movieName.push(dailyBoxOfficeList[i].movieNm);
        }
    });
}

// 코스 고르기
var selectCourse = async function () {
    do {
        var approval;
        console.log("[Course]");
        console.log("1. A  -  [Movie, Musical, Gallery]");
        console.log("2. B  -  [Movie, Play, Opera]");
        console.log("3. C  -  [Movie, Musical, Opera]");

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
            approval = true;
            continue;
        }
    } while (approval);
};

var faca = new Facade();

async function main() {
    // getMovieApi();
    // selectCourse();

    movie =  new Movie('movie', '범죄도시2');
    opera = new Opera('opera', 'test');
    await movie.settingTime();
    await opera.settingTime(); 
    console.log(movie.courseTimeList[0]);
    console.log(opera.courseTimeList[1]);
}

main()