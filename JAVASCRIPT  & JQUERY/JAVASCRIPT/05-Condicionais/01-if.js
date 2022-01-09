/* Usando "IF" para verificar uma condicao verdadeira */
var saldo = 50;
if (saldo >= 50) {
  console.log("Seu saldo esta positivo! Costaria de fazer um investimento?");
}
if (saldo < 50 && saldo > 0) {
  console.log("Saldo" + "", saldo);
}
if (saldo === 0) {
  console.log("Seu saldo esta negativo! Gostaria de fazer um emprestimo?");
}

// Mas e recomendado usar if / else fazer o mesmo codigo e verificar o saldo.
// Exemplo: Codigo para compras em debito e verificação de saldo na conta.
// Lista de variaveis.
/* let saldoNaConta = 20;
let mínimoParaInvestir = 100; */
/*
1: Verificar saldo em conta atraves de um caixa ou internetBanking.
2: Retorna resultado conforme for debitado ou retirado dinheiro da conta.
3: Exibi opções para o usuario conforme seu saldo.
*/
/* if (saldoNaConta >= mínimoParaInvestir) {
  console.log(
    "Seu saldo e R$ " + saldoNaConta,
    "Gostaria de fazer um investimento?"
  );
} else if (saldoNaConta < mínimoParaInvestir && saldoNaConta > 0) {
  console.log("Seu saldo e R$ " + saldoNaConta, "Deseja sacar?");
} else {
  console.log(
    "Seu saldo e R$ " + saldoNaConta,
    "Gostaria de fazer um emprestimo?"
  );
} */

/*  Alguns exemplos */
let isOn = false;

if (isOn == true) {
  console.log("Luz Ligada");
} else {
  console.log("Luz Apagada");
}

let saldoAtual = true;

if (saldoAtual === true) {
  saldoAtual = saldoAtual++ * saldoAtual;
  console.log(saldoAtual);
}

let maiorIdade = false;
let portaria;

if (maiorIdade == true) {
  portaria = "Liberado";
  console.log(portaria);
} else {
  portaria = "Negado";
  console.log(portaria);
}

/* Exemplos iguais */

let valorA = 10;
if (valorA == 10) {
  console.log("Hello");
}

let valorB = true;
if (valorB == true) {
  console.log("Hello");
}
