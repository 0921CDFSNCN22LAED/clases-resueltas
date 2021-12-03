module.exports = {
  home: (req, res) => {
    res.render("index.ejs");
  },

  cats: (req, res) => {
    res.render("cats.ejs", {
      title: "un titulo con mucho sentido",
    });
  },

  admin: (req, res) => {
    res.send(`Hola admin: ${res.locals.loggedUser}`);
  },
};
