const request = require('request');
const moment = require('moment');
const readline = require('readline');

const targetDate = moment().subtract(1, 'days').format('YYYYMMDD'); // 하루 전 날
const REQUEST_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
var queryParams = '?' + encodeURIComponent('key') + '=999bdc7e274c0a5e1557a0642d612aee'; // Service Key
queryParams += '&' + encodeURIComponent('targetDt') + '=' + encodeURIComponent(targetDate); // 날짜
queryParams += '&' + encodeURIComponent('itemPerPage') + '=' + encodeURIComponent('10'); // item의 갯수 
queryParams += '&' + encodeURIComponent('multiMovieYn') + '=' + encodeURIComponent('N'); // Y: 다양성 영화, N: 상업영화 (default: 전체)
queryParams += '&' + encodeURIComponent('repNationCd') + '=' + encodeURIComponent(''); // K: 한국영화, F: 외국영화 (default: 전체)
queryParams += '&' + encodeURIComponent('wideAreaCd') + '=' + encodeURIComponent(''); // 지역 Code

function Culture(name, date, place, startTime, endTime){
    this.name = name;
    this.date = date;
    this.place = place;
    this.startTime = startTime;
    this.endTime = endTime;
}

Culture.prototype.seats = function(row, column){
    seats = Array.from(Array(row), () => Array(column).fill('[ □ ]'));
    return seats
}
// 클로저를 이용해 공통적인 부분 리턴, 안 쓰는 기능은 숨긴다.

var Movie = new Culture('testMovieName', 'testMovieDate', 'testMoviePlace', 'testMovieStartTime', 'testMovieEndTime'); // 영화
console.log(Movie.seats(3, 5));
var Musical = new Culture('testMusicalName', 'testMusicalDate', 'testMusicalPlace', 'testMusicalStartTime', 'testMusicalEndTime'); // 뮤지컬
var Play = new Culture('testTheaterName', 'testTheaterDate', 'testTheaterPlace', 'testTheaterStartTime', 'testTheaterEndTime'); // 연극
var Opera = new Culture('testOperaName', 'testOperaDate', 'testOperaPlace', 'testOperaStartTime', 'testOperaEndTime'); // 오페라
var Gallery = new Culture('testGalleryName', 'testGalleryDate', 'testGalleryPlace', 'testGalleryStartTime', 'testGalleryEndTime'); // 미술관

// 아래꺼를 커링함수로 = 영화가 저장된 상태 시간을 선택가능하고 시간 상태로 좌석 선택 그리고 이 세가지 정보를 모아서 결제를 팍!
// 아래꺼들은 함수로 구현 그리고 커링 함수로 파바박
// 코스 선택(A, B, C, D, E)
// 영화 선택-> 시간 선택-> 좌석 선택-> 결제

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

var getMovieApi = function (REQUEST_URL, queryParams) { // JSON 
    console.log("API 요청 중..");
    request({
        url: REQUEST_URL + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        if (error) throw error;
        const data = JSON.parse(body);
        const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(dailyBoxOfficeList == undefined)
        console.log(data.boxOfficeResult.boxofficeType);
        for (let i = 0; i < dailyBoxOfficeList.length; i++) {
            console.log(dailyBoxOfficeList[i].rnum + " - " + dailyBoxOfficeList[i].movieNm);
            test = dailyBoxOfficeList[i].movieNm;
        }
    });
}

var selectCourse = function(){
    console.log()
}

var main = async function(){
    console.log()
}