module.exports = (req, res, next) => {
  const errors = req.session.errors;
  req.session.errors = null;
  res.locals.errors = errors;
  next();
};
