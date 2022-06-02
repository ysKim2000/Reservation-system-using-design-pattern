var input = require('./test.js').input;

module.exports = 
{
    reserveMovie : reserveMovie
}

async function reserveMovie() {

    console.log("\n" + Movie.name);
    seats = Movie.seats(5, 5);
    var isRun = false;
    do {
        console.log("──────────────────SCREEN──────────────────\n");
        process.stdout.write("       ");
        for (let i = 0; i < seats.length; i++) {
            process.stdout.write(" [ " + (i + 1) + " ] ");
        }
        console.log();
        for (let i = 0; i < seats.length; i++) {
            process.stdout.write("\n");
            process.stdout.write(" [ " + String.fromCharCode([i + 65]) + " ] ");
            for (let j = 0; j < seats[i].length; j++) {
                if (seats[i][j] == null) {
                    process.stdout.write(" [ □ ] ");
                } else if (seats[i][j] == 0) {
                    process.stdout.write(" [ □ ] ");
                } else {
                    process.stdout.write(" [ ■ ] ");
                }
            }
            process.stdout.write("\n");
        }
        console.log("──────────────────────────────────────────");
        console.log("(예약 종료 exit)")
        process.stdout.write("Input(A ~ E): ");
        var q1 = await input();
        if (q1 == 'exit' || q1 == 'EXIT') {
            isRun = false;
            break;
        }
        process.stdout.write("Input(1 ~ 5): ");
        var q2 = await input();
        if (q2 == 'exit' || q2 == 'EXIT') {
            isRun = false;
            break;
        }
        if (q1 >= String.fromCharCode([65]) && q1 <= String.fromCharCode([69]) && q2 > 0 && q2 < 6) {// A, B, C, D, E
            console.log(q1 + "열 " + q2 + "행");
        }
        else {
            console.log("Wrong!");
            isRun = true;
            continue;
        }
        process.stdout.write("Is Correct? (yes or no): ");
        var q3 = await input();
        if (q3 == 'yes' || q3 == 'y' || q3 == 'Yes' || q3 == 'Y') {
            if (seats[q1.charCodeAt() - 65][q2 - 1] == undefined || seats[q1.charCodeAt() - 65][q2 - 1] == 0 || seats[q1.charCodeAt() - 65][q2 - 1] == null) {
                seats[q1.charCodeAt() - 65][q2 - 1] = 1;
                console.log("\nComplete reservation");
            }
            else {
                console.log("This seat is already reserved.");
            }
            isRun = true;
            continue;

        }
        else if (q3 == 'no' || q3 == 'n' || q3 == 'No' || q3 == 'N') {
            isRun = true;
            continue;
        }
        else if (q3 == 'exit' || q3 == 'EXIT') {
            isRun = false;
            break;
        }
        else {
            console.log("Wrong!");
            isRun = true;
            continue;
        }
    } while (isRun);

}