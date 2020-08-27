var movies = [
  {title: "Star Wars",
   hasWatched: true, 
   rating: 5
  },
  {
    title: "logan",
    hasWatched: false,
    rating: 4.5
  },
  {
    title: "Batman",
    hasWatched: true,
    rating: 3.5
  }
]
movies.forEach(function(movie){
  var result = "you have  ";
  if(movie.hasWatched){
    result += "watched ";
  } else{
    result += "not watched ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result);
})