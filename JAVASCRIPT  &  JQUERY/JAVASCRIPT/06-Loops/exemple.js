let table = 1; // Input
let operator = ""; // Input
let i = 1; // Input
let msg = "";

if (operator === "+") {
  while (i < 11) {
    msg += i + " + " + table + " = " + (i + table) + "<br />";
    i++;
  }
} else {
  while (i < 11) {
    msg += i + " x " + table + " = " + i * table + "<br />";
    i++;
  }
}

// Return to browser.
let el = document.getElementById("id1");
el.innerHTML = msg;
console.log(msg);
