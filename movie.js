const request = require('request');
const readline = require('readline');
const moment = require('moment');

const { Culture } = require('./main.js');
module.exports = { Movie };

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

function Movie() { };
Movie.prototype = Culture.prototype;

var movieData = [];
var movieName = [];

// Request API
Movie.prototype.getMovieApi = function () { // JSON 
    const targetDate = moment().subtract(1, 'days').format('YYYYMMDD'); // 하루 전 날
    const REQUEST_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
    var queryParams = '?' + encodeURIComponent('key') + '=999bdc7e274c0a5e1557a0642d612aee'; // Service Key
    queryParams += '&' + encodeURIComponent('targetDt') + '=' + encodeURIComponent(targetDate); // 날짜
    queryParams += '&' + encodeURIComponent('itemPerPage') + '=' + encodeURIComponent('5'); // item의 갯수 
    queryParams += '&' + encodeURIComponent('multiMovieYn') + '=' + encodeURIComponent('N'); // Y: 다양성 영화, N: 상업영화 (default: 전체)
    queryParams += '&' + encodeURIComponent('repNationCd') + '=' + encodeURIComponent(''); // K: 한국영화, F: 외국영화 (default: 전체)
    // queryParams += '&' + encodeURIComponent('wideAreaCd') + '=' + encodeURIComponent(''); // 지역 Code
    request({
        url: REQUEST_URL + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        if (error) throw error;
        const API = JSON.parse(body);
        const dailyBoxOfficeList = API.boxOfficeResult.dailyBoxOfficeList;

        // console.log("\n" + API.boxOfficeResult.boxofficeType);
        for (let i = 0; i < dailyBoxOfficeList.length; i++) {
            // console.log(dailyBoxOfficeList[i].rnum + " - " + dailyBoxOfficeList[i].movieNm);
            movieData.push(dailyBoxOfficeList[i].rnum + " - " + dailyBoxOfficeList[i].movieNm);
            movieName.push(dailyBoxOfficeList[i].movieNm);
        }
    });
}

Movie.prototype.selectMovie = async function () {
    var movieNum;
    do {
        console.log("Please choose a movie.");
        for (let i = 0; i < movieData.length; i++) {
            console.log(movieData[i]);
        }
        var approval;
        process.stdout.write('Input(1,2,3 ~): ');
        movieNum = await input();

        if (movieName[movieNum - 1] == undefined) {
            console.log("Wrong.");
            approval = true;
            continue;
        }
        console.log("\nDid you choose [" + movieName[movieNum - 1] + "]?");
        process.stdout.write("Input(yes or no): ");
        var check = await input();

        if (check == 'yes' || check == 'y' || check == 'Yes' || check == 'Y') {
            approval = false;
            Movie.name = movieName[movieNum - 1];
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


Movie.prototype.reserveMovie = async function () {
    console.log("\n" + Movie.name);
    seats = Movie.prototype.seats(5, 5);
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