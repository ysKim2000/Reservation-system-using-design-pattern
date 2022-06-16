module.exports = { ReserveSystem };
const { Soccer } = require('./System/soccer.js');
const { Movie } = require('./System/movie.js');
const { Opera } = require('./System/opera.js');
const { Baseball } = require('./System/baseball.js');
const { Receipt } = require('./receipt');
const CustomerData = require('./points.js').CustomerData;
const Customer = require('./points.js').Customer;

function ReserveSystem(type, name, price) {
    this.type = type;
    this.name = name;
    this.price = price;
};

ReserveSystem.prototype.getPoint = Customer.prototype.getPoint;
ReserveSystem.prototype.getPrice = Customer.prototype.getPrice;
ReserveSystem.prototype.register = Customer.prototype.register;
const customerData = new CustomerData();
const receipt = new Receipt();
const receiptList = Array();

// Variable Argument Function
function sum() {
    var arrayValue = [...arguments];    //유사배열을 배열로 변환
    return arrayValue.reduce((pre, cur) => pre + cur);
}

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

const SubSystemMovie = function () { };     // Movie
const SubSystemOpera = function () { };     // Opera
const SubSystemSoccer = function () { };    // Soccer
const SubSystemBaseball = function () { };  // Baseball

// SubSystem 메소드 이름 변경, 코스A 좀 더 확장성 있는 이름으로 변경
SubSystemMovie.prototype.MethodMovie = function () {    // Movie   
    const movie = new Movie();
    // 옵저버 지적
    customerData.subscribe(movie);
    movie.selectMovie();
    movie.selectTime();
    movie.selectType();
    movie.selectMovieSeat();
    movie.price = sum(movie.movieTime, movie.movieType, movie.movieSeat);
    receiptList.push(receipt.makeReceipt(movie.type).setVal1(movie.getPrice(movie.price)).setVal2(movie.getPoint(movie.price)).build());
};
SubSystemOpera.prototype.MethodOpera = function () {   // Opera
    const opera = new Opera();
    customerData.subscribe(opera);
    opera.selectOpera();
    opera.selectOperaSeat();
    opera.selectService();
    opera.price = sum(opera.operaSeat, opera.operaService);
    receiptList.push(receipt.makeReceipt(opera.type).setVal1(opera.getPrice(opera.price)).setVal2(opera.getPoint(opera.price)).build());
};
SubSystemSoccer.prototype.MethodSoccer = function () {     // Soccer
    const soccer = new Soccer();
    customerData.subscribe(soccer);
    soccer.selectSoccerTeam();
    soccer.selectSoccerHomeOrAway();
    soccer.selectSoccerSeat();
    soccer.price = sum(soccer.soccerTeam, soccer.soccerPlace, soccer.soccerSeat);
    receiptList.push(receipt.makeReceipt(soccer.type).setVal1(soccer.getPrice(soccer.price)).setVal2(soccer.getPoint(soccer.price)).build());
};
SubSystemBaseball.prototype.MethodBaseball = function () {   // Baseball
    const baseball = new Baseball();
    customerData.subscribe(baseball);
    baseball.selectTeam();
    baseball.selectHomeOrAway();
    baseball.selectBaseballSeat();
    baseball.price = sum(baseball.baseballTeam, baseball.baseballPlace, baseball.baseballSeat);
    receiptList.push(receipt.makeReceipt(baseball.type).setVal1(baseball.getPrice(baseball.price)).setVal2(baseball.getPoint(baseball.price)).build());
};

// Facade pattern
const Package = function () { }
Package.prototype.movie = new SubSystemMovie();       // Movie
Package.prototype.opera = new SubSystemOpera();       // Opera
Package.prototype.soccer = new SubSystemSoccer();     // Soccer
Package.prototype.baseball = new SubSystemBaseball(); // Baseball

Package.prototype.PackageA = function () {  // selected Course A
    this.movie.MethodMovie();               // Movie
    this.opera.MethodOpera();               // Opera
    this.soccer.MethodSoccer();             // Soccer
};
Package.prototype.PackageB = function () {  // selected Course B
    this.movie.MethodMovie();               // Movie
    this.soccer.MethodSoccer();             // Soccer
    this.baseball.MethodBaseball();         // Baseball
};
Package.prototype.PackageC = function () {  // selected Course C
    this.opera.MethodOpera();               // Opera
    this.soccer.MethodSoccer();             // Soccer
    this.baseball.MethodBaseball();         // Baseball
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
    receiptList.forEach(value => console.log("[" + value.type + "]", "\tPrice: " + value.totalPrice, "\tPoint: " + value.totalPoint));
    console.log("Total Price: $" + customerData.totalPrice);
    console.log("Total Point: " + customerData.totalPoint + " pts");
};

const main = function () {
    A코스를선택하다();
    영수증을가져오다();
};

main();