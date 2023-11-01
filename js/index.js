'use strict';

class Location {
  constructor(name, hoursOpen, contactInfo, address) {
    this.name = name;
    this.hoursOpen = hoursOpen;
    this.contactInfo = contactInfo;
    this.address = address;
  }

  render() {
    const container = document.getElementById('store-info');
    const div = document.createElement('div');
    div.textContent = `Location: ${this.name}`;
    container.appendChild(div);

    const ul = document.createElement('ul');
    const hoursOpenLi = document.createElement('li');
    hoursOpenLi.textContent = `Hours Open: ${this.hoursOpen}`;
    ul.appendChild(hoursOpenLi);

    const contactInfoLi = document.createElement('li');
    contactInfoLi.textContent = `Contact Info: ${this.contactInfo}`;
    ul.appendChild(contactInfoLi);

    const addressLi = document.createElement('li');
    addressLi.textContent = `Location: ${this.address}`;
    ul.appendChild(addressLi);

    div.appendChild(ul);
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

storeInfo.forEach(location => {
  location.render();
});
