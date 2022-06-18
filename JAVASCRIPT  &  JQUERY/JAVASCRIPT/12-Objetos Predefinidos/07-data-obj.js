// Criando um Objeto Date
let today = new Date();
let year = today.getFullYear();

let el = document.getElementById("footer");
el.innerHTML = "<p>Copyright &copy;" + year + "</p>";

// Trabalhando com data e horas ! reaproveitando today e year ja declarado.
let est = new Date("Apr 16, 1996 15:45:55");

// Pega a data atual menos a data de 1996
let difference = today.getTime() - est.getTime();
difference = difference / 31556900000;

let elMsg = document.getElementById("card");
elMsg.textContent = Math.floor(difference) + " years of online travel advice";
elMsg.innerHTML += "<br/>" + document.domain;
