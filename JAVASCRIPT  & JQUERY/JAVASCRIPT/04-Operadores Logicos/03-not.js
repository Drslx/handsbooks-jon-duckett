// Usando o operador (NOT = !) para verificar se o valor e diferente.
/* O último tipo de operador lógico, NOT, expressado pelo operador !, pode ser usado para negar uma expressão. */

/* Exemplo usando negação */
let statusOff = true;
let status1 = true;

if (!(statusOff == true)) {
  statusOff = status1;
  console.log("Ligado" + "", statusOff);
} else {
  console.log("Desligado" + "", statusOff);
}

/* Exemplo sem usar negação */
let statusOn = true;

if (statusOn == true) {
  console.log("Ligado" + "", statusOn);
} else {
  console.log("Desligado" + "", statusOn);
}
