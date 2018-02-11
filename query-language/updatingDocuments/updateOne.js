db.movieDetails.updateOne({
  title: "The Martian"
}, {
  $set: {
    poster: "http://ia.media-imdb.com/images"
  }
});