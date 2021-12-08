const { body } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("Tenes que ingresar el campo Nombre"),
  body("age")
    .isNumeric()
    .withMessage("Tenés que ingresar un valor numerico en el campo Edad"),
];
