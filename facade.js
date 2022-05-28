const readline = require('readline');

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

var SubSystemOne = function () { }
var SubSystemTwo = function () { }
var SubSystemThree = function () { }
var SubSystemFour = function () { }
var SubSystemFive = function () { }

SubSystemOne.prototype.MethodOne = function () {
    console.log('Enjoy Movie [Box Office]');
}
SubSystemTwo.prototype.MethodTwo = function () {
    console.log('Enjoy Musical');
}
SubSystemThree.prototype.MethodThree = function () {
    console.log('Enjoy play');
}
SubSystemFour.prototype.MethodFour = function () {
    console.log('Enjoy Gallery');
}
SubSystemFive.prototype.MethodFive = function () {
    console.log('Enjoy Opera');
}

var Facade = function () { }

Facade.prototype.one = new SubSystemOne()       // Movie
Facade.prototype.two = new SubSystemTwo()       // Musical
Facade.prototype.three = new SubSystemThree()   // Play
Facade.prototype.four = new SubSystemFour()     // Gallery
Facade.prototype.five = new SubSystemFive()     // Opera

Facade.prototype.CourseA = async function () {  // selected Course A
    do {
        var check = false;
        console.log("Course A");
        console.log("0. [Movie]");
        console.log("1. [Musical]");
        console.log("2. [Gallery]");
        process.stdout.write('What will you see the next?(1,2): ');
        var secondA = await input();
        if (secondA == 1) {
            this.one.MethodOne()    // Movie
            this.two.MethodTwo()    // Musical
            break;
        }
        else if (secondA == 2) {
            this.one.MethodOne()        // Movie
            this.three.MethodFour()    // Gallery
            break;
        }
        else {
            console.log("잘못 입력하셨습니다.");
            check = true;
            continue;
        }

    } while (check);
}
Facade.prototype.CourseB = async function () {
    do {
        var check = false;
        console.log("Course A");
        console.log("0. [Movie]");
        console.log("1. [Play]");
        console.log("2. [Opera]");
        process.stdout.write('What will you see the next?(1,2): ');
        var secondA = await input();
        if (secondA == 1) {
            this.one.MethodOne()    // Movie
            this.two.MethodThree()    // Play
            break;
        }
        else if (secondA == 2) {
            this.one.MethodOne()        // Movie
            this.three.MethodFive()    // Opera
            break;
        }
        else {
            console.log("잘못 입력하셨습니다.");
            check = true;
            continue;
        }

    } while (check);
}
Facade.prototype.CourseC = async function () {
    do {
        var check = false;
        console.log("Course A");
        console.log("0. [Movie]");
        console.log("1. [Musical]");
        console.log("2. [Opera]");
        process.stdout.write('What will you see the next?(1,2): ');
        var secondA = await input();
        if (secondA == 1) {
            this.one.MethodOne()    // Movie
            this.two.MethodTwo()    // Musical
            break;
        }
        else if (secondA == 2) {
            this.one.MethodOne()        // Movie
            this.three.MethodFive()    // Opera
            break;
        }
        else {
            console.log("잘못 입력하셨습니다.");
            check = true;
            continue;
        }

    } while (check);
}

var moon = new Facade()

moon.CourseA()
