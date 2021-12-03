const fs = require("fs");
const path = require("path");

module.exports = (req, res, next) => {
  next();

  fs.appendFileSync(
    path.join(__dirname, "../../logs/user-logs.txt"),
    `El usuario ingresó a la pagina: (${res.statusCode}) ${req.url} \n`
  );
};
