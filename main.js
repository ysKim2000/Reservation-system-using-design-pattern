module.exports = { ReserveSystem };
const { Soccer } = require('./soccer.js');
const { Movie } = require('./movie.js');
const { Opera } = require('./opera.js');
const CustomerPoint = require('./points.js').CustomerPoint;
const Customer = require('./points.js').Customer;

function ReserveSystem(type, name) {
    this.type = type;
    this.name = name;
};

function Receipt(totalPrice, tatalList){
    this.totalPrice = totalPrice;
    this.totalList = tatalList
};

ReserveSystem.prototype.subscribers = [];
ReserveSystem.prototype.getPoint = Customer.prototype.getPoint;
ReserveSystem.prototype.register = Customer.prototype.register;
Receipt.prototype = ReserveSystem.prototype;
const customerPoint = new CustomerPoint();

// Currying function
const plus = (a, b, c) => a + b + c;
const sumPrice = (x) => (y) => (z) => plus(x, y, z);

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


SubSystemMovie.prototype.MethodMovie = function () {    // Movie   
    const movie = new Movie();
    customerPoint.subscribe(movie);
    movie.selectMovie();
    movie.selectTime();
    movie.selectType();
    movie.selectMovieSeat();
    const moviePrice = sumPrice(movie.movieTime)(movie.movieType)(movie.movieSeat);
    movie.movieList.price = moviePrice;
    movie.getPoint(moviePrice);
};
SubSystemOpera.prototype.MethodOpera = function () {   // Opera
    const opera = new Opera();
    customerPoint.subscribe(opera);
    opera.selectOpera();
    opera.selectOperaSeat();
    opera.selectService();
    const operaPrice = sumPrice(opera.operaSeat)(opera.operaService)(0);
    opera.operaList.price = operaPrice;
    opera.getPoint(operaPrice);
};
SubSystemSoccer.prototype.MethodSoccer = function () {     // Soccer
    const soccer = new Soccer();
    customerPoint.subscribe(soccer);
    soccer.selectTeam();
    soccer.selectHomeOrAway();
    soccer.selectSoccerSeat();
    const soccerPrice = sumPrice(soccer.soccerTeam)(soccer.soccerPlace)(soccer.soccerSeat);
    soccer.soccerList.price = soccerPrice;
    soccer.getPoint(soccerPrice);
};

// Facade pattern
const Package = function () { }

Package.prototype.movie = new SubSystemMovie();       // Movie
Package.prototype.opera = new SubSystemOpera();       // Opera
Package.prototype.soccer = new SubSystemSoccer();     // Soccer

Package.prototype.PackageA = function () {  // selected Course A
    this.movie.MethodMovie();               // Movie
    this.opera.MethodOpera();               // Opera
    this.soccer.MethodSoccer();             // Soccer
};
Package.prototype.PackageB = function () {  // selected Course B
    this.movie.MethodMovie();               // Movie
    this.soccer.MethodSoccer();             // Soccer
};
Package.prototype.PackageC = function () {  // selected Course C
    this.opera.MethodOpera();               // Opera
    this.soccer.MethodSoccer();             // Soccer
};

Receipt.prototype.getTotalPrice = function(){
    this.totalPrice = sumPrice(this.movieList.price)(this.operaList.price)(this.soccerList.price);
    console.log(this.totalPrice);
}

// 코스 고르기
const selectCourse = function () {
    console.log("[Package]");
    console.log(" A  -  [Movie, Opera, Soccer]");
    console.log(" B  -  [Movie, Soccer]");
    console.log(" C  -  [Opera, Soccer]");

    let select = new Course();
    console.log("Selected A Package!\n");
    select.setCourse(new CourseA());        // A strategy

    // console.log("Selected B Course!\n");
    // select.setCourse(new CourseB());     // B strategy

    // console.log("Selected C Course!\n");
    // select.setCourse(new CourseC());     // C strategy

    select.execute();
};

const getTotalPrice = function(){
    var test = new Receipt()
    test.totalPrice = sumPrice(test.movieList.price)(test.operaList.price)(test.soccerList.price);
    console.log("Total Price: " + test.totalPrice);
    // test.totalList = 
};

const choose = new Package();

const main = function () {
    selectCourse();
    console.log("[Receipt]");
    console.log("Point: " + customerPoint.totalPoint);
    getTotalPrice();
};

main();