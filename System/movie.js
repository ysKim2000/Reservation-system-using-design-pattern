const { ReserveSystem } = require('../main.js');
const { MovieType } = require('../Compositions/movieType.js');
const { Seats } = require('../Compositions/seats.js');
const { Times } = require('../Compositions/times.js');

function Movie(movieTime, movieType, movieSeat) {
    this.movieTime = movieTime;
    this.movieType = movieType;
    this.movieSeat = movieSeat;
};

// clone
Movie.prototype = ReserveSystem.prototype;

// function selectMovie(movie) {
//     const movieData = Array("그 시절, 우리가 좋아했던 소녀", "나는 내일, 어제의 너를 만난다", "극장판 귀멸의 칼날: 무한열차편");
//     console.log('[Box Office]');
//     console.log("1. 그 시절, 우리가 좋아했던 소녀 ", " 2. 나는 내일, 어제의 너를 만난다", " 3. 극장판 귀멸의 칼날: 무한열차편");
//     movie.name = movieData[1];
//     movie.type = "Movie";
//     console.log("Selected \"" + movie.name + "\".\n");
// }

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
    this.movieTime = new Times().selectTime(movieTimes[2]).getPrice();
    console.log("Selected \"" + movieTimes[2] + "\".\n");
};

// 영화 유형 선택
Movie.prototype.selectType = function () {
    const movieTypes = Array("2D Movie", "3D Movie", "IMAX Movie", "4DX Movie");
    console.log("1. 2D Movie ", " 2. 3D Movie ", " 3. IMAX Movie ", " 4. 4DX Movie");
    this.movieType = new MovieType().selectMovieType(movieTypes[2]).getPrice();
    console.log("Selected \"" + movieTypes[2] + "\".\n");
};

// 영화 좌석 선택
Movie.prototype.selectMovieSeat = function () {
    const movieSeats = Array("Economy Zone", "Standard Zone", "Prime Zone");
    console.log("1. Economy Zone ", " 2. Standard Zone ", " 3. Prime Zone ");
    this.movieSeat = new Seats().createMovieSeats(movieSeats[1]).getPrice();
    console.log("Selected \"" + movieSeats[1] + "\".\n");
};

// Movie.prototype.movieLogic = function () {
//     selectMovie(this);
//     this.selectTime();
//     this.selectType();
//     this.selectMovieSeat();
// };

module.exports = { Movie };