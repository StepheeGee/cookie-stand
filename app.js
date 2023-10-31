'use strict';

// Function to generate a random number of customers between min and max
function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to calculate sales data for a location
function calculateSales(location) {
  const salesData = [];
  for (let i = 0; i < location.hours.length; i++) {
    const customers = randomCustomers(location.minCustomers, location.maxCustomers);
    const cookies = Math.ceil(customers * location.avgCookiesPerCustomer);
    salesData.push({ hour: location.hours[i], cookiesSold: cookies });
  }
  return salesData;
}

// Function to render sales data for a location
function renderSales(location, salesData) {
  const ulElement = document.getElementById(`${location.name.toLowerCase()}-sales`);
  ulElement.innerHTML = ''; // Clear the list before rendering

  for (let i = 0; i < salesData.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${salesData[i].hour}: ${salesData[i].cookiesSold} cookies`;
    ulElement.appendChild(li);
  }

  const totalLi = document.createElement('li');
  totalLi.textContent = `Total: ${salesData.reduce((total, data) => total + data.cookiesSold, 0)} cookies`;
  ulElement.appendChild(totalLi);
}

// Shop locations
const seattle = {
  name: 'Seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
};

const tokyo = {
  name: 'Tokyo',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
};

const dubai = {
  name: 'Dubai',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
};

const paris = {
  name: 'Paris',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
};

const lima = {
  name: 'Lima',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
};

// Calculate and render sales data for each location
const salesDataSeattle = calculateSales(seattle);
const salesDataTokyo = calculateSales(tokyo);
const salesDataDubai = calculateSales(dubai);
const salesDataParis = calculateSales(paris);
const salesDataLima = calculateSales(lima);

renderSales(seattle, salesDataSeattle);
renderSales(tokyo, salesDataTokyo);
renderSales(dubai, salesDataDubai);
renderSales(paris, salesDataParis);
renderSales(lima, salesDataLima);

/* template literals for index.html; need to consolidate
const stores = [
    {
      name: 'Seattle',
      hoursOpen: '6 am - 7 pm',
      contactInfo: '123-456-7890',
      location: '2901 3rd Ave #300, Seattle, WA 98121',
    },
    {
      name: 'Tokyo',
      hoursOpen: '6 am - 7 pm',
      contactInfo: '222-222-2222',
      location: '1 Chrome-1-2 Oshiage, Sumida City, Tokyo 131-8634',
    },
    {
      name: 'Dubai',
      hoursOpen: '6 am - 7 pm',
      contactInfo: '333-333-3333',
      location: 'Sheikh Mohammad bin Rashid Blvd - Dubai',
    },
    {
      name: 'Paris',
      hoursOpen: '6 am - 7 pm',
      contactInfo: '444-444-4444',
      location: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris',
    },
    {
      name: 'Lima',
      hoursOpen: '6 am - 7 pm',
      contactInfo: '555-555-5555',
      location: 'Ca. Gral. Borgono cuadra 8, Miraflores 15074',
    },
  ];

  function renderStoreInfo(stores) {
    const salesList = document.getElementById('sales-list');
  
    stores.forEach((store) => {
      const storeInfoHTML = `
        <li>
          <h3>${store.name}</h3>
          <p>Hours Open: ${store.hoursOpen}</p>
          <p>Contact Info: ${store.contactInfo}</p>
          <p>Location: ${store.location}</p>
        </li>
      `;
  
      const storeInfoElement = document.createElement('ul');
      storeInfoElement.innerHTML = storeInfoHTML;
  
      salesList.appendChild(storeInfoElement);
    });
  }
  
  // Call the function to render store information
  renderStoreInfo(stores);
  */