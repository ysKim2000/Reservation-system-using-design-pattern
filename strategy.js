// Course A, B, C 가 있음
const readline = require('readline');

var Strategy = (function () {
    function Strategy() {
        this.strategy = null;
    }
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
        console.log('A');
    };
    return CourseA;
})();

var CourseB = (function () {
    function CourseB() { }
    CourseB.prototype.execute = function () {
        console.log('B');
    };
    return CourseB;
})();

var CourseC = (function () {
    function CourseC() { }
    CourseC.prototype.execute = function () {
        console.log('C');
    };
    return CourseC;
})();

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

var main = async function () {
    do {
        var approval;
        console.log("[Course]");
        console.log("1. A Course[Movie, Musical, Gallery]");
        console.log("2. B Course[Movie, Play, Opera]");
        console.log("3. C Course[Movie, Musical, Opera]");

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
            console.log("잘못 입력하셨습니다.\n");
            approval = true;
            continue;
        }
        console.log("\n확실합니까?")
        process.stdout.write("입력(yes or no): ");
        var check = await input();

        if(check == 'yes' || check == 'y' || check == 'Yes' || check == 'Y'){
            strat.execute(); // execute strategy
            approval = false;
        }
        else if(check == 'no' || check == 'n' || check == 'No' || check == 'N'){
            approval = true;
            continue;
        }
        else{
            console.log("잘못 입력하셨습니다.\n");
        }

    } while (approval);
    console.log("종료");

};

main();