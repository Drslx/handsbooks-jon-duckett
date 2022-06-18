// Trabalhando com strings
let say = "Home sweet home";
let msg = "<h2>lenght</h2><p>" + say.length + "</p>";

// Metodos para deixar o texto grande e pequeno
msg += "<h2>uppercase </h2><p>" + say.toUpperCase() + "</p>";
msg += "<h2>lowercase </h2><p>" + say.toLowerCase() + "</p>";

// Metodo para retornar o caractere nessa posicao 
msg += "<h2>character index: 12 </h2><p>" + say.charAt(5) + "</p>";

msg += "<h2>first ee </h2><p>" + say.indexOf("ee") + "</p>";
msg += "<h2>last  </h2><p>" + say.lastIndexOf("e") + "</p>";

msg += "<h2>character index: 8-14 </h2><p>" + say.substring(8, 14) + "</p>";
msg += "<h2>replace </h2><p>" + say.replace("me", "w") + "</p>";

// Saida para o browser.
let el = document.getElementById("card");
el.innerHTML = msg;
