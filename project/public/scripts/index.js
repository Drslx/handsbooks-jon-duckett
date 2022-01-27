// 3 Maneiras comuns de selecionar um elemento individual.
/* 
1 - document.getElementById(usa o valor do atributo id) 
2 - document.querySelector(usa um seletor CSS e retorna o primeiro elemento)
3 - 
*/

// Ha 3 maneiras comuns de selecionar multi elementos.
/* 
1 - document.getElementsByClassName(seleciona todos os elementos que tem um valor no atributo class)
2 - document.getElementsByTagName(seleciona todos elementos que tem o nome de tag)
3 - document.querySelectorAll(usa um seletor CSS para selecionar todos elementos correspondentes)
*/

// Podemos navegar de um no de um elemento para outro no de um elemento relacionado.
/* 
1 - document.getElementById().parentNode = seleciona o pai do no do elemento atual 'que retornara apenas um elemento'.
2 - document.getElementById().previousSibling/nextSibling.innerHTML = seleciona o irmao anterior a partir da arvore DOM.
3 - ""document.getElementById().firstChild/lastChild.innerHTML = seleciona o primeiro ou ultimo filho do elemento atual.
*/

// Acessar ou atualizar valores de atributos.
/* 
1 - className / id = permite obter ou atualizar valor dos atributos.
2 - hasAttibute(verificar), getAttribute(pegar), setAttribute(atualizar), removeAttribute(remover)
*/

// Armazenamento em cache de consultas DOM.
// Metodos que retorna apenas um único elemento
// let msg = "<em>fresh</em> figs";

/* let itemOne = document.getElementById("one");
itemOne.innerHTML = "<em>fresh</em> figs";

const styleJs = {
  font: "30px",
  color: ["red", "blue", "darkblue"],
};

let itemTwo = document.querySelector("li.hot");
itemTwo.style.color = styleJs.color[0];
itemTwo.style.fontSize = styleJs.font;
 */

// Objeto com estilos inJs
const styleJs = {
  font_Size: "25px",
  color_Text: ["white", "red", "blue", "darkblue"],
  background_Color: ["rgb(10, 151, 109)"],
};

// Modificando estilos
const elOne = document.getElementById("one");
elOne.style.fontSize = styleJs.font_Size;
elOne.style.backgroundColor = styleJs.background_Color;
elOne.style.color = styleJs.color_Text[0];

// Modificando class
/* const elTwo = document.getElementById("two");
elTwo.className = "cool"; */

