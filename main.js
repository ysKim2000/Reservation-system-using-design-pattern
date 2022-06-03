const readline = require('readline');
module.exports = { watchShow, watchArt };

const { Movie } = require('./movie.js');
const { Musical } = require('./musical.js');

function Culture(type, name, time) {
    this.type = type;   // Culture의 유형 - 영수증 쓸 때
    this.name = name;   // 고른 거의 이름
    this.time = time;
};

Culture.prototype = {
    startTimeList: [8, 9, 10, 11, 12, 13, 14],
    courseTimeList: [0, 0, 0],
    type : this.type
};

Culture.prototype.settingCourseTime = function (courseNum) {
    var approval = true;
    while (approval) {
        console.log("set the " + this.type + " time");
        console.log("<" + this.type + " timetable>");
        for (let i = 0; i < this.startTimeList.length; i++) {
            console.log(i + 1 + ".【" + this.startTimeList[i] + " : 00】" + "~【" + (this.startTimeList[i] + 1) + " : 00】");
        }
        console.log();

        if (timeNum < 1 || timeNum > this.startTimeList.length) {
            console.log("Wrong.\n");
            this.courseTimeList[courseNum] = 0;
            continue;
        }
        else {
            this.courseTimeList[courseNum] = timeNum;
            return;
        }
    }
}

Culture.prototype.settingTime = function () {
    if (this.courseTimeList[0] == 0) {
        this.settingCourseTime(0);
    }
    else if (this.courseTimeList[1] == 0) {
        this.settingCourseTime(1);
    }
    else {
        this.settingCourseTime(2);
    }
};

function watchShow() { }
function watchArt() { }

watchShow.prototype = Culture.prototype;
watchArt.prototype = Culture.prototype;

// Movie.prototype = watchShow.prototype;


// Movie, Musical, Gallery, Museum
Gallery.prototype = watchArt.prototype;
Museum.prototype = watchArt.prototype;

function Gallery() { };
function Museum() { };

watchShow.prototype.seats = function (row, column) {
    seats = Array.from(Array(row), () => Array(column).fill(' [ ㅁ ] '));
    return seats;
}

watchArt.prototype.move = function () {
    console.log("move");
}

// Strategy Pattern
var Course = (function () {
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

var CourseA = (function () {
    function CourseA() { }
    CourseA.prototype.execute = function () {
        choose.PackageCourseA()
    };
    return CourseA;
})();

var CourseB = (function () {
    function CourseB() { }
    CourseB.prototype.execute = function () {
        choose.PackageCourseB()
    };
    return CourseB;
})();

var CourseC = (function () {
    function CourseC() { }
    CourseC.prototype.execute = function () {
        choose.PackageCourseC()
    };
    return CourseC;
})();

var SubSystemMovie = function () { }      // Movie
var SubSystemMusical = function () { }      // Musical
var SubSystemMuseum = function () { }    // Play
var SubSystemGallery = function () { }     // Gallery

SubSystemMovie.prototype.MethodMovie = function () {    // Movie
    new Movie().selectMovie();
    // console.log(Movie.prototype);
    // Movie.prototype.settingCourseTime(0);
    new Movie().reserveMovie();
}
SubSystemMusical.prototype.MethodMusical = function () {   // Musical
    new Musical().selectMusical();
    new Musical().reserveMusical();
}
SubSystemMuseum.prototype.MethodMuseum = function () {    // Museum
    // console.log('\nEnjoy Museum');
}
SubSystemGallery.prototype.MethodGallery = function () {      // Gallery
    // console.log('\nEnjoy Gallery');
}


// Test
// movieReceipt = Array(Movie.prototype.name, seats);
// musicalReceipt = Array(Musical.prototype.name, seats);
// receiptObject = Array(movieReceipt, musicalReceipt, watchShow.courseTimeList);


// Facade pattern
var Package = function () { }

Package.prototype.movie = new SubSystemMovie()       // Movie
Package.prototype.musical = new SubSystemMusical()       // Musical
Package.prototype.gallery = new SubSystemGallery()   // musical
Package.prototype.museum = new SubSystemMuseum()     // museum

Package.prototype.PackageCourseA = function () {  // selected Course A
    console.log("Course A");
    this.movie.MethodMovie();         // Movie
    this.musical.MethodMusical();     // Musical
    this.museum.MethodGallery();      // Gallery
}
Package.prototype.PackageCourseB = function () {
    console.log("Course B");
    this.movie.MethodMovie();       // Movie
    this.musical.MethodMusical();   // Musical
    this.museum.MethodMuseum();     // Museum
}
Package.prototype.PackageCourseC = function () {
    console.log("Course C");
    this.movie.MethodMovie();           // Movie
    this.gallery.MethodGallery();       // Gallery
    this.museum.MethodMuseum();         // Museum
}

// A - 영화, 뮤지컬, 미술관
// B - 영화, 뮤지컬, 박물관
// C - 영화, 미술관, 박물관

// 코스 고르기
var selectCourse = function () {
    do {
        var approval;
        console.log("[Course]");
        console.log("1. A  -  [Movie, Musical, Gallery]");
        console.log("2. B  -  [Movie, Musical, Museum]");
        console.log("3. C  -  [Movie, Gallery, Museum]");


        var select = new Course();
        if (course == 1) {
            select.setCourse(new CourseA()); // A strategy
        }
        else if (course == 2) {
            select.setCourse(new CourseB()); // B strategy
        }
        else if (course == 3) {
            select.setCourse(new CourseC()); // C strategy
        }
        else {
            console.log("Wrong.\n");
            approval = true;
            continue;
        }
        console.log("\nReally?")
        if (check == 'yes' || check == 'y' || check == 'Yes' || check == 'Y') {
            select.execute(); // execute strategy
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

var choose = new Package();

var main = function () {
    Movie.prototype.getMovieApi();
    selectCourse();
}

main();