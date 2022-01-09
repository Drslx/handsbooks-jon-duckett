// Escopo de variavel
/* 
Escopo global = fora da funcao 
Escopo local = dentro da funcao
*/

function getArea(width, height) {
  let localVar = width + height;
  return localVar;
}

let globalVar = getArea(3, 3);
console.log(globalVar);

// Conflitos de nomes de variaveis globais
/* 
Se uma pagina usar dois arquivos js, e ambos tiverem uma variavel global com o mesmo nome,
isso pode causar erros.
*/

// Exemplo
function showArea() {
  let width = 3;
  let height = 2;
  return "Area:" + width * height;
}

let msgGlobal = "Show Area: " + showArea();
console.log(msgGlobal);

function showGardenSize() {
  let width = 3;
  let height = 3;
  return "Area:" + width * height;
}

let msgGlobal = "Show Garden" + showGardenSize();
console.log(msgGlobal);
