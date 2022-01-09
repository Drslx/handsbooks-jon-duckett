/* Exemplos de como declarar variaveis do tipo number */

/* Sobrepondo o valor numerico */
let numeroA = 20;
numeroA = 30;
console.log("Valor atualizado" + "", numeroA);

/* Sobrepondo valor e repasando a soma para outra variavel */
n1 = 10;
n2 = 20;
let soma = n1 + n2;
console.log("Resultado recebido da soma" + "", soma);

/* Shorthand */
let preco = 10;
let quantidade = 5;
let total = preco * quantidade;
console.log(total);

let preco2, quantidade2, total2;

preco2 = 10;
quantidade2 = 5;

total2 = preco2 * quantidade2;
console.log(total2);

/* Shorthand e somando as duas */var n1 = 10,
  n2 = 10;
console.log("Soma entre as variaveis" + "", n1 + n2);


/* Exemplos de como declarar variaveis do tipo float */
let numeroB = 25.5;
let salario = 9.17
console.log("R$" + "", salario)