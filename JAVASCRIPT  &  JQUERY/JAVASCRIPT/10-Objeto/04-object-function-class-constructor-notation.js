// Criando vários Objetos: notação de constructor.
/* 
As vezes podemos querer que vários Objetos representem coisas semelhantes,
Construtores de objetos podem usar uma funcao como um (modelo) para criar Objetos
! Primeiro crie o modelo com as propriedades e os metodos do Objeto.
*/

/*
A funcao (Hotel) será utilizada como um modelo para criar novos Objetos que representam hotéis.
*! Como todas as funções, ela contem instruções, nesse caso propriedades e metodos.
! No exemplo abaixo a funcao tem três parametros e os metodos serao os mesmo para cada Objeto.
A palavra-chave (this) e usada em vez do nome do Objeto para indicar que a propriedade ou o método,
pertence ao Objeto que a funcao (this) cria.
 */

// Exemplo
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

// Exemplo ES2015 class
class HotelTwo {
  constructor(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function () {
      return this.rooms - this.booked;
    };
  }
}

/* 
! Cada instrução que cria uma nova propriedade ou método para esse Objeto termina com (ponto-e-virgula ; nao virgula que e usada ma sintaxe literal).
*! O nome de uma funcao de construtor geralmente começa com maiúscula (ao contrario de outras funções que tendem a começar com uma minúscula.).
! Supostamente letras maiúsculas devem ajudar a lembrar os devs a usar a palavra-chave (new) ao criar um Objeto usando essa funcao.
*/

// Podemos criar instâncias do Objeto usando a funcao de construtor.

let objectOne = new Hotel("quay", 40, 25);
let objectTwo = new Hotel("park", 120, 77);
console.log("Reservadas" + ":", objectOne.checkAvailability());
console.log(objectTwo);

/* 
*! Utilize essa técnica se seu script contiver um Objeto muito complexo que precisa estar disponivel, mas nao pode ser usado.
! O Objeto e definido na funcao, mas so e criado se for necessário.
*/
