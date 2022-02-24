// Cria o HTML para a mensagem
let msg = '<div class="header"><a id="close" href="#">Close X</a></div>';
msg += "<div><h2>System Maintenance</h2></div>";
msg += "Our servers are being update between 3 and 4 a.m";


let elNote = document.createElement("div"); // Cria um novo elemento div
elNote.setAttribute("id", "note"); // Adiciona um id de note
elNote.innerHTML = msg; // Cria a mensagem 
document.body.appendChild(elNote); // Insere a mensagem na pagina

// Function remove note
function dismissNote() {
  document.body.removeChild(elNote);
}

let elClose = document.getElementById("close"); // Obtém o botao close
elClose.addEventListener("click", dismissNote, false); // Clique em close para limpar
