module.exports = { ReserveSystem };
const { Movie } = require('./movie.js');
const { Opera } = require('./opera.js');
const { Ticket } = require('./amusementPark.js');
const CustomerPoint = require('./points.js').CustomerPoint;
const Customer = require('./points.js').Customer;

function ReserveSystem(type, name) {
    this.type = type;
    this.name = name;
};

ReserveSystem.prototype.subscribers = [];
ReserveSystem.prototype.getPoint = Customer.prototype.getPoint;
ReserveSystem.prototype.register = Customer.prototype.register;
const customerPoint = new CustomerPoint();
const receipt = [];

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
const SubSystemDiseny = function () { };    // Diseny

// Currying function
const plus = (a, b, c) => a + b + c;
const sumPrice = (x) => (y) => (z) => plus(x, y, z);

SubSystemMovie.prototype.MethodMovie = function () {    // Movie   
    const movie = new Movie();
    customerPoint.subscribe(movie);
    movie.selectMovie();
    movie.selectTime();
    movie.selectType();
    movie.selectMovieSeat();

    const moviePrice = sumPrice(movie.movieTime)(movie.movieType)(movie.movieSeat);
    movie.getPoint(moviePrice);
    receipt.push(movie.type + ": " + movie.name + " - " + moviePrice + "원");
};
SubSystemOpera.prototype.MethodOpera = function () {   // Opera
    const opera = new Opera();
    customerPoint.subscribe(opera);
    opera.selectOpera();
    opera.selectOperaSeat();
    opera.selectService();

    const operaPrice = sumPrice(opera.operaSeat)(opera.operaService)(0);
    opera.getPoint(operaPrice);
    receipt.push(opera.type + ": " + opera.name + " - " + operaPrice + "원");
};
SubSystemDiseny.prototype.MethodDiseny = function () {     // Diseny World Tour(4 days)
    const ticket = new Ticket();
    // customerPoint.subscribe(ticket);
    const test = ticket.selectTicket();
    // disney.getPoint(test.price);
    receipt.push(test.type + ": " + test.name + " - " + test.price + "원")

};

// Facade pattern
const Package = function () { }

Package.prototype.movie = new SubSystemMovie();       // Movie
Package.prototype.opera = new SubSystemOpera();       // Opera
Package.prototype.diseny = new SubSystemDiseny();   // Diseny

Package.prototype.PackageA = function () {  // selected Course A
    this.movie.MethodMovie();               // Movie
    this.opera.MethodOpera();               // Opera
    this.diseny.MethodDiseny();             // Disney World Tour
};
Package.prototype.PackageB = function () {  // selected Course B
    this.movie.MethodMovie();               // Movie
    this.diseny.MethodDiseny();             // Disney World Tour
};
Package.prototype.PackageC = function () {  // selected Course C
    this.opera.MethodOpera();               // Opera
    this.diseny.MethodDiseny();             // Disney World Tour
};

// 코스 고르기
const selectCourse = function () {
    console.log("[Package]");
    console.log(" A  -  [Movie, Opera, Disney World Tour(4 days)]");
    console.log(" B  -  [Movie, Disney World Tour(4 days)]");
    console.log(" C  -  [Opera, Disney World Tour(4 days)]");

    let select = new Course();
    console.log("Selected A Package!\n");
    select.setCourse(new CourseA());        // A strategy

    // console.log("Selected B Course!\n");
    // select.setCourse(new CourseB());     // B strategy

    // console.log("Selected C Course!\n");
    // select.setCourse(new CourseC());     // C strategy

    select.execute();
};

const choose = new Package();

const main = function () {
    selectCourse();
    console.log("[Receipt]");
    receipt.forEach((value, index) => console.log(index + 1 + ". " + value + "  "))
    console.log("Point: " + customerPoint.totalPoint);
};

main();