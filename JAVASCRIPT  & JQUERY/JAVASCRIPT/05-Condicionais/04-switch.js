/* Exemplo: 1 de uso condicional com (switch) */
let pesoPet = 10;

switch (pesoPet) {
  case 5:
    console.log("Abaixo do Peso Ideal");
    break;
  case 10:
    console.log("Peso Ideal");
  default:
    break;
}

/* Exemplo: 2 */
let saldoContaB = 10;
let valorCamisaB = 100;

switch (saldoContaB >= valorCamisaB) {
  case true:
    console.log("Comprar Camisa B");
    break;
  case false:
    console.log("Nao Comprar B");
}

/* Exemplo: 3 */
let sexo = "feminino";

switch (sexo) {
  case "feminino":
    console.log("Bem-vinda!");
    break;
  case false:
    console.log("Bem-vindo!");
}

/* Exemplo: 4 */
let mes = 4;
let nomeMes = "";

switch (mes) {
  case 1:
    nomeMes = "Janeiro";
    break;
  case 2:
    nomeMes = "Fevereiro";
    break;
  case 4:
    nomeMes = "Abril";
    break;
  case 5:
    nomeMes = "Maio";
    break;

  default:
    nomeMes = "Mes que vem";
}
console.log(nomeMes);

/* Exemplo: 5 */
mes = "Março";

switch (mes) {
  case "Janeiro":
  case "Fevereiro":
    /*  */
  case "Março":
    console.log("Verão!");
    break;
  default:
    console.log("Frio");
}
