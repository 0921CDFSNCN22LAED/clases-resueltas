module.exports = (users) => {
  return (req, res, next) => {
    const user = req.query.user;
    if (users.includes(user)) {
      res.locals.loggedUser = user;
      next();
    } else {
      res.send("No tienes los privilegios para ingresar");
    }
  };
};
