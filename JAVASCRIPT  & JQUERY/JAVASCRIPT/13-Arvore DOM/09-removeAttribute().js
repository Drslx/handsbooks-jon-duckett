// Removendo e adicionando atributos
let secondItem = document.getElementById("two");

// Adicione a classe hot para ver o efeito
secondItem.hasAttribute("class")
  ? (secondItem.textContent = "secondItem")
  : secondItem.setAttribute("class", "complete");
/* 
! Teste para adicionar classe com classNam, e adicionar e remover dentro de uma condicional. 
: (secondItem.className = "complete");
if(secondItem.hasAttribute('class')){
  secondItem.removeAttribute('class')
}
 */

let fiveItem = document.getElementById("five");

if (fiveItem.hasAttribute("class")) {
  fiveItem.removeAttribute("class");
}
