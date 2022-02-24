// Metodo nao recomendado 'Rotina de tratamento de eventos HTML'

/* function checkUserName() {
  let elMsg = document.getElementById("feedback");
  let elUsername = document.getElementById("username");

  if (elUsername < 5) {
    elMsg.textContent = "Username must be 5 characters or more";
  } else {
    elMsg.textContent = "";
  }
}
 */

// Metodo 'Rotina de tratamento de eventos DOM tradicional'
/* 
function checkUserName() {
  let elMsg = document.getElementById("feedback");

  if (this.value.length < 5) {
    elMsg.textContent = "Username must be 5 characters or more";
  } else {
    elMsg.textContent = "";
  }
}

let elUsername = document.getElementById("username");
elUsername.onblur = checkUserName;
 */

// Metodo 'Ouvintes de eventos'

function checkUserName() {
  let elMsg = document.getElementById("feedback");

  if (this.value.length < 5) {
    elMsg.style.display = "block";
    elMsg.textContent = "Username must be 5 characters or more";
  } else {
    elMsg.style.display = "none";
  }
}

let elUsername = document.getElementById("username");
elUsername.addEventListener("blur", checkUserName, false);

// Codigo teste
/* function checkUserName() {
  let elMsg = document.getElementsByClassName("feedback");

  if (this.value.length < 5) {
    let elContainer = document.getElementById("container"); // Pegar container
    let elFeedBack = document.createElement("div"); // Criar elemento
    elMsg = document.createTextNode("Username must be 5 characters or more");

    elFeedBack.appendChild(elMsg);
    elContainer.appendChild(elFeedBack);
    elFeedBack.className = "feedback";
  } else{}
}

let elUsername = document.getElementById("username");
elUsername.addEventListener("blur", checkUserName, false);
 */
