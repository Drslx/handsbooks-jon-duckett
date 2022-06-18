/* // Selecioando elementos com atributo ID.
let el = document.getElementById("id");
el.className = "cool";

// Atualizando um no de texto com nodevalue.
document.getElementById("id").firstChild.nextSibling.nodeValue;

// Acessando e alterando um no de texto.
let itemOne = document.getElementById("id");
let text = itemOne.firstChild.nodeValue;

text = text.replace("Texto atual", "Novo texto");
itemOne.firstChild.nodeValue = text;
 */

// Acessando somente texto.
let firstItem = document.getElementById("one");
let showTextContent = firstItem.textContent;
let showInnerText = firstItem.innerText;

let msg = "<p>textContent: " + showTextContent + "</p>";
msg += "<p>innerText: " + showInnerText + "</p>";

let el = document.getElementById("results");
el.innerHTML = msg;

firstItem.textContent = "sou";

console.log();