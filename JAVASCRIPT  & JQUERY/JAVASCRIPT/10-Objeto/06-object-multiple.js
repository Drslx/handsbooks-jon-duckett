function Hotel(name, rooms, booked, pool) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.pool = pool;

  this.check = function () {
    return this.rooms - this.booked;
  };
}

let quayHotel = new Hotel("Quay", 40, 25);
let parkHotel = new Hotel("Parks", 120, 77);

let details1 = quayHotel.name + " rooms: ";
details1 += quayHotel.check();
let elHotel1 = document.getElementById("hotel1");
elHotel1.textContent = details1;

let details2 = parkHotel.name + " rooms: ";
details2 += parkHotel.check();
let elHotel2 = document.getElementById("hotel2");
elHotel2.textContent = details2;
