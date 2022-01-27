// Selecionando elementos pelo nome da tag
function getTagName(args) {
  args = args;

  let elements = document.getElementsByTagName("li");
  if (elements.length > 0) {
    let el = elements[0];
    el.className = args;
    console.log(args);
  }
}

console.log(getTagName("cool"));


