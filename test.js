const request = require('request');
const moment = require('moment');

function Culture(name, date, place, startTime, endTime){
    this.name = name;
    this.date = date;
    this.place = place;
    this.startTime = startTime;
    this.endTime = endTime;
}

Culture.prototype.seats = function(row, column){
    seats = Array.from(Array(row), () => Array(column).fill('[ □ ]'));
}
// 클로저를 이용해 공통적인 부분 리턴, 안 쓰는 기능은 숨긴다.

var Movie = new Culture('testMovieName', 'testMovieDate', 'testMoviePlace', 'testMovieStartTime', 'testMovieEndTime');
// movie.seats() 
var Musical = new Culture('testMusicalName', 'testMusicalDate', 'testMusicalPlace', 'testMusicalStartTime', 'testMusicalEndTime');
var Theater = new Culture('testTheaterName', 'testTheaterDate', 'testTheaterPlace', 'testTheaterStartTime', 'testTheaterEndTime');
var Opera = new Culture('testOperaName', 'testOperaDate', 'testOperaPlace', 'testOperaStartTime', 'testOperaEndTime');
var Gallery = new Culture('testGalleryName', 'testGalleryDate', 'testGalleryPlace', 'testGalleryStartTime', 'testGalleryEndTime');

// 아래꺼를 커링함수로 = 영화가 저장된 상태 시간을 선택가능하고 시간 상태로 좌석 선택 그리고 이 세가지 정보를 모아서 결제를 팍!
// 아래꺼들은 함수로 구현 그리고 커링 함수로 파바박
//영화 선택-> 시간 선택->좌석 선택-> 결제

// var culture = {
//     seats: Array.from(Array(5), () => Array(3).fill('□')),
//     enjoy() {
//         console.log("enjoying..");
//     },
// };

// // 영화, 연극, 뮤지컬, 미술관
// const movie = {
//     movieName: movieNm = 'testName',
//     MovieRank: rank = 'testRank',
// };
// movie.__proto__ = culture;

// const theater = {
//     theaterName: title = 'testName',
// };
// theater.__proto__ = culture;

// const musical = {
//     musicalName: title = 'testName',
// };
// musical.__proto__ = culture;

// const gallery = {
//     seats: null,
//     arts: artsName = 'testName',
// }
// gallery.__proto__ = culture;

// console.log(movie.seats)
// console.log(theater.seats)
// console.log(musical.seats)

// for(let i = 0; i < culture.seats.length; i++){
//     for(let j = 0; j < culture.seats[i].length; j++){
//         console.log(culture.seats[i][j]);
//     }
// }
// theater.enjoy();

// cultureCourse.prototype=culture;

// const cultureCourse = (function () {

//     function Strategy() {
//     }
//     // Object.setPrototypeOf(cultureCourse, culture);
//     Strategy.prototype.setCulture = function (culture) {
//         this._culture = culture;
//     };
//     Strategy.prototype.execute = function () {
//         this._culture.execute();
//     }

//     return Strategy;
// })();

// const Movie = (function () {
//     function movieStrategy() { };
//     this.movieName = 'testName',
//         this.MovieRank = 'testRank',
//         movieStrategy.prototype.execute = function () {
//             getMovieApi(REQUEST_URL, queryParams);
//             // console.log("영화 감상 시간입니다.");
//         }

//     return movieStrategy;
// })();

// const Theater = (function () {
//     function theaterStrategy() { };
//     this.theaterName = 'testName';
//     theaterStrategy.prototype.execute = function () {
//         console.log("연극 감상 시간입니다.");
//     }

//     return theaterStrategy;
// })();

// const Musical = (function () {
//     function musicalStrategy() { };
//     this.musicalName = 'testName';
//     musicalStrategy.prototype.execute = function () {
//         console.log("뮤지컬 감상 시간입니다.");
//     }

//     return musicalStrategy;
// })();

// const Gallery = (function () {
//     function galleryStrategy() { };
//     seats: null,
//         this.artsName = 'testName',
//         galleryStrategy.prototype.execute = function () {
//             console.log("그림 감상 시간입니다.");
//         }

//     return galleryStrategy;
// })();

// var getMovieApi = function (url, queryParams) { // JSON 
//     console.log("API 요청 중..");
//     request({
//         url: url + queryParams,
//         method: 'GET'
//     }, function (error, response, body) {
//         if (error) throw error;
//         const data = JSON.parse(body);
//         const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
//         console.log(dailyBoxOfficeList == undefined)
//         console.log(data.boxOfficeResult.boxofficeType);
//         for (let i = 0; i < dailyBoxOfficeList.length; i++) {
//             console.log(dailyBoxOfficeList[i].rnum + " - " + dailyBoxOfficeList[i].movieNm);
//             test = dailyBoxOfficeList[i].movieNm;
//         }
//     });
// }

// const targetDate = moment().subtract(1, 'days').format('YYYYMMDD'); // 하루 전 날
// const REQUEST_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
// var queryParams = '?' + encodeURIComponent('key') + '=999bdc7e274c0a5e1557a0642d612aee'; // Service Key
// queryParams += '&' + encodeURIComponent('targetDt') + '=' + encodeURIComponent(targetDate); // 날짜
// queryParams += '&' + encodeURIComponent('itemPerPage') + '=' + encodeURIComponent('10'); // item의 갯수 
// queryParams += '&' + encodeURIComponent('multiMovieYn') + '=' + encodeURIComponent('N'); // Y: 다양성 영화, N: 상업영화 (default: 전체)
// queryParams += '&' + encodeURIComponent('repNationCd') + '=' + encodeURIComponent(''); // K: 한국영화, F: 외국영화 (default: 전체)
// queryParams += '&' + encodeURIComponent('wideAreaCd') + '=' + encodeURIComponent(''); // 지역 Code

// const targetDate = moment().subtract(1, 'days').format('YYYYMMDD'); // 하루 전 날
// const REQUEST_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
// var KEY = '999bdc7e274c0a5e1557a0642d612aee';
// var targetDt = targetDate;
// var itemPerPage = '10';
// var multiMovieYn = 'N'

// var curry = KEY => targetDt => itemPerPage => multiMovieYn => url_curry(KEY, targetDt, itemPerPage, multiMovieYn);
// function url_curry(key, date, page, Movie) {
//     return 'key=' + key + '&targetDt=' + date + '&itemPerPage=' + page + '&multiMovieYn=' + Movie
//     // console.log(url + 'key=' + key + '&targetDt=' + date + '&itemPerPage=' + page + '&multiMovieYn=' + Movie)
// }
// var getUrl = curry(url_curry)
// let queryParams = getUrl(KEY)
//console.log(queryParams)

// var queryParams = '?' + encodeURIComponent('key') + '=999bdc7e274c0a5e1557a0642d612aee'; // Service Key
// queryParams += '&' + encodeURIComponent('targetDt') + '=' + encodeURIComponent(targetDate); // item의 갯수
// queryParams += '&' + encodeURIComponent('itemPerPage') + '=' + encodeURIComponent('10'); // item의 갯수
// queryParams += '&' + encodeURIComponent('multiMovieYn') + '=' + encodeURIComponent('N'); // Y: 다양성 영화, N: 상업영화 (default: 전체)
// queryParams += '&' + encodeURIComponent('repNationCd') + '=' + encodeURIComponent(''); // K: 한국영화, F: 외국영화 (default: 전체)
// // queryParams += '&' + encodeURIComponent('wideAreaCd') + '=' + encodeURIComponent(''); // 지역 Code


// getMovieApi(REQUEST_URL, queryParams);

// const Culture = new cultureCourse();
// console.log(Culture.__proto__);

// const movieCourse = new Movie();
// const theaterCourse = new Theater();
// const musicalCourse = new Musical();
// const galleryCourse = new Gallery();

// Culture.setCulture(movieCourse);
// Culture.setCulture(musicalCourse);
