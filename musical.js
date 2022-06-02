const readline = require('readline');
const { watchShow } = require('./main.js');

module.exports = { Musical };

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


function Musical() { };
Musical.prototype = watchShow.prototype;

Musical.prototype.selectMusical = async function () {
    var musicalName= Array("지킬 앤 하이드", "난타", "오페라의 유령");
    do {
        console.log("\n[Musical]")
        console.log("Please choose a musical.");
        for (let i = 0; i < musicalName.length; i++) {
            console.log(i+1 +" - "+musicalName[i]);
        }
        var approval;
        process.stdout.write('Input(1,2,3): ');
        var musicalNum = await input();

        if (musicalName[musicalNum - 1] == undefined) {
            console.log("Wrong.");
            approval = true;
            continue;
        }
        console.log("\nDid you choose [" + musicalName[musicalNum - 1] + "]?");
        process.stdout.write("Input(yes or no): ");
        var check = await input();

        if (check == 'yes' || check == 'y' || check == 'Yes' || check == 'Y') {
            Musical.prototype.name = musicalName[musicalNum - 1];
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

Musical.prototype.reserveMusical = async function () {
    var seats = watchShow.prototype.seats(3, 5);
    var isRun = false;
    do {
        console.log("\n" + Musical.prototype.name);
        console.log(" ──────────────────STAGE──────────────────");
        console.log("|                                         |")
        console.log("|                                         |")
        console.log("|                                         |")
        console.log(" ─────────────────────────────────────────")
        process.stdout.write("       ");
        for (let i = 0; i < seats[0].length; i++){
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
        process.stdout.write("Input(A ~ C): ");
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
