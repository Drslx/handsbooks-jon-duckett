/* Loop padrao (for) */
/* 
1: Iniciador - variavel com um numero que e incrementado com numero de loops.
2: Condicao de saída - e definido quando o loop deve parar de executar, geralemente apresenta um operador de comparação.
3: Expressão final - Avalia cada vez que loop passou por uma iteração, serve para incrementar ou decrementar.
*/
for (let loopFor = 0; loopFor < 10; loopFor++) {
  /* console.log(loopFor + 1); */
}

/* Exemplos: 1 iterando de um array*/
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
