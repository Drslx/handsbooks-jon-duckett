// Trabalhando com numbers.

// Valor base
let originalNumber = 10.23456;

// Mensagens que vao ser exibidas
let msg = "<h2>original number</h2><p>" + originalNumber + "</p>";
msg += "<h2>toFixed()</h2><p>" + originalNumber.toFixed(3) + "</p>";
msg += "<h2>toPrecision()</h2><p>" + originalNumber.toPrecision(3) + "</p>";

let el = document.getElementById("card");
el.innerHTML = msg;
