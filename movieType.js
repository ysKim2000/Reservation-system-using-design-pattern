module.exports = { MovieType };

// type
function BasicMovie() {  // 일반 영화
  let typePrice = 0;
  this.getPrice = function () {
    return typePrice;
  }
}

function ThreeDimensionalMovie() { // 3D 영화
  let typePrice = 1000;
  this.getPrice = function () {
    return typePrice;
  }
}

function IMaxMovie() { // IMAX 영화
  let typePrice = 5000;
  this.getPrice = function () {
    return typePrice;
  }
}

function FourDimensionalXMovie() { // 4D 영화
  let typePrice = 4000;
  this.getPrice = function () {
    return typePrice;
  }
}

// time 
function MorningTimeMovie() { // 조조 영화
  let timePrice = 10000;
  this.getPrice = function () {
    return timePrice;
  }
}
function BranchTimeMovie() { // 아침 영화
  let timePrice = 12000;
  this.getPrice = function () {
    return timePrice;
  }
}

function BasicTimeMovie() { // 일반 영화
  let timePrice = 14000;
  this.getPrice = function () {
    return timePrice;
  }
}

//Movie Factory
function MovieType() {
  this.selectMovieTime = function (time) {
    switch (time) {
      case "morning":
        return new MorningTimeMovie();

      case "branch":
        return new BranchTimeMovie();

      case "basic":
        return new BasicTimeMovie();

      default:
        return new BasicTimeMovie();
    }
  }

  this.selectMovieType = function (type) {
    switch (type) {
      case "2D Movie":
        return new BasicMovie();

      case "3D Movie":
        return new ThreeDimensionalMovie();

      case "IMAX Movie":
        return new IMaxMovie();

      case "4DX Movie":
        return new FourDimensionalXMovie();

      default:
        return new BasicMovie();
    }
  }
}