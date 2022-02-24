let list = document.getElementsByTagName("ul")[0];

// Adicionar um novo item ao fim da lista
let newItemLast = document.createElement("li"); // Cria o elemento
let newTextLast = document.createTextNode("cream"); // Cria o no de Texto

// Adicionar o no de texto ao elemento
newItemLast.appendChild(newTextLast);

// Adicionar o elemento ao final da listas
list.appendChild(newItemLast);
newItemLast.className = "cool"; // Muda nome da classe de seta no html para 'cool'

//console.log(document.getElementsByTagName("ul"));

// Adiciona um novo item a inicio da lista
let newItemFirst = document.createElement("li");
let newTextFirst = document.createTextNode("kale");
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

// Adicionando classe cool a todos Itens
let listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].className = "cool";
}

// Adiciona o numero de itens da lista ao titulos
let heading = document.querySelector("h2"); // Pega o elemento h2
let headingText = heading.firstChild.nodeValue; //
let totalItems = listItems.length;

let newHeading = headingText + totalItems;
heading.textContent = newHeading;
