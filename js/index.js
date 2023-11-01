'use strict';


class Location {
  constructor(name, hoursOpen, contactInfo, address) {
    this.name = name;
    this.hoursOpen = hoursOpen;
    this.contactInfo = contactInfo;
    this.address = address;
  }
}

const storeInfo = [
  new Location(
    'Seattle',
    '6 am - 7 pm',
    '123-456-7890',
    '2901 3rd Ave #300, Seattle, WA 98121'
  ),
  new Location(
    'Tokyo',
    '6 am - 7 pm',
    '222-222-2222',
    '1 Chrome-1-2 Oshiage, Sumida City, Tokyo 131-8634'
  ),
  new Location(
    'Dubai',
    '6 am - 7 pm',
    '333-333-3333',
    'Sheikh Mohammad bin Rashid Blvd - Dubai'
  ),
  new Location(
    'Paris',
    '6 am - 7 pm',
    '444-444-4444',
    'Champ de Mars, 5 Avenue Anatole France, 75007 Paris'
  ),
  new Location(
    'Lima',
    '6 am - 7 pm',
    '555-555-5555',
    'Ca. Gral. Borgono cuadra 8, Miraflores 15074'
  ),
];

const ulElement = document.getElementById('store-info');

for (let i = 0; i < storeInfo.length; i++) {
  const li = document.createElement('li');
  li.textContent = `${storeInfo[i].name}, Hours Open: ${storeInfo[i].hoursOpen}, Contact Info: ${storeInfo[i].contactInfo}, Location: ${storeInfo[i].address}`;
  ulElement.appendChild(li);
}
