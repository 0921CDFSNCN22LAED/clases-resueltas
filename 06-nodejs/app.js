// // tareas.json, tiene un array de tareas
// // cada tarea es un objeto con las propiedades titulo y estado

// //1. Leer el archivo
// // incluir el modulo de fs
// // leer los contenidos de el archivo tareas.json
// // guardarlos en una variable "tareasJSON" <-- esa variable va a tener un string
const fs = require("fs");
const tareasJSON = fs.readFileSync("./tareas.json");
// transformar ese string de formato JSON a un array
// guardarlo en una variable "listaDeTareas"
const listaDeTareas = JSON.parse(tareasJSON);

function listar() {
  // //2. Imprimir las tareas en terminal
  // // - [Pendiente] Estudiar objetos literales
  // // - [Pendiente] Estudiar json
  // // - [Pendiente] Cocinar para comer
  // // Recorrer el array de tareas
  for (let i = 0; i < listaDeTareas.length; i++) {
    const tareaActual = listaDeTareas[i];
    //    Por cada tarea
    //    Construir un string que tenga el estado entre corchetes y luego el titulo
    //    Guardar ese string en una variable
    //    Imprimir en pantalla ese string
    const textoAImprimir = "[" + tareaActual.estado + "] " + tareaActual.titulo;
    console.log(textoAImprimir);
  }
}

function crearTarea(titulo) {
  const tareaNueva = {
    titulo: titulo,
    estado: "pendiente",
  };

  listaDeTareas.push(tareaNueva);

  guardarTareas();
}

//Arguments Vector
//Parameters Array
const action = process.argv[2];

switch (action) {
  case "crear":
    crearTarea(process.argv[3]);
    break;
  case "listar":
    listar();
    break;

  case undefined:
    console.log("Estas loco, necesito una accion");
    break;
  default:
    console.log("Estas loco, no se de que hablas");
}

function guardarTareas() {
  const jsonArray = JSON.stringify(listaDeTareas, null, 4);
  fs.writeFileSync("./tareas.json", jsonArray);
}
