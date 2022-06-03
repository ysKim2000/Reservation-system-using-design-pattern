const { Culture } = require('./main.js');
const { MovieType } = require('./movieType.js');
const { Seats } = require('./seats.js');
module.exports = { Movie };

function Movie(movieTime, movieType, movieSeat) { 
    this.movieTime = movieTime;
    this.movieType = movieType;
    this.movieSeat = movieSeat;
};
// clone
Movie.prototype = Culture.prototype;

// 영화 선택
Movie.prototype.selectMovie = function () {    
    var movieData = Array("그 시절, 우리가 좋아했던 소녀", "나는 내일, 어제의 너를 만난다", "극장판 귀멸의 칼날: 무한열차편");
    console.log('[Box Office]');
    console.log("Please choose the movie.");
    for (let i = 0; i < movieData.length; i++) {
        console.log(i + 1 + ". " + movieData[i]);
    }
    this.name = movieData[1];
    this.type = "Movie";
    console.log("Selected \"" + this.name + "\".\n");
};

// 영화 시간 선택
Movie.prototype.selectTime = function(){
    var movieTimes = Array("morning", "branch", "basic");
    console.log("Please choose the time.");
    for (let i = 0; i < movieTimes.length; i++) {
        console.log(i + 1 + ". " + movieTimes[i]);
    }
    this.movieTime = new MovieType().selectMovieTime(movieTimes[2]).getPrice();
    console.log("Selected \"" + movieTimes[2] + "\".\n");
}

// 영화 유형 선택
Movie.prototype.selectType = function(){
    var movieTypes = Array("2D Movie", "3D Movie", "IMAX Movie", "4DX Movie");
    console.log("Please choose the type.");
    for (let i = 0; i < movieTypes.length; i++) {
        console.log(i + 1 + ". " + movieTypes[i]);
    }
    this.movieType = new MovieType().selectMovieType(movieTypes[2]).getPrice();
    console.log("Selected \"" + movieTypes[2] + "\".\n");
}

// 영화 좌석 선택
Movie.prototype.selectSeat = function(){
    var movieSeats = Array("Economy Zone", "Standard Zone", "Prime Zone", "Impaired Zone");
    console.log("Please choose the seat.");
    for (let i = 0; i < movieSeats.length; i++) {
        console.log(i + 1 + ". " + movieSeats[i]);
    }
    this.movieSeat = new Seats().createSeats(movieSeats[2]).getPrice();
    console.log("Selected \"" + movieSeats[2] + "\".\n");
}