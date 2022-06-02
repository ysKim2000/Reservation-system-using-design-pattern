module.exports = 
{
    getMovieApi : getMovieApi
}

function getMovieApi() { // JSON 
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