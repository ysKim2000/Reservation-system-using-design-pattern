var input = require('./test.js').input;

module.exports = 
{
    selectMovie : selectMovie
}

async function selectMovie() {
    var movieNum;

    do {
        console.log("Please choose a movie.");
        for (let i = 0; i < movieData.length; i++) {
            console.log(movieData[i]);
        }
        var approval;
        process.stdout.write('Input(1,2,3 ~): ');
        movieNum = await input();

        if (movieName[movieNum - 1] == undefined) {
            console.log("Wrong.");
            approval = true;
            continue;
        }
        console.log("\nDid you choose [" + movieName[movieNum - 1] + "]?");
        process.stdout.write("Input(yes or no): ");
        var check = await input();

        if (check == 'yes' || check == 'y' || check == 'Yes' || check == 'Y') {
            approval = false;
            Movie.name = movieName[movieNum - 1];
            // console.log(Movie.name);
            // console.log(Musical.name);
            // console.log(Play.name);
            // console.log(Opera.name);
            // console.log(Gallery.name);
        }
        else if (check == 'no' || check == 'n' || check == 'No' || check == 'N') {
            approval = true;
            continue;
        }
        else {
            console.log("Wrong.\n");
            approval = true;
            continue;
        }
    } while (approval);

    // return movieName[movieNum];
};