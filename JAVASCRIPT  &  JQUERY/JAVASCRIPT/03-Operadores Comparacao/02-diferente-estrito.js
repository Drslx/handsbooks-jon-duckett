/* Exemplo de uso para operedor de diferente */

/*  Exemplo: 1 usando somente operador de comparação (!==) */
let sexoA = "F",
  idadeA = 20;
if (sexoA !== "M") {
  console.log("Nao Permitido");
}

/* Exemplo: 2 usando usando operador de comparação (!==) e lógico (||) e (<) */
let sexoB = "M",
  idadeB = 20;
if (sexoB !== "F" || idadeB < 20) {
  console.log("Nao Permitido");
}

/* Exemplo: 3 incluindo else */
let diferente = 1;
if (diferente !== 10) {
  console.log("Diferente de 10");
} else {
  console.log("Igual a 10");
}

/* Comparação estrita com uma string e um numero */
let teste2 = "10" !== 10;
console.log(teste2, "" + "Compara os tipos");

/* Comparação nao estrita com uma string com um numero */
let teste3 = "10" != 10;
console.log(teste3, "" + "Compara o conteudo");
