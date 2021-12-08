module.exports = {
  home: (req, res) => {
    res.render("index", {
      userData: req.session.userData,
    });
  },
  postHandler: (req, res) => {
    req.session.userData = req.body;
    res.redirect("/");
  },
};
