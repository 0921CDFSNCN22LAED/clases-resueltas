function sumar(a, b) {
  return a + b + restar(a, b);
}
function restar(a, b) {
  return a - b;
}

module.exports = {
  funcSumar: sumar,
  funcRestar: restar,
};
