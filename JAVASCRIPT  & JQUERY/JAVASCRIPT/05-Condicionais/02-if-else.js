// Comprar produto
// Usando "If e ELSE" para verificar uma condicao se um produto esta disponivel.
// Exemplo 1:
var quantidadeProduto = 3;
var produtoAtivo = true;

// Se a quantidade for maior que 0 e o produto estiver ativo.
if (quantidadeProduto > 0 && produtoAtivo) {
  console.log("Voce pode finalizar essa compra");
} else {
  // Condicao caso produto nao esteja disponivel.
  console.log("O produto nao esta disponivel no momento!");
}

// Exemplo 2:
var idade = 17;

if (idade >= 18) {
  console.log("Voce pode dirigir!");
} else {
  console.log("Voce nao pode dirigir!");
}

// Exemplo 3:
var diaDaSemana = "Terca";

// Verifica dia da semana, se o dia for diferente "Sabado ou Domingo" exibir Banco Aberto!.
if (diaDaSemana != "Sabado" && diaDaSemana != "Domingo") {
  // Exemplo ruim para a condicao.
  //if (diaDaSemana != "segunda" && diaDaSemana != "terca" && diaDaSemana != "Quarta" && diaDaSemana != "Quinta" && diaDaSemana != "Sexta") {

  console.log("Banco Aberto!");
} else {
  console.log("Banco fechado");
}

// Exemplo 4: Condicao que verifica se a pessoa e estrangeira
var estrangeiro = true;

if (estrangeiro) {
  console.log("Voce poderia apresentar seu RNF, por favor?");
} else {
  console.log("Voce poderia apresentar seu CPF, por favor?");
}

// Exemplo 5: Condicao para uso do brinquedo.
var usuarioAltura = 1.4;
var usuarioIdade = 21;

// Se a altura for maior que 150 metros.cm ou a idade for maior ou igual 21 anos.
if (usuarioAltura > 150 || usuarioIdade >= 21) {
  console.log("Voce pode usar o Brinquedo!");

  // Senao exibir que o usuario nao atende os requisitos.
} else {
  console.log("Desculpe, você nao atende os requisitos para usar o brinquedo");
}

// Exemplo 6: Condicao que verifica numero pares e impares.
var numeroDaSorte = 23;
if (numeroDaSorte % 2 == 1) {
  // % 2 == 0 // Mudamos o codigo para ele verificar o Par
  console.log("Par");
} else {
  console.log("Impar");
}

/* Aninhando if...else */
/* Mesmo que o código trabalhe em conjunto, cada uma das instruções if...else funcionam completamente independente uma da outra. */
let dia = "";
let tempo = "chuva";

if (dia == "") {
  if (tempo == "sol") {
    console.log("Viajar");
  } else if (tempo == "chuva") {
    console.log("Ficar em Casa");
  }
}

/* Exemplo com Condicional (if else) */
let saldoContaA = 100;
let valorCamisaA = 100;

if (saldoContaA >= valorCamisaA) {
  console.log("Comprar Camisa A");
} else {
  console.log("Nao Comprar A");
}
