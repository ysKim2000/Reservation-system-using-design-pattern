var input = require('./test.js').input;

module.exports =
{
    selectCourse : selectCourse
}
async function selectCourse() {
    do {
        var approval;
        console.log("[Course]");
        console.log("1. A  -  [Movie, Musical, Gallery]");
        console.log("2. B  -  [Movie, Play, Opera]");
        console.log("3. C  -  [Movie, Musical, Opera]");

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