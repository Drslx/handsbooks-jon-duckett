// Objeto: Notação construtor.
/* 
A palavra chave (new) e o construtor de objetos criam objeto e branco.
Podemos entao adicionar propriedades e metodos a ele.

*! 1: Podemos criar um novo objeto usando a combinação da palavra chave, new e a funcao de construtor Object(). (Essa funcao e parte do JS)
*! 2: Depois de ter criado o objeto em branco, podemos adicionar propriedades e metodos a ele usando notação de ponto(.).
! Cada introdução que adiciona uma propriedade ou método deve terminar com ponto e virgula(;).
*/
// Exemplo Criando Objeto: Notação de Construtor
const hotel = new Object();
/*
 *! 1 = Objeto
 *! 2 = Chave
 *! 3 = Valor
 */
hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked = 15;

hotel.checkAvailability = function () {
  return this.rooms - this.booked;
};

let roomsFree = hotel.checkAvailability();
console.log();

// Criando um Objeto vazio.
/* 
! Utilize essa sintaxe para adicionar propriedades e metodos a qualquer objeto(nao importa qual notação foi usada para cria-lo).
*! Para criar um objeto vazio com a notação literal, use (let objectVazio = {}).
*/
// Exemplo Objeto vazio
const objectEmpty = {};

// Atualizando um Objeto.
/* 
Para atualizar o valor das propriedades, use a notação de (ponto . ou colchetes [])
! Eles funcionam em objetos criados com notação literal ou notação construtor
*! Para excluir uma propriedade, use a palavra-chave delete.
*/
// Exemplo atualizar Objeto vazio criado acima.
objectEmpty.name = "Douglas";

let returnObject = objectEmpty;
console.log(returnObject);

/* 
*! Tambem podemos atualizar as propriedades de um objeto(mas nao seu metodos) usando colchetes.
! Exemplo nome do objeto e seguido por colchetes, e nome da propriedade entra no meio deles.
! Se estiver tentando atualizar e a propriedade nao existir, ela será adicionada ao objeto.
*/
// Exemplo criamos objeto vazio, adicionamos propriedades e atualizamos as propriedades criadas.
const objectEmptyTwo = {};
let returnObjectTwo = objectEmptyTwo;

objectEmptyTwo["name"] = "Thaty";
objectEmptyTwo["name"] = "Thaty & Douglas";
objectEmptyTwo["idade"] = 34;
objectEmptyTwo["idade"] = 25;
console.log(returnObjectTwo);

// Exemplo excluindo uma propriedade.
delete objectEmptyTwo.name;
console.log(returnObjectTwo);

// Exemplo Limpando valor de uma propriedade.
objectEmptyTwo.name = "";
console.log(returnObjectTwo);

// Exemplo para retornar no html.
/*
 *! 1 = Objeto
 *! 2 = Chave
 *! 3 = Valor
 */
const hotelObject = new Object();
hotelObject.name = "Park";
hotelObject.rooms = 120;
hotelObject.booked = 77;

hotelObject.checkAvailability = function () {
  return this.rooms - this.booked;
};

console.log(hotelObject);
/* let elName = document.getElementById("name");
elName.textContent = hotelObject.name;
 */
