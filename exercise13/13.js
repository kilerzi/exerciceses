let favoriteMovie = {
  title: "Inception",
  year: 2010,
  genres: ["Action", "Sci-Fi", "Thriller"],
};

favoriteMovie.genres.push("Mystery");

console.log(
  `My favorite movie is ${favoriteMovie.title}, released in ${favoriteMovie.year}.`
);
