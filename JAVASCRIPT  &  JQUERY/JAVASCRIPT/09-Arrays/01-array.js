// Exemplos de como declarar variaveis do tipo array
// Sao declarados dentro de colchetes
let codigoValido = [
  "RXB-2525",
  "AKX-3333",
  "ORO-7142",
  "RXB-2525",
  "AKX-3333",
  "ORO-7142",
  "AKX-3333",
  "RXB-2525",
  "AKX-3333",
  "AKX-3333",
  "RXB-2525",
  "AKX-3333",
  "RXB-2525",
  "AKX-3333",
  "ORO-7142",
  "AKX-3333",
  "AKX-3333",
  "RXB-2525",
];

/* let colors = ["white", "blue", "custom"];
/* Atualiza o terceiro item no array */
/* colors[2] = "black";
let customColor = document.getElementById("colors");
customColor.textContent = colors[2]; */

/* Para acessar o indice do array colocamos a posicao dentro de colchetes [0] */
/* console.log(codigoValido);
console.log(codigoValido[0]); */

/* Exemplo para recuperar dados a partir de um indice */
let colors = ["white", "black", "custom"];
console.log(colors[0], colors[3]);

/* Repasando o indice para a variavel que salva a lista de arrays */
colors = colors[1];
console.log(colors);

/* Numero de itens de um array */
let array = ["Um", "Dois", "Três", "Quatro"];
let numberArrays = array.length;
console.log(numberArrays);

/* Atualizar item do arrays */
array[1] = "New";
console.log(array[1]);

/* Construtor de array, usamos a palavra-chave new Array(); os valores ficam entre parenteses*/
/* Aplicar exemplo melhor */
let cars = new Array("Ferrari", "Mercedes", "RedBull");
console.log();

/* Encontrando o comprimento de um array */
let testArray = [1, 2, 3, 4, 5, 6, "a", "b"];
console.log(testArray.length);

/* Ou*/
let testArrayLoop = [1, 2, 3, 4, 5, 6, "a", "b"];
for (i = 0; i < testArrayLoop.length; i++) {
  console.log(testArrayLoop[i]);
}
console.log("Total de itens", +testArrayLoop.length);
console.log("Posicao do item", +testArrayLoop[2]);

/* Convertendo strings e arrays com .split */
let myStrings = "Ferrari, Mclaren, Williams, Mercedes, RedBull";
let myArray = myStrings.split(",");
console.log(myArray);

/* Convertendo arrays em strings com .join */
let myArrayB = ["Ferrai", "Mclaren", "Williams"];
let myStringsB = myArrayB.join(",");
console.log(myStringsB);

/* Ou convertendo arrays em strings com .toString */
let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString());

/* Adicionar itens no final do arrays com .push */
let myList = ["Js", "Python", "Java"];
myList.push("Ruby");
console.log(myList);

/* Remover itens no final do arrays com .pop */
let myListB = ["Js", "Python", "Java"];
myListB.pop();

console.log(myListB);

/* unshift e shift Testar */
