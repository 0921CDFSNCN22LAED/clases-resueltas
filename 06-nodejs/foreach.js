const array = ["banana", "manzana"];

function saludar(saludo) {
  console.log(saludo);
}

function porCadaElementDelArray(valor, i, array) {}

const forEach = function (array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
};

const filter = function (array, cb) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
