let hotel = {
  name: "Parks",
  rooms: 120,
  booked: 77,

  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

// Adicionando com notação ou colchetes
hotel.gym = false;
hotel.pool = false;
delete hotel.booked;


// Mudar id no html
let hotelName = document.getElementById("hotelName");
hotelName.textContent = "Hotel " + hotel.name + " rooms: " + hotel.rooms;

let hotelPool = document.getElementById("pool");
hotelPool.textContent = "Pool: " + hotel.pool;

let hotelGym = document.getElementById("gym");
hotelGym.textContent = "Gym: " + hotel.gym;

/* if (hotel.pool == true) {
  let hotelPool = document.getElementById("pool");
  hotelPool.textContent = "Pool: " + hotel.pool;
} else {
  hotelPool = document.getElementById("pool");
  hotelPool.textContent = "Pool: " + hotel.pool;
}
 */

// Acesso ao Objeto.
/* let hotelDetails = hotel.checkAvailability();
console.log(hotelDetails);
console.log(hotel.checkAvailability()); */
console.log(hotel);
