db.movieDetails.updateOne({
  title: "The Martian"
}, {
  $inc: {
    "tomato.reviews" : 3,
    "tomato.userReviews" : 25
  }
});