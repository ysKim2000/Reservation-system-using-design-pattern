// 영화진흥위원회 API https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do

const request = require('request');
const moment = require('moment');

// 이거 나중에 커링함수로 표현
const today = moment().subtract(1, 'days').format('YYYYMMDD'); // 하루 전 날

const REQUEST_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
var queryParams = '?' + encodeURIComponent('key') + '=999bdc7e274c0a5e1557a0642d612aee'; // Service Key
queryParams += '&' + encodeURIComponent('targetDt') + '=' + encodeURIComponent(today); // item의 갯수 
queryParams += '&' + encodeURIComponent('itemPerPage') + '=' + encodeURIComponent('10'); // item의 갯수 
queryParams += '&' + encodeURIComponent('multiMovieYn') + '=' + encodeURIComponent(''); // Y: 다양성 영화, N: 상업영화 (default: 전체)
queryParams += '&' + encodeURIComponent('repNationCd') + '=' + encodeURIComponent(''); // K: 한국영화, F: 외국영화 (default: 전체)
// queryParams += '&' + encodeURIComponent('wideAreaCd') + '=' + encodeURIComponent('20200315'); //

request({
    url: REQUEST_URL + queryParams,
    method: 'GET'
}, function (error, response, body) {
    if (error) throw error;

    const data = JSON.parse(body)
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList
    console.log(data.boxOfficeResult.boxofficeType)
    for (let i = 0; i < dailyBoxOfficeList.length; i++) {
        console.log(dailyBoxOfficeList[i].rnum + " - " + dailyBoxOfficeList[i].movieNm);
    }
});


// rnum(string): 순번
// rank(string): 해당일자의 박스오피스 순위
// movieCd(string): 영화 대표코드
// movieNm(string): 영화명(국문)