// Objetos Globais sao um grupo de objetos individuais que referem-se a diferentes partes do js
// ! Nomes de Objetos Globais geralmente começam com letra maiúscula.

/* 
Representam tipos de dados basicos.
STRING
NUMERO
BOOLEAN

Ajudam a lidar com conceitos do mundo real.
DATE = Manipular datas
MATH = Trabalhar com numeros e calculos
REGEX = Corresponder a padroes a strings de texto
*/

// Exemplos
const text = "text";
console.log(text.toUpperCase());

// Sempre que houver um valor que e uma string podemos usar propriedades e metodos do Objeto STRING.
let saying = "Home sweet home ";

console.log(saying.length);
console.log(saying.toLocaleLowerCase());
console.log(saying.indexOf("s"));
console.log(saying.lastIndexOf("e"));
console.log(saying.charAt(0));
console.log(saying.substring(8, 14));
console.log(saying.split(''));
console.log(saying.trim());
console.log(saying.replace('Home', 'Code'));