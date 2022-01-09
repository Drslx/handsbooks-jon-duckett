// ! Mudar Objetos para let ou const
// Exemplo 1 Notação Literal com propriedades e metodos.
// Usado dois ponto para separa os pares chave/valor e virgula para separar a propriedades e dois pontos no metodos.
let hotel = {
  // Propriedades = variaveis
  // Chaves - Valor
  name: "Quay",
  room: 40,
  booked: 25,
  gym: true,

  // Método = funcao
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

console.log(hotel.name);

// Exemplo 2 Notação Literal adicioando propriedades e metodos depois.
// Usado ponto e virgula para separar a propriedades e sinal de igual no metodos.
let hotelTwo = {};

hotelTwo.name = "Quay";
hotelTwo.rooms = 40;
hotelTwo.booked = 25;
hotelTwo.checkAvailability = function () {
  return this.rooms - this.booked;
};

let hotelTwoInfo = hotelTwo.checkAvailability();
console.log(hotelTwo.name);

// Exemplo 3 Notação de construtor adicionar depois.
// Usado ponto para separa os pares chave/valor e virgula para separar a propriedades e sinal de igual no metodos.
let hotelTree = new Object();

hotelTree.name = "Quay";
hotelTree.rooms = 40;
hotelTree.booked = 25;
hotelTree.checkAvailability = function () {
  return this.rooms - this.booked;
};

console.log(hotelTree.name);

// Exemplo 4 Notação de construtor para criar vários Objetos, this e usada em vez do nome do objeto.
// O nome do Objeto inicia com letra maiúscula e a propriedades sao passadas entre parenteses.
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}
// Instanciando Objeto
let objectOne = new Hotel("One", 40, 25);
let objectTwo = new Hotel("Two", 40, 25);

// Acessando sua propriedade e metodos
let details1 = objectOne.name + " rooms:";
details1 += objectOne.checkAvailability();
let eHotel1 = document.getElementById("hotel-one");
eHotel1.textContent = details1;

let details2 = objectTwo.name + " rooms:";
details2 += objectTwo.checkAvailability();
let eHotel2 = document.getElementById("hotel-two");
eHotel2.textContent = details2;

// Ou Vários Objeto Notação de Construtor Especificação ES2015
class HotelClass {
  constructor(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    // Método
    this.checkAvailability = function () {
      return this.rooms - this.booked;
    };
  }
}
