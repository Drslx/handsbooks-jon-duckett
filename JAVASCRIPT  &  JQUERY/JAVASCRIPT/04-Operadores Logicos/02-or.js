/* Operador (OR = ||) pelo menos uma opcao sendo true */
/* permite encadear duas ou mais expressões para que uma ou mais delas tenham que ser avaliadas individualmente como true assim toda a expressão retorna true. */

/* Comparando (OR = ||) dentro do if Barrando sexo Feminino e Menores */
let sexoA = "M";
let idadeA = 17;

if (sexoA === "F" || idadeA < 18) {
  console.log("Nao Permitido" + "!");
} else {
  console.log("Permitido" + "!");
}

/* Comparação (OR = ||) fora do if Barrando sexo Masculino e Menores*/
let sexoB = "F";
let idadeB = 17;
let verificar = sexoB != "F" || idadeB < 18;

if (verificar === true) {
  console.log("Nao Permitido" + "!");
} else {
  console.log("Permitido" + "!");
}

