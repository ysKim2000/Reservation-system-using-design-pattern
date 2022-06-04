const readline = require('readline');
module.exports = { watchShow, watchArt, Movie };


function Culture() {};


Culture.prototype = {
    startTimeList: [8, 9, 10, 11, 12, 13, 14],
    courseTimeList: [0, 0, 0],
    type : this.type
};


Culture.prototype.settingCourseTime = function () {
}

Culture.prototype.settingTime = async function () {
};

function Movie(type, name) 
{
    this.type = type;
    this.name = name;
};
function Gallery(type, name) 
{
    this.type = type;
    this.name = name;
};
function Museum(type, name) 
{
    this.type = type;
    this.name = name;
};
function Musical(type, name) 
{
    this.type = type;
    this.name = name;
};


function watchShow() { }
function watchArt() { }

watchShow.prototype = Culture.prototype;
watchArt.prototype = Culture.prototype;
Movie.prototype = watchShow.prototype;
Gallery.prototype = watchArt.prototype;
Museum.prototype = watchArt.prototype;

Movie.prototype.selectMovie = require('./movie.js').selectMovie
Movie.prototype.reserveMovie = require('./movie.js').reserveMovie;

watchShow.prototype.seats = function (row, column) {
    seats = Array.from(Array(row), () => Array(column));
    return seats;
}

watchArt.prototype.move = function () {
    console.log("move");
}

var movieData = Array('1 - 영화1', '2 - 영화2', '3 - 영화3', '4 - 영화4');
var movieName = Array('영화1', ' 영화2', '영화3', '영화4');


function selectMovie() {
}

function reserveMovie() {
}

// Strategy Pattern
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


SubSystemOne.prototype.MethodOne = async function () {    // Movie
    var movieName = await Movie.prototype.selectMovie();
    var movie = new Movie('movie', movieName);
    await movie.settingTime();
    await movie.reserveMovie();
}
SubSystemTwo.prototype.MethodTwo = async function () {   // Musical
    // await new Musical().selectMusical();
    // await new Musical().reserveMusical();
}
SubSystemThree.prototype.MethodThree = function () {    // Museum
    // console.log('\nEnjoy Museum');
}
SubSystemFour.prototype.MethodFour = function () {      // Gallery
    // console.log('\nEnjoy Gallery');
}


// Test
// movieReceipt = Array(Movie.prototype.name, seats);
// musicalReceipt = Array(Musical.prototype.name, seats);
// receiptObject = Array(movieReceipt, musicalReceipt, watchShow.courseTimeList);

var Facade = function () { }

Facade.prototype.one = new SubSystemOne()       // Movie
Facade.prototype.two = new SubSystemTwo()       // Musical
Facade.prototype.three = new SubSystemThree()   // Museum
Facade.prototype.four = new SubSystemFour()     // Gallery

Facade.prototype.FacadeCourseA = async function () {  // selected Course A
    console.log("Course A");
    await this.one.MethodOne();   // Movie
    await this.two.MethodTwo();   // Musical
    await this.four.MethodFour(); // Gallery
    
    console.log(Culture.prototype);
    console.log(watchArt.prototype);
    console.log(watchShow.prototype);
    console.log(Movie.prototype);
    console.log(Musical.prototype);
}
Facade.prototype.FacadeCourseB = function () {
    console.log("Course B");
    this.one.MethodOne();       // Movie
    this.three.MethodTwo();   // Musical
    this.five.MethodThree();     // Museum
}
Facade.prototype.FacadeCourseC = function () {
    console.log("Course C");
    this.one.MethodOne();       // Movie
    this.two.MethodFour();      // Gallery
    this.five.MethodThree();     // Museum
}

// A - 영화, 뮤지컬, 미술관
// B - 영화, 뮤지컬, 박물관
// C - 영화, 미술관, 박물관

// 코스 고르기
var selectCourse = async function () {
    do {
        var approval;
        console.log("[Course]");
        console.log("1. A  -  [Movie, Musical, Gallery]");
        console.log("2. B  -  [Movie, Musical, Museum]");
        console.log("3. C  -  [Movie, Gallery, Museum]");

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

var main = async function () {
    await selectCourse();
}

main();