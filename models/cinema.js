const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function (){
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.findByTitle = function (titleToFind) {
  const result = this.films.filter((film) => {
    return (film.title === titleToFind);
  });
  return result[0];
};

Cinema.prototype.findByGenre = function (genreToFind) {
  const result = this.films.filter((film) => {
    return (film.genre === genreToFind);
  });
  return result
};

Cinema.prototype.filmsFromAYear = function (releaseYear) {
  const result = this.films.some((film) => {
    return (film.year === releaseYear);
  });
  return result;
};

Cinema.prototype.filmsAreParticularLength = function (filmLength) {
  const result = this.films.every((film) => {
    return (film.length > filmLength);
  });
  return result;
};

Cinema.prototype.totalRunTime = function () {
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return result;
};

module.exports = Cinema;
