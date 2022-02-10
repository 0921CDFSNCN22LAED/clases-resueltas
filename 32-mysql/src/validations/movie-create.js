const { body } = require("express-validator");
const movieService = require("../services/movie-service");

module.exports = [
  body("title")
    .isLength({ min: 1 })
    .withMessage("Title is required")
    .bail()
    .custom((value, { req }) => {
      return movieService.getOneByTitle(value).then((movie) => {
        if (movie) {
          return Promise.reject("Movie already exists");
        }
      });
    }),
];
