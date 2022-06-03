module.exports = { Culture };
const { Movie } = require('./movie.js');
const { MovieType } = require('./movieType.js');
// const { Musical } = require('./musical.js');

function Culture(type, name) {
    this.type = type;
    this.name = name;
};

// function Modern() { }
// function Traditional() { }

// // Modern.prototype = Culture.prototype;
// // Traditional.prototype = Culture.prototype;

// // // Movie, Musical, Gallery, Museum
// // Movie.prototype = Modern.prototype;
// // Musical.prototype = Modern.prototype;
// // Gallery.prototype = Traditional.prototype;
// // Museum.prototype = Traditional.prototype;

// function Gallery() { };
// function Museum() { };

// watchShow.prototype.seats = function (row, column) {
//     seats = Array.from(Array(row), () => Array(column).fill(' [ ㅁ ] '));
//     return seats;
// }

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
        choose.PackageCourseA();
    };
    return CourseA;
})();

const CourseB = (function () {
    function CourseB() { }
    CourseB.prototype.execute = function () {
        choose.PackageCourseB();
    };
    return CourseB;
})();

const CourseC = (function () {
    function CourseC() { }
    CourseC.prototype.execute = function () {
        choose.PackageCourseC();
    };
    return CourseC;
})();

const SubSystemMovie = function () { }      // Movie
const SubSystemMusical = function () { }      // Musical
const SubSystemMuseum = function () { }    // Play
const SubSystemGallery = function () { }     // Gallery

// 커링 함수
const plus = (a, b, c) => a + b + c;
const sumPrice = (x) => (y) => (z) => plus(x, y, z);

SubSystemMovie.prototype.MethodMovie = function () {    // Movie
    Movie.prototype.selectMovie();
    Movie.prototype.selectTime();
    Movie.prototype.selectType();
    Movie.prototype.selectSeat();

    const moviePrice = sumPrice(Movie.prototype.movieTime)(Movie.prototype.movieType)(Movie.prototype.movieSeat);
    receipt.push(Movie.prototype.type + ": " + Movie.prototype.name + " - " + moviePrice + "원");
}
SubSystemMusical.prototype.MethodMusical = function () {   // Musical
    // new Musical().selectMusical();
    // new Musical().reserveMusical();
}
SubSystemMuseum.prototype.MethodMuseum = function () {     // Museum
    // console.log('\nEnjoy Museum');
}
SubSystemGallery.prototype.MethodGallery = function ()  {  // Gallery
    // console.log('\nEnjoy Gallery');
}

// Facade pattern
const Package = function () { }

Package.prototype.movie = new SubSystemMovie();       // Movie
Package.prototype.musical = new SubSystemMusical();   // Musical
Package.prototype.gallery = new SubSystemGallery();   // musical
Package.prototype.museum = new SubSystemMuseum();     // museum

Package.prototype.PackageCourseA = function () {     // selected Course A
    this.movie.MethodMovie();           // Movie
    // this.musical.MethodMusical();     // Musical
    // this.museum.MethodGallery();      // Gallery
}
Package.prototype.PackageCourseB = function () {    // selected Course B
    this.movie.MethodMovie();           // Movie
    // this.musical.MethodMusical();   // Musical
    // this.museum.MethodMuseum();     // Museum
}
Package.prototype.PackageCourseC = function () {    // selected Course C
    console.log("Course C");
    this.movie.MethodMovie();               // Movie
    // this.gallery.MethodGallery();       // Gallery
    // this.museum.MethodMuseum();         // Museum
}

// A - 영화, 뮤지컬, 미술관
// B - 영화, 뮤지컬, 박물관
// C - 영화, 미술관, 박물관

// 코스 고르기
const selectCourse = function () {
    console.log("[Course]");
    console.log(" A  -  [Movie, Musical, Gallery]");
    console.log(" B  -  [Movie, Musical, Museum]");
    console.log(" C  -  [Movie, Gallery, Museum]");

    let select = new Course();

    let course = "A"
    if (course == "A") {
        console.log("Selected A Course!\n");
        select.setCourse(new CourseA()); // A strategy
    }
    else if (course == "B") {
        console.log("Selected B Course!\n");
        select.setCourse(new CourseB()); // B strategy
    }
    else if (course == "C") {
        console.log("Selected C Course!\n");
        select.setCourse(new CourseC()); // C strategy
    }
    select.execute();
};

const choose = new Package();

let main = function () {
    selectCourse();
    console.log(receipt);
}

main();