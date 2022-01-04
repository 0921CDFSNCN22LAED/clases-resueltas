const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    const promise = db.Genre.findAll();
    promise.then((genres) => {
      res.render("genresList", {
        genres: genres,
      });
    });
  },
  detail: (req, res) => {
    const promise = db.Genre.findByPk(req.params.id);
    promise.then((genre) => {
      res.render("genresDetail", {
        genre: genre,
      });
    });
  },
};
