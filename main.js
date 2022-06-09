module.exports = { ReserveSystem };
const { Soccer } = require('./System/soccer.js');
const { Movie } = require('./System/movie.js');
const { Opera } = require('./System/opera.js');
const { Baseball } = require('./System/baseball.js');
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

SubSystemMovie.prototype.MethodMovie = function () {    // Movie   
    const movie = new Movie();
    // Builder pattern으로 묶기(모듈화)
    customerData.subscribe(movie);
    movie.selectMovie();
    movie.selectTime();
    movie.selectType();
    movie.selectMovieSeat();
    movie.price = sumPrice(movie.movieTime)(movie.movieType)(movie.movieSeat);
    movie.getPoint(movie.price);
    movie.getPrice(movie.price);
};
SubSystemOpera.prototype.MethodOpera = function () {   // Opera
    const opera = new Opera();
    customerData.subscribe(opera);
    opera.selectOpera();
    opera.selectOperaSeat();
    opera.selectService();
    opera.price = sumPrice(opera.operaSeat)(opera.operaService)(0);
    opera.getPoint(opera.price);
    opera.getPrice(opera.price);
};
SubSystemSoccer.prototype.MethodSoccer = function () {     // Soccer
    const soccer = new Soccer();
    customerData.subscribe(soccer);
    soccer.selectSoccerTeam();
    soccer.selectSoccerHomeOrAway();
    soccer.selectSoccerSeat();
    soccer.price = sumPrice(soccer.soccerTeam)(soccer.soccerPlace)(soccer.soccerSeat);
    soccer.getPoint(soccer.price);
    soccer.getPrice(soccer.price);
};
SubSystemBaseball.prototype.MethodBaseball = function () {   // Baseball
    const baseball = new Baseball();
    customerData.subscribe(baseball);
    baseball.selectTeam();
    baseball.selectHomeOrAway();
    baseball.selectBaseballSeat();
    baseball.price = sumPrice(baseball.baseballTeam)(baseball.baseballPlace)(baseball.baseballSeat);
    baseball.getPoint(baseball.price);
    baseball.getPrice(baseball.price);
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
    console.log("Total Price: $" + customerData.totalPrice);
    console.log("Point: " + customerData.totalPoint);
};

const choose = new Package();

const main = function () {
    selectCourse();
    getTotalPrice();
};

main();