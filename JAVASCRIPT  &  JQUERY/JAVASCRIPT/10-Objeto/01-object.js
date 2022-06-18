// Objeto
/* 
Objetos agrupam um conjunto de variaveis e funções para criar um modelo de algo, 
que você reconheceria a partir do mundo real.
! Em um objeto, variaveis e funções assumem novos nomes.
*! 1: Em um objeto: variaveis tornam-se propriedades.
Se uma variavel for parte de um objeto, ela será chamada de propriedade.
Propriedades informam aspectos do objeto, como nomes de um hotel ou numero de quartos,
cada hotel individual pode ter um nome diferente e um numero de quartos.
*! 2: Em um objeto: funções tornam-se conhecidas como metodos.
Se um funcao for parte de um objeto, ela e chamada de métodos.
Metodos apresentam tarefas que estão associadas com objeto. Por exemplo,
você pode verificar quantos quartos estão disponiveis subtraindo o numero de quartos reservados,
do numero total de quartos.
*! 3: Assim como variaveis e funções nomeadas, propriedades e metodos tem um nome e um valor. Em objeto, esse nome e chamado de chave.
*! 4: Um objeto nao pode ter duas chaves com mesmo nome, isso ocorre porque as chaves sao usadas para acessar seus valores correspondentes
*/

// Exemplo 1.
let hotel = {
  // Propriedades = variaveis
  // Chaves - Valor
  name: "Quay",
  room: 40,
  booked: 25,
  gym: true,

  // Método
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

//
