const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    //Obtener todas las peliculas de la DB
    const promise = db.Movie.findAll();
    promise.then((movies) => {
      res.render("moviesList", {
        movies: movies,
      });
    });
  },
  detail: (req, res) => {
    //Obtener todas las peliculas de la DB
    const promise = db.Movie.findByPk(req.params.id);
    promise.then((movie) => {
      res.render("moviesDetail", {
        movie: movie,
      });
    });
  },
};
