const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController = {
  list: (req, res) => {
    const showCreateAlert = req.session.showCreateAlert || false;
    req.session.showCreateAlert = false;

    db.Movie.findAll().then((movies) => {
      res.render("moviesList.ejs", {
        movies,
        showCreateAlert,
      });
    });
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movie) => {
      res.render("moviesDetail.ejs", { movie });
    });
  },
  new: (req, res) => {
    db.Movie.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      res.render("newestMovies", { movies });
    });
  },
  recomended: (req, res) => {
    db.Movie.findAll({
      where: {
        rating: { [db.Sequelize.Op.gte]: 8 },
      },
      order: [["rating", "DESC"]],
    }).then((movies) => {
      res.render("recommendedMovies.ejs", { movies });
    });
  },
  //Aqui dispongo las rutas para trabajar con el CRUD
  add: async function (req, res) {
    res.render("moviesAdd", {
      allGenres: await Genres.findAll(),
    });
  },
  create: async function (req, res) {
    const { title, rating, awards, release_date, length, genre_id } = req.body;
    const movie = await db.Movie.create({
      title,
      rating,
      awards,
      release_date,
      length,
    });
    await movie.setGenre(genre_id);

    delete req.session.loggedUser;
    console.log("session", req.session);
    req.session.showCreateAlert = true;
    res.redirect("/movies");
  },
  edit: function (req, res) {},
  update: function (req, res) {},
  delete: function (req, res) {},
  destroy: function (req, res) {},
  addActor: function (req, res) {
    const { id, actorId } = req.params;
  },
};

module.exports = moviesController;
