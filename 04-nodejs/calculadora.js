const moment = require("moment");
const fechaHoy = moment();
console.log(fechaHoy.add(2, "months").format("DD/MM/YYYY"));

// const multiplicar = require("./funciones/multiplicar");
// const sumar = require("./funciones/sumar");

// console.log(sumar.funcSumar());
