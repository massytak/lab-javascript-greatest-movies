// Iteration 1: All directors? - Get the array of all directors.
  

  function getAllDirectors(movies){
      let directors= movies.map (function(movie){
        return  movie.director;
      })  
      return directors    //[`peter weir,.....`]
  }
  
  /*function getAllDirectors(movies){
    return movies.map (function(movie){
      return  movie.director;
    })  
}*/
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*
function howManyMovies(moviesList){
  // On filtre les films de Steven S 
  let stevenMovies= moviesList.filter(function(el) {
    return el.director==="Steven Spielberg"
  }) // [ {...}, {...}, {. ]



  // On filtre les dramas (de Steven S)
  let stevenDramaMovies = stevenMovies.filter(function(el){
    return el.genre.includes('Drama') // ture/false
  })

  return stevenDramaMovies.length ;
};

//la fonction doit nous retourner tous les films dont le réal est Spielberg

*/

function howManyMovies(moviesList){
    // On filtre les films de Steven S 
    let stevenMovies= moviesList.filter(function(el) {
      return el.director==="Steven Spielberg"
    }) // [ {...}, {...}, {. ]
    // On filtre les dramas (de Steven S)
    let stevenDramaMovies = stevenMovies.filter(function(el){
      return el.genre.includes('Drama') // ture/false
    })
    return stevenDramaMovies.length ;
  };
>>>>>>> 2c200917de06001a3248bc07805a73612612f68e
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (movies){
    if (movies.length<1){
        return 0
    }
    let sum=movies.reduce (function(acc , val){
        let filmRate= +(val.rate)||0;
        return acc + filmRate
    },0)
return +(sum/movies.length).toFixed(2);
}
// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
