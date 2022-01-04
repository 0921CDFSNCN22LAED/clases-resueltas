module.exports = (Sequelize, dataTypes) => {
  const genre = Sequelize.define(
    "Genre",
    {
      name: dataTypes.STRING,
      ranking: dataTypes.INTEGER,
    },
    {
      tableName: "genres",
      timestamps: false,
    }
  );

  //ASSOCIATIONS

  return genre;
};
