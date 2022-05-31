const readline = require('readline');
module.exports = { watchShow, watchArt };

const { Movie } = require('./movie.js');
const { Musical } = require('./musical');

// input
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

function Culture(type, name) {
    this.type = type;
    this.name = name;
};

function watchShow() { }
function watchArt() { }

watchShow.prototype = Culture.prototype;
watchArt.prototype = Culture.prototype;

// Movie, Musical, Gallery, Museum
// Musical.prototype = watchShow.prototype;
Gallery.prototype = watchArt.prototype;
Museum.prototype = watchArt.prototype;

// function Musical() { };
function Gallery() { };
function Museum() { };

watchShow.prototype.seats = function (row, column) {
    seats = Array.from(Array(row), () => Array(column));
    return seats;
}

watchArt.prototype.move = function () {
    console.log("move");
}

// Culture.prototype.seats = function (row, column) {
//     seats = Array.from(Array(row), () => Array(column));
//     return seats;
// }

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

SubSystemOne.prototype.MethodOne = async function () {        // Movie
    console.log('\n[Box Office]');
    await new Movie().selectMovie();
    await new Movie().reserveMovie();
}
SubSystemTwo.prototype.MethodTwo = async function () {        // Musical
    // console.log('\n[Musical]');
    await new Musical().whatever();
}
SubSystemThree.prototype.MethodThree = function () {    // Museum
    // console.log('\nEnjoy Museum');
}
SubSystemFour.prototype.MethodFour = function () {      // Gallery
    // console.log('\nEnjoy Gallery');
}

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
    
    var movie = new Movie();
    movie.getMovieApi();
    await selectCourse();
}

main();