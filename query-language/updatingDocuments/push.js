let reviewText1 = [
  "The Martian could have been a sad drama film",
  "everybody wants to see this movie",
  "This is a great movie"
].join()
db.movieDetails.updateOne({
  title: "The Martian"
}, {
  $push : {
    reviews : {
      rating: 4.5,
      reviewer: "Spencer H.",
      text: reviewText1
    }
  }
});