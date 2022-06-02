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

module.exports = 
{
    input : input
}

function Culture() { }

Culture.prototype = {
    startTimeList: [8, 9, 10, 11, 12, 13, 14],
    courseTimeList: [0, 0, 0],
    type : this.type
};

Culture.prototype.settingCourseTime = require('./settingTime.js').settingCourseTime;
Culture.prototype.settingTime = require('./settingTime.js').settingTime;

function watchShow() { }
function watchArt() { }

watchShow.prototype = Culture.prototype;
watchArt.prototype = Culture.prototype;

function Culture(type, name) {
    this.type = type;
    this.name = name;
};

var Movie = Culture;
var Musical = Culture;
var Opera = Culture;
var Gallery = Culture;
var Museum = Culture;

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


Movie.prototype.selectMovie = require('./selectMovie.js').selectMovie;

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

Movie.prototype.reserveMovie = require('./reserveMovie.js').reserveMovie;

// API 불러오기
var getMovieApi = require('./getMovieApi.js').getMovieApi;

// 코스 고르기
var selectCourse = require('./selectCourse.js').selectCourse;

var faca = new Facade();

async function main() {
    // getMovieApi();
    // selectCourse();

    movie =  new Movie('movie', '범죄도시2');
    opera = new Opera('opera', 'test');
    await movie.settingTime();
    await opera.settingTime(); 
}

main()