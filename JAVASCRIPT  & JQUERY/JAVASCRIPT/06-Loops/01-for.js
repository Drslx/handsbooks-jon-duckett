/* Loop padrao (for) - Se precisamos executar o codigo um numero de vezes, usamos o for.
- Temos um contador e uma condicao de fim
*/

// Exemplo simples do looo for.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/* Exemplos: iterando um array*/
let colorList = ["Branco", "Preto", "Azul", "Rosa"];
let infoList = "Cor Escolhida: ";

for (let i = 0; i < colorList.length; i++) {
  if (i === colorList.length - 1) {
    infoList += "and " + colorList[i] + ".";
  } else {
    infoList += colorList[i] + " ,";
  }
}
console.log(infoList);
