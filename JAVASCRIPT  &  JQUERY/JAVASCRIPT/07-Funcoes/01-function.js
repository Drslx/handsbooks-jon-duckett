/* Funções */

/* Exemplo de funcao para alterar texto em um html */
/* 
let msg = "sign up to receive newsletter for 10% off!";

function updateMessage() {
  let el = document.getElementById("message");
  el.textContent = msg;
}
updateMessage(); 

*/

// Exemplo: 2 Declarando uma funcao.
/* 
1: Palavra Chave function
2: Nome da funcao seguido de (parenteses)
3: Retorna valores
4: Bloco de codigo entre {chaves}
*/
function nameFunction() {
  return;
}

// Chamando uma funcao.
/* 
1: Uma funcao pode armazenar instruções para uma tarefa especifica
2: Quando você precisa que o script execute a tarefa, chame a funcao
*/
nameFunction();

// Exemplo: 3 Declarando funcao que precisam de informacoes.
/* 
1: Dentro de (parenteses temos os parametros)
2: Parametros sao usados como variaveis dentro da funcao
*/
function getArea(width, height) {
  return width * height;
}

/* 
Chamando funções que precisam de informacoes.
*/
// Exemplo 1: Argumentos como valores */
getArea(3, 5);

// Exemplo 2: Argumentos como variaveis */
let wallWidth = 3;
let wallHeight = 5;
getArea(wallWidth, wallHeight);

// Obtendo um único valor a partir de uma funcao.
function calculateArea(width, height) {
  let area = width * height;
  return area;
}
/* 
1: A funcao retorna a area de um retângulo para o codigo que a chamou.
2: Dentro da funcao temos uma variavel que faz o calculo da caixa.
3: A palavra chave return, retorna um valor para o codigo que chamou a funcao.
! Isso demonstra como a mesma funcao pode ser utilizada para seguir os mesmo passos como valores diferentes.
*/
let wallOne = calculateArea(3, 5);
let wallTwo = calculateArea(8, 5);
console.log("wallOne: " + wallOne + "", "wallTwo: " + wallTwo);

// Retornando no html
/* 
let test = document.getElementById("one");
test.textContent = "Tipo: " + typeof wallOne + " Value: " + wallOne; 
*/

// Obtendo múltiplos valores a partir de uma funcao.
// Temos um array dentro da funcao.
function getSize(width, height, depth) {
  let area = width * height;
  let volume = width * height * depth;
  let sizes = [area, volume];
  return sizes;
}
// Chamando funcao direto no log.
// ! Calculou area e depois volume.
console.log(getSize(3, 2, 3));

// Ou passando a funcao para uma variavel.
let testArea = getSize(3, 2, 3)[0];
let testVolume = getSize(3, 2, 3)[1];
let e = console.log("Area " + testArea + "", "Volume " + testVolume);
/* 
  ?
*/

/*
Resumo Parametros VS Argumentos.
1: Parametros = sao passadas dentro de parenteses.
2: Argumentos = sao passadas dentro de parenteses ao chamar a funcao
3: Palavra chave return retorna o valor do corpo para a funcao ao ser chamada.

! Sintaxe function area (parametros) {codigo};
*/
