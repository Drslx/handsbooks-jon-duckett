// Browser Objeto Model cria um modelo da aba do navegador.
// ! Windows e o objeto mais importante no BOM.
/* 
Window = Janela atual 
--Document = Pagina atual
--History = Paginas no histórico do navegador
--Location = Url da pagina atual
--Navigator = Informações sobre o navegador
--Screen = Informações sobre a tela do dispositivo
*/

// Exemplos de uso.
// window.print();

// Operator += adiciona novo dados ao final da variavel.
let msg = "<h2>browser window</h2><p>width: " + window.innerWidth + "</p> ";

msg += "<p>height: " + window.innerHeight + "</p>";
msg += "<h2>history</h2><p>items:" + window.history.length + "</p>";
msg += "<h2>screen</h2><p>width:" + window.screen.width + "</p>";
msg += "<p>height:" + window.screen.height + "</p>";

// Saida para o browser
let info = document.getElementById("id");
info.innerHTML = msg;

// alert("Current page:" + window.location);
