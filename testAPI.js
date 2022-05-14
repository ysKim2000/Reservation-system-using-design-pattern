const { default: axios } = require('axios');
const request = require('request');
const moment = require('moment');


// 이거 나중에 커링함수로 표현
const AUTH_KEY = "?key=999bdc7e274c0a5e1557a0642d612aee"; // 발급받은 인증키 
const itemPerPage = "&itemPerPage=10"; // 결과 ROW 의 개수( 최대 10개 ) 
const today = moment().subtract(1, 'days').format('YYYYMMDD'); // 하루 전 날
const targetDt = "&" + today; // 조회하고자 하는 날짜 
const multiMovieYn = "&"; // Y:다양성 영화, N:상업영화, Default:전체 
const repNationCd = "&"; // K:한국영화, F:외국영화, Default:전체

const REQUEST_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json"
    + AUTH_KEY
    + targetDt
    + itemPerPage
    + multiMovieYn
    + repNationCd

request(REQUEST_URL, (err, response, body) => {
    if(err) throw err;
    console.log(body);
})

var data = []

// var xhr = new XMLHttpRequest();
// var url = REQUEST_URL;
// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var json = JSON.parse(xhr.responseText);
//         console.log(json.email + ", " + json.password);
//     }
// };
// var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
// xhr.send(data);

// request(REQUEST_URL, (err, response, body) => {
//     if (err) throw err;
//     console.log(body);
//     for (let i = 0; i < 10; i++) {
//         data.push(
//             res['data']['data'][i]['rank'],
//             res['data']['data'][i]['movieNm'],
//             res['data']['data'][i]['openDt']
//         )
//     }
// });

// var getApi = function (url) {
//     console.log('API 요청 중');
//     axios.get(url) // url 접속 -> 정보 보내기
//       .then(res => {
//         for (let i = 0; i < 10; i++) {
//           data.push([
//             res['data']['data'][i]['rank'],
//             res['data']['data'][i]['movieNm'],
//             res['data']['data'][i]['openDt']
//           ]);
//         }
//       })
//     console.log('API 요청 완료')
//   }

//   getApi(REQUEST_URL)

// var main = async function() {
//   var url = [];
//   var menu = 0;
//   var menuValue = 0;
//   var location = ''
// }


// function doRequest(url) {
//     return new Promise(function (resolve, reject) {
//       request(url, function (error, response) {
//         if (!error && response.statusCode == 200) {
//           resolve(response);
//         } else {
//           reject(error);
//         }
//       });
//     });
//   }
//   async function main() {
//     doRequest(REQUEST_URL).then(function (res) {
//       console.log(res.body);
//     });
//   }


// rnum(string): 순번
// rank(string): 해당일자의 박스오피스 순위
// movieCd(string): 영화 대표코드
// movieNm(string): 영화명(국문)
