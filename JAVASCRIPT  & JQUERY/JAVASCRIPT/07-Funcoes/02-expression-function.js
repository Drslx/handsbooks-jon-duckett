/* 
Funcao anónimas/expressão, se baseia em atribuir a funcao anónima a uma variavel,
assim essa funcao pode ser chamada a partir desta variavel.
*/

/* 
! Em uma expressão de funcao, a funcao so e processada depois que o interpretador,
recebe essa instrução. isso significa qye você nao pode chamar a funcao antes,
de o interpretador a descobrir. Isso significa que qualquer codigo que aparece ate,
esse ponto poderia potencialmente alterar o que entra nessa funcao.
*/

/* 
1: Declaramos a variavel que recebe a funcao. 
2: Passamos os parametros da funcao.
3: Declaramos outra variavel no scope que recebe os parametros da funcao.
4: Temos o retorno que será passado para a variavel expression que será chamada.

! Sintaxe let area = function (parametros) {codigo};
*/

let expression = function (width, height) {
  let result = width * height;
  return result;
};

/* Exemplo: 1 criando outra variavel que recebe o retorno expression */
let resultFunction = expression(3, 2);
console.log(resultFunction);

// Ou passando a funcao anónima e os parametros direto no log.
console.log(expression(3, 2));

// Exemplo: 2
let expressionTwo = function (width, height) {
  return width * height;
};

console.log(expressionTwo(3, 2));
