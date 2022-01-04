const { Movie } = require("../database/models");

module.exports = {
  getAll: () => {
    return Movie.findAll();
  },
  getOne: (id) => {
    return Movie.findByPk(id);
  },

  update: async (id, body) => {
    const movie = await Movie.findByPk(id);
    await movie.update({
      title: body.title,
      rating: body.rating,
      awards: body.awards,
    });
    return movie;
  },
};
