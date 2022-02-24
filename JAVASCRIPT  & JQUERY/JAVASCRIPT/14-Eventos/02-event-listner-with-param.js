// Usando parametros com ouvintes de evento

let elUsername = document.getElementById("username"); // Obtem a entrada
let elMsg = document.getElementById("feedback");

function chekUserName(minLength) {
  if (elUsername.value.length < minLength) {
    // Mensagem de erro
    elMsg.textContent = "User name be " + minLength + "characters or more";
  } else {
    elMsg.innerHTML = "";
  }
}

elUsername.addEventListener(
  "blur",
  function () {
    chekUserName(5);
  },
  false,
);
