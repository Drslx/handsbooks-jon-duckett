let firstItem = document.getElementById("one");
// firstItem.className = "cool";

if (firstItem.hasAttribute("class")) {
  let attr = firstItem.getAttribute("class");

  let el = document.getElementById("results");
  el.innerHTML = "<p>The first item has a class name: " + attr + "</p>";
}
