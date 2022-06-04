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

//Movie Factory
function MovieType() {
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