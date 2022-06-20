module.exports = { ReserveSystem };
const { Soccer } = require('./System/soccer.js');
const { Movie } = require('./System/movie.js');
const { Opera } = require('./System/opera.js');
const { Baseball } = require('./System/baseball.js');
const { Receipt } = require('./System/receipt.js');

function ReserveSystem(type, name, price) {     // 예약 시스템
    this.type = type;                           // Reservation의 유형(movie, opera, soccer, baseball)
    this.name = name;                           // Reservation의 이름(제목, 팀)
    this.price = price;                         // Reservation의 가격
};

const receipt = new Receipt();              // 영수증
const receiptList = Array();                // 전체 영수증을 보관할 영수증 Array

// Variable Argument Function (가변 인자 함수)
function sum() {
    let arrayValue = [...arguments];
    return arrayValue.reduce((pre, cur) => pre + cur);
};

// Strategy Pattern
const Course = (function () {
    function Course() {
        this.course = null;
    };
    Course.prototype.setCourse = function (course) {
        this.course = course;
    };
    Course.prototype.execute = function () {
        this.course.execute();
    };
    return Course;
})();

const CourseA = (function () {
    function CourseA() { }
    CourseA.prototype.execute = function () {
        choose.PackageA();
    };
    return CourseA;
})();

const CourseB = (function () {
    function CourseB() { }
    CourseB.prototype.execute = function () {
        choose.PackageB();
    };
    return CourseB;
})();

const CourseC = (function () {
    function CourseC() { }
    CourseC.prototype.execute = function () {
        choose.PackageC();
    };
    return CourseC;
})();

const MovieSystem = function () { };     // Movie
const OperaSystem = function () { };     // Opera
const SoccerSystem = function () { };    // Soccer
const BaseballSystem = function () { };  // Baseball

// Facade Pattern(Internal Logic)
MovieSystem.prototype.detailedMovie = function () {          // 영화의 복잡한 내부 로직
    const movie = new Movie();
    movie.selectMovie();                                     // 영화 선택
    movie.selectTime();                                      // 영화 시간 선택
    movie.selectType();                                      // 영화 유형 선택
    movie.selectMovieSeat();                                 // 영화 좌석 선택
    movie.price = sum(movie.movieTimePrice, movie.movieTypePrice, movie.movieSeatPrice);   // 가변인자 함수를 통해 합 계산
    receiptList.push(receipt.makeReceipt(movie.type).getPrice(movie.price).getPoint(movie.price).build()); // Movie의 price를 Receipt로 빌드
};
OperaSystem.prototype.detailedOpera = function () {          // 오페라의 복잡한 내부 로직
    const opera = new Opera();
    opera.selectOpera();                                     // 오페라 선택
    opera.selectOperaSeat();                                 // 오페라 좌석 선택
    opera.selectService();                                   // 오페라 서비스 선택
    opera.price = sum(opera.operaSeatPrice, opera.operaServicePrice);  // 가변인자 함수를 통해 합 계산
    receiptList.push(receipt.makeReceipt(opera.type).getPrice(opera.price).getPoint(opera.price).build());  // Opera의 price를 Receipt로 빌드
};
SoccerSystem.prototype.detailedSoccer = function () {        // 축구의 복잡한 내부 로직
    const soccer = new Soccer();
    soccer.selectSoccerTeam();                               // 축구팀 선택
    soccer.selectSoccerHomeOrAway();                         // 축구 장소 선택
    soccer.selectSoccerSeat();                               // 축구 좌석 선택
    soccer.price = sum(soccer.soccerTeamPrice, soccer.soccerPlacePrice, soccer.soccerSeatPrice);   // 가변인자 함수를 통해 합 계산
    receiptList.push(receipt.makeReceipt(soccer.type).getPrice(soccer.price).getPoint(soccer.price).build());   // Soccer의 price를 Receipt로 빌드
};
BaseballSystem.prototype.detailedBaseball = function () {    // 야구의 복잡한 내부 로직
    const baseball = new Baseball();
    baseball.selectTeam();                                   // 야구팀 선택
    baseball.selectHomeOrAway();                             // 야구 장소 선택
    baseball.selectBaseballSeat();                           // 야구 좌석 선택
    baseball.price = sum(baseball.baseballTeamPrice, baseball.baseballPlacePrice, baseball.baseballSeatPrice); // 가변인자 함수를 통해 합 계산
    receiptList.push(receipt.makeReceipt(baseball.type).getPrice(baseball.price).getPoint(baseball.price).build()); // Baseball의 price를 Receipt로 빌드
};

// Facade Pattern(External Logic)
const Package = function () { }
Package.prototype.movie = new MovieSystem();       // Movie
Package.prototype.opera = new OperaSystem();       // Opera
Package.prototype.soccer = new SoccerSystem();     // Soccer
Package.prototype.baseball = new BaseballSystem(); // Baseball

Package.prototype.PackageA = function () {      // select Course A
    this.movie.detailedMovie();                 // Movie
    this.opera.detailedOpera();                 // Opera
    this.soccer.detailedSoccer();               // Soccer
};
Package.prototype.PackageB = function () {      // select Course B
    this.movie.detailedMovie();                 // Movie
    this.soccer.detailedSoccer();               // Soccer
    this.baseball.detailedBaseball();           // Baseball
};
Package.prototype.PackageC = function () {      // select Course C
    this.opera.detailedOpera();                 // Opera
    this.soccer.detailedSoccer();               // Soccer
    this.baseball.detailedBaseball();           // Baseball
};

const choose = new Package();

// Testing functions
function A코스를선택하다() {
    let select = new Course();
    select.setCourse(new CourseA());
    select.execute();
};

function B코스를선택하다() {
    let select = new Course();
    select.setCourse(new CourseB());
    select.execute();
};

function C코스를선택하다() {
    let select = new Course();
    select.setCourse(new CourseC());
    select.execute();
};

function 영수증을가져오다() {
    console.log("[Receipt]");
    receiptList.forEach(value => console.log("[" + value.type + "]", "\tPrice: " + value.totalPrice, "\tPoint: " + value.totalPoint));  // 각 유형의 가격과 포인트
    console.log("Total Price: $" + receiptList.reduce((c, v) => c += v.totalPrice, 0));             // 총 가격
    console.log("Total Point: " + receiptList.reduce((c, v) => c += v.totalPoint, 0) + " pts");     // 총 포인트
};

const main = function () {
    A코스를선택하다();
    영수증을가져오다();
};

main();