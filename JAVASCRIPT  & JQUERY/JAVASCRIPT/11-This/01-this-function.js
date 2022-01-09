/* 
A palavra-chave this e comumente usada dentro de funções e objetos.

*/

// Exemplo 1 Função de escopo global ou contexto, this retorna as propriedades de dentro da funcao.
function windowSize() {
  let width = this.innerWidth;
  let height = this.innerHeight;
  return [height, width];
}
console.log(windowSize());

// Exemplo 2 Variaveis globais a funcao esta no escopo global, this refere-se a variavel width.
let width = 600;
let shape = { width: 300 };
let showWidth = function () {
  /* document.write */ this.width;
};

console.log(showWidth());

// Exemplo 3 Um método de um objeto, em um método this refere-se ao objeto que o contem.
const shapeB = {
  width: 6,
  height: 2,
  getArea: function () {
    return this.width * this.height;
  },
};

let result = shapeB.getArea();
console.log(result);

// Exemplo 4 Expressão de funcao como método,
let widthC = 600;
let shapeC = { widthC: 300 };
let showWidthC = function () {
  /* document.write */ this.widthC;
};
let getWidth = undefined;
shapeC.getWidth = showWidthC();
shapeC.getWidth;
console.log(shapeC);
