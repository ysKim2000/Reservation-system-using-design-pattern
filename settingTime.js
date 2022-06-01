const readline = require('readline');

module.exports = 
{
    settingCourseTime : settingCourseTime,
    settingTime : settingTime
}

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

async function settingCourseTime(courseNum) {
    var approval = true;
    while (approval) {
        console.log("set the " + this.type + " time\n");
        console.log("<" + this.type + " timetable>");
        for (let i = 0; i < this.startTimeList.length; i++) {
            console.log(i + 1 + ".【" + this.startTimeList[i] + " : 00】" + "~【" + (this.startTimeList[i] + 1) + " : 00】");
        }
        console.log();
        console.log("Choose the time you want to watch " + this.type + "(input : 1 ~ " + this.startTimeList.length + "): ");
        var timeNum = await input();

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

async function settingTime() {
    if (this.courseTimeList[0] == 0) {
        await this.settingCourseTime(0);
    }
    else if (this.courseTimeList[1] == 0) {
        await this.settingCourseTime(1);
    }
    else {
        await this.settingCourseTime(2);
    }
};