function checkUsername() {
  let userName = el.value;
  let msg = "Not long enough, yet...";

  if (userName.length < 5) {
    elMsg.className = "warning";
    elMsg.innerHTML = msg;
  }
}

function tipUsername() {
 elMsg.className = "tip";
  elMsg.innerHTML = "Username < 5 characters";
}

let el = document.getElementById("username");
let elMsg = document.getElementById("feedback");

el.addEventListener("focus", tipUsername, false);
el.addEventListener("blur", checkUsername, false);
