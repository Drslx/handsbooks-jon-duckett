/* Exemplos de como declarar variáveis do tipo string */
let meuNome = "Douglas";
console.log(meuNome);

let nome = "Douglas";
console.log("Bem vindo ao curso " + nome);

/* Podemos retornar o valor chamando a variavel */
meuNome = "Ola";
console.log(meuNome);

// Sobrepondo o valor da variavel
var testeA = "x";
var testeA = "y";
console.log("Declarando com var " + testeA);

let testeB = "y";
testeB = "x";
console.log("Declarando com let " + testeB);

// Usando uma variavel para armazenar uma string e alterar no html.
let messageString = "Conteudo vindo da variavel";

let string = document.getElementById("string");
string.textContent = messageString
