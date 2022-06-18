/* Condicional ternario leva três operandos: (>= Comparador) (? = Verdadeiro ) (: = False) */

/* Exemplo com Operador Ternario (>= ? :) */
let saldoConta = 100;
let valorCamisa = saldoConta >= 100 ? "Comprar Camisa 1" : "Nao Comprar 1";
console.log(valorCamisa);

let luzOn = true;
let luzOff = luzOn == true ? "Luz Acesa" : "Luz Apagada";
console.log(luzOff);

/* Exemplo com Condicional (if else) */
let saldoContaA = 100;
let valorCamisaA = 100;

if (saldoContaA >= valorCamisaA) {
  console.log("Comprar Camisa A");
} else {
  console.log("Nao Comprar A");
}

/* Exemplo com Condicional (switch) */
let saldoContaB = 10;
let valorCamisaB = 100;

switch (saldoContaB >= valorCamisaB) {
  case true:
    console.log("Comprar Camisa B");
    break;
  case false:
    console.log("Nao Comprar B");
}
