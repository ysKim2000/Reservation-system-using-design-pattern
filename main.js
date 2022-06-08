module.exports = { ReserveSystem };
const { Soccer } = require('./System/soccer.js');
const { Movie } = require('./System/movie.js');
const { Opera } = require('./System/opera.js');
const { Baseball } = require('./System/baseball.js');
const CustomerPoint = require('./points.js').CustomerPoint;
const Customer = require('./points.js').Customer;
// const Show = require('./show.js').Show;

function ReserveSystem(type, name) {
    this.type = type;
    this.name = name;
    this.seat = function(){
        
    };
};

ReserveSystem.prototype.getPoint = Customer.prototype.getPoint;
ReserveSystem.prototype.getPrice = Customer.prototype.getPrice;
ReserveSystem.prototype.register = Customer.prototype.register;
// ReserveSystem.prototype.selectShow = Show.prototype.selectShow;
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
const SubSystemBaseball = function () { };  // Baseball

// 총 계산도 옵저버에서 하자
SubSystemMovie.prototype.MethodMovie = function () {    // Movie   
    const movie = new Movie();
    // Builder pattern으로 묶기(모듈화)
    customerPoint.subscribe(movie);
    movie.selectMovie();
    movie.selectTime();
    movie.selectType();
    movie.selectMovieSeat();
    const moviePrice = sumPrice(movie.movieTime)(movie.movieType)(movie.movieSeat);
    movie.movieList.price = moviePrice;
    movie.getPoint(moviePrice);
    movie.getPrice(moviePrice);
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
    opera.getPrice(operaPrice);
};
SubSystemSoccer.prototype.MethodSoccer = function () {     // Soccer
    const soccer = new Soccer();
    customerPoint.subscribe(soccer);
    soccer.selectSoccerTeam();
    soccer.selectSoccerHomeOrAway();
    soccer.selectSoccerSeat();
    const soccerPrice = sumPrice(soccer.soccerTeam)(soccer.soccerPlace)(soccer.soccerSeat);
    soccer.soccerList.price = soccerPrice;
    soccer.getPoint(soccerPrice);
    soccer.getPrice(soccerPrice);
};
SubSystemBaseball.prototype.MethodBaseball = function () {   // Baseball
    const baseball = new Baseball();
    customerPoint.subscribe(baseball);
    baseball.selectTeam();
    baseball.selectHomeOrAway();
    baseball.selectBaseballSeat();
    const baseballPrice = sumPrice(baseball.baseballTeam)(baseball.baseballPlace)(baseball.baseballSeat);
    baseball.baseballList.price = baseballPrice;
    baseball.getPoint(baseballPrice);
    baseball.getPrice(baseballPrice);
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


// Select Course
const selectCourse = function () {
    console.log("[Package]");
    console.log(" A  -  [Movie, Opera, Soccer]");
    console.log(" B  -  [Movie, Soccer, Baseball]");
    console.log(" C  -  [Opera, Soccer, Baseball]");

    let select = new Course();
    console.log("Selected A Package!\n");
    select.setCourse(new CourseA());        // A strategy

    // console.log("Selected B Course!\n");
    // select.setCourse(new CourseB());     // B strategy
    
    // console.log("Selected C Course!\n");
    // select.setCourse(new CourseC());     // C strategy

    select.execute();
};

const getTotalPrice = function () {
    console.log("[Receipt]");
    console.log("Total Price: $" + customerPoint.totalPrice);
    console.log("Point: " + customerPoint.totalPoint);
};

const choose = new Package();

const main = function () {
    selectCourse();
    getTotalPrice();
};

main();