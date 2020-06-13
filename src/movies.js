// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (movies) {
  var directorsArray = movies.map(function(el){
    return el.director;
  });
return directorsArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniquifyArray (directorsArray) {
  let newArray = []; 
  for (let i ; i < directorsArray.length ; i++) {
    if (newArray.indexOf(directorsArray[i]) === -1) {
      newArray.push(directorsArray[i]);
    }
  }
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (movies){
let movieFilter = movies.filter(function (el){
  return el.director === "Steven Spielberg" && el.genre.includes("Drama");
});
return movieFilter.length;
};




// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
