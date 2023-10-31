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
