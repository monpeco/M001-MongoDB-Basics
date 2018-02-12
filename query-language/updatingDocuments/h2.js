db.movieDetails.updateOne({
  "title" : "Once Upon a Time in the West"
}, {
  $set: {
    plot: "epic story "
  }
});