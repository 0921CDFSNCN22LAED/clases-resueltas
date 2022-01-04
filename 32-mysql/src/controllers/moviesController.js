const db = require("../database/models");
const movieService = require("../services/movie-service");

module.exports = {
  list: async (req, res) => {
    //Obtener todas las peliculas de la DB
    const movies = await movieService.getAll();
    res.render("moviesList", {
      movies: movies,
    });
  },
  detail: async (req, res) => {
    const movie = await movieService.getOne(req.params.id);
    res.render("moviesDetail", {
      movie: movie,
    });
  },

  update: async (req, res) => {
    const movie = await movieService.update(req.params.id, req.body);
    res.redirect("/movies/detail/" + movie.id);
  },
};
