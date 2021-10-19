function saludar(url) {
  return "http://" + url;
}

//Mi array es un array de strings
function procesar(array, cb) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    const str = array[i];
    resultado.push(cb(str));
  }
  return resultado;
}

const arrayProcesado = procesar(["google.com", "digitalhouse.com.ar"], saludar);

console.log(arrayProcesado);
