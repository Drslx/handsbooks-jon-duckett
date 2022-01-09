// Document Objeto Model cria um modelo da pagina web atual.
// Document e o objeto mais importante no DOM.
/* 
document
|
html
|
head ---- body
|          |
title      |
         div-attr
          |
          p
          |
         text
*/

// Exemplos de uso dos metodos.
let msg = "<p><b>page title: </b>" + document.title + "<br/>";
msg += "<b>page address: </b>" + document.URL + "<br/>";
msg += "<b>last modifiled: </b>" + document.lastModified + "</p>";

// Saida para o browser.
let eFooter = document.getElementById("footer");
eFooter.innerHTML = msg;
