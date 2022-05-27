// 코스 = 전략 패턴
// 커맨드 패턴(선택, 예매
const request = require('request');
const moment = require('moment');

const targetDate = moment().subtract(1, 'days').format('YYYYMMDD'); // 하루 전 날
const REQUEST_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
var queryParams = '?' + encodeURIComponent('key') + '=999bdc7e274c0a5e1557a0642d612aee'; // Service Key
queryParams += '&' + encodeURIComponent('targetDt') + '=' + encodeURIComponent(targetDate); // 날짜
queryParams += '&' + encodeURIComponent('itemPerPage') + '=' + encodeURIComponent('10'); // item의 갯수 
queryParams += '&' + encodeURIComponent('multiMovieYn') + '=' + encodeURIComponent('N'); // Y: 다양성 영화, N: 상업영화 (default: 전체)
queryParams += '&' + encodeURIComponent('repNationCd') + '=' + encodeURIComponent(''); // K: 한국영화, F: 외국영화 (default: 전체)
queryParams += '&' + encodeURIComponent('wideAreaCd') + '=' + encodeURIComponent(''); // 지역 Code

class SelectCourese {
    constructor(movie, theater, musical, gallery) {
        this.movie = movie;
        this.theater = theater;
        this.musical = musical;
        this.gallery = gallery;
    }
}

const culture = {
    seats: Array.from(Array(3), () => Array(5).fill('[ □ ]')),
    enjoy() {
        console.log("enjoying..");
    },
};

// 영화, 연극, 뮤지컬, 미술관
const movie = {
    movieName: movieNm = 'testName',
    MovieRank: rank = 'testRank',
};
movie.__proto__ = culture;

const theater = {
    theaterName: title = 'testName',
};
theater.__proto__ = culture;

const musical = {
    musicalName: title = 'testName',
};
musical.__proto__ = culture;

const gallery = {
    seats: null,
    arts: artsName = 'testName',
};
gallery.__proto__ = culture;

// console.log(movie.seats)
// console.log(theater.seats)
// console.log(musical.seats)

for (let i = 0; i < culture.seats.length; i++) {
    for (let j = 0; j < culture.seats[i].length; j++) {
        console.log(culture.seats[i][j]);
    }
    console.log('\n');
}
theater.enjoy();

var getMovieApi = function (url, queryParams) { // JSON 
    console.log("API 요청 중..");
    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        if (error) throw error;

        const data = JSON.parse(body)
        const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList
        console.log(data.boxOfficeResult.boxofficeType)
        for (let i = 0; i < dailyBoxOfficeList.length; i++) {
            console.log(dailyBoxOfficeList[i].rnum + " - " + dailyBoxOfficeList[i].movieNm);
            test = dailyBoxOfficeList[i].movieNm;
        }
    });
}

getMovieApi(REQUEST_URL, queryParams)

var main = async function(){
    
}