module.exports = (Sequelize, dataTypes) => {
  const movie = Sequelize.define(
    "Movie",
    {
      title: dataTypes.STRING,
      rating: dataTypes.INTEGER,
      awards: dataTypes.INTEGER,
    },
    {
      tableName: "movies",
      timestamps: false,
    }
  );

  //ASSOCIATIONS

  return movie;
};
