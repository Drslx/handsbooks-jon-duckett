// Criando um objeto: Notação literal.
/* 
A notação e a maneira mais fácil de popular de criar objetos.(Ha varias maneiras de criar objetos)
! Separe com dois-pontos cada chave do seu valor.
! Separe com uma virgula cada propriedade e método(mas nao depois do ultimo valor)
No método checkAvailability(), a palavra chave this e usada para indicar que ele usa as,
propriedades rooms e booked do objeto this.
*/

const hotel = {
  /*  
  Propriedades = variaveis
  Ou
  Chaves - Valor
   */
  name: "Quay",
  rooms: 40,
  booked: 20,
  gym: true,

  // Método
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

// Acessando um Objeto com a notação de (ponto .).
/*
O (ponto .) e conhecido como operador de membro, sao criadas duas variaveis para armazenar o nome do hotel e numero de quartos vagos.
*/
let hotelNameA = hotel.name;
let roomsFree = hotel.checkAvailability();
console.log(hotelNameA, roomsFree);

// Acessando as propriedades de um Objeto.
/*
Desta vez o nome do objeto e seguido por colchetes, e nome da propriedade permanece dentro deles.
! Essa notação e mais comumente utilizada quando:
*! 1: O nome da propriedade e um numero(tecnicamente permitido, mas geralmente deve ser evitado).
*! 2: A variavel e usada no lugar do nome da propriedade(Capitulo 12).
*/
let hotelNameB = hotel["name"];
console.log();
