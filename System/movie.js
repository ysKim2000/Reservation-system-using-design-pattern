const { ReserveSystem } = require('../main.js');
const { MovieType } = require('../Compositions/movieType.js');
const { Seats } = require('../Compositions/seats.js');
const { Times } = require('../Compositions/times.js');

function Movie(movieTimePrice, movieTypePrice, movieSeatPrice) {
    this.movieTimePrice = movieTimePrice;   // 영화 시간에 따른 가격
    this.movieTypePrice = movieTypePrice;   // 영화 유형에 따른 가격
    this.movieSeatPrice = movieSeatPrice;   // 영화 좌석에 따른 가격
};

// clone
Movie.prototype = ReserveSystem.prototype;

// 영화 선택
Movie.prototype.selectMovie = function () {
    const movieData = Array("그 시절, 우리가 좋아했던 소녀", "나는 내일, 어제의 너를 만난다", "극장판 귀멸의 칼날: 무한열차편");
    console.log('[Box Office]');
    console.log("1. 그 시절, 우리가 좋아했던 소녀 ", " 2. 나는 내일, 어제의 너를 만난다", " 3. 극장판 귀멸의 칼날: 무한열차편");
    this.name = movieData[1];
    this.type = "Movie";
    console.log("Selected \"" + this.name + "\".\n");
};

// 영화 시간 선택
Movie.prototype.selectTime = function () {
    const movieTimes = Array("morning", "branch", "basic");
    console.log("1. morning ", " 2. branch ", " 3. basic");
    this.movieTimePrice = new Times().selectTime(movieTimes[2]).getPrice();     // 영화 시간에 따른 가격 가져오기
    console.log("Selected \"" + movieTimes[2] + "\".\n");
};

// 영화 유형 선택
Movie.prototype.selectType = function () {
    const movieTypes = Array("2D Movie", "3D Movie", "IMAX Movie", "4DX Movie");
    console.log("1. 2D Movie ", " 2. 3D Movie ", " 3. IMAX Movie ", " 4. 4DX Movie");
    this.movieTypePrice = new MovieType().selectMovieType(movieTypes[2]).getPrice();    // 영화 유형에 따른 가격 가져오기
    console.log("Selected \"" + movieTypes[2] + "\".\n");
};

// 영화 좌석 선택
Movie.prototype.selectMovieSeat = function () {
    const movieSeats = Array("Economy Zone", "Standard Zone", "Prime Zone");
    console.log("1. Economy Zone ", " 2. Standard Zone ", " 3. Prime Zone ");
    this.movieSeatPrice = new Seats().createMovieSeats(movieSeats[1]).getPrice();   // 영화 좌석에 따른 가격 가져오기
    console.log("Selected \"" + movieSeats[1] + "\".\n");
};

module.exports = { Movie };