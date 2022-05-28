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

Facade.prototype.one = new SubSystemOne()
Facade.prototype.two = new SubSystemTwo()
Facade.prototype.three = new SubSystemThree()
Facade.prototype.four = new SubSystemFour()
Facade.prototype.five = new SubSystemFive()

Facade.prototype.CourseA = async function () {
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
            this.three.MethodThree()    // Gallery
            break;
        }
        else {
            console.log("잘못 입력하셨습니다.");
            check = true;
            continue;
        }

    } while (check);
}
Facade.prototype.CourseB = function () {
    this.two.MethodTwo()
    this.three.MethodThree()
}
Facade.prototype.CourseC = function () {
    this.two.MethodTwo()
    this.three.MethodThree()
}

var moon = new Facade()

moon.CourseA()
