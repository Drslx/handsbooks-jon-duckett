//
const el = (function () {
  // Objeto hotel
  const hotel = {
    name: "park",
    roomRate: "240",
    discount: 15,

    // Metodo do objeto
    offerPrice: function () {
      let offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    },
  };

  // Exibe nome, preco e preco especial
  let hotelName, roomRate, specialRate;
  // let hotelTitle = "<h1 class='title'>latest hotel offer</h1>";

  // Obter Elementos
  hotelName = document.getElementById("hotelName");
  roomRate = document.getElementById("roomRate");
  specialRate = document.getElementById("specialRate");

  // Exibir no browser
  hotelName.textContent = hotel.name;
  roomRate.textContent = hotel.roomRate;
  specialRate.textContent = "$" + hotel.offerPrice();

  // Parte 2
  let expiryMsg;
  let today;
  let elEnds;

  function offerExpires(today) {
    // Variaveis locais
    let weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7  dias a data/hora atual (add em milissegundos)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Array para armazenar os nomes dos dias/meses.
    dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Sartuday",
    ];
    monthNames = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Coleta partes da data para mostrar na pagina.
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Cria a mensagem.
    expiryMsg = "Offer expires next ";
    expiryMsg += day + " <br/>(" + date + " " + month + " " + year + ")";
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById("offerEnds");
  elEnds.innerHTML = offerExpires(today);
  console.lo(weekFromToday);
})();
