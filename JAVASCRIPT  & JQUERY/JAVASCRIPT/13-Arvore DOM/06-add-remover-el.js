// Adicionando ou removendo  conteudo HTML com innerHtml ou manipulação da DOM.

// innerHTML
let item;
item = "<em>Fresh</em> figs";
let el = (document.getElementById("four").innerHTML = item);

// Manipulando a DOM
let firstItem = document.getElementById("one");

// Obtem o conteudo do primeiro item da lista
let itemContent = firstItem.innerHTML;

// Atualiza o conteudo
firstItem.innerHTML = "<a href='http://link.org'>" + itemContent + "</a>";

// Criando elemento na arvore DOM.
let newElement = document.createElement("li");

// Criando no de texto.
let newText = document.createTextNode("quinoa");

// Anexa nos de texto ao novo elemento
newElement.appendChild(newText);

// Localiza a posicao onde o elemento deve ser adicioando
let positionEl = document.getElementsByTagName("ul")[0];

// Inseri o novo elemento
positionEl.appendChild(newElement);

// Removendo elementos via manipulacao DOM
let removeEl = document.getElementsByTagName("li")[2];
let containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);
console.log("Elemento removido", removeEl);
