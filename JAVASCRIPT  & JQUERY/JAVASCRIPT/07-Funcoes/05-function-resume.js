// Funcao nomeadas
function myFunction(number1, number2) {
  return number1 * number2;
}
console.log(myFunction(3, 2));

// Funcao anónima/expressão
let myFunctionTwo = function (number1, number2) {
  return number1 * number2;
};
console.log(myFunctionTwo(3, 2));

// Expressão de Funcao imediata (IFFes)
let myFunctionTree = (function () {
  let number1 = 3;
  let number2 = 2;
  return number1 * number2;
})();
console.log(myFunctionTree);
