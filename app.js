'use strict';


// Function to generate a random number of customers between min and max
function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to calculate and render sales data for a location
function calculateAndRenderSales(location) {
  for (let i = 0; i < location.hours.length; i++) {
    const customers = randomCustomers(location.minCustomers, location.maxCustomers);
    const cookies = Math.ceil(customers * location.avgCookiesPerCustomer); // Changed Math.floor to Math.ceil
    location.cookiesSoldPerHour.push(cookies);
    location.totalCookies += cookies;
  }

  const ulElement = document.getElementById(`${location.name.toLowerCase()}-sales`);
  ulElement.innerHTML = ''; //reset

  for (let i = 0; i < location.hours.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${location.hours[i]}: ${location.cookiesSoldPerHour[i]} cookies`;
    ulElement.appendChild(li);
  }

  const totalLi = document.createElement('li');
  totalLi.textContent = `Total: ${location.totalCookies} cookies`;
  ulElement.appendChild(totalLi);
}

// Shop locations
const seattle = {
  name: 'Seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesSoldPerHour: [],
  totalCookies: 0,
};

const tokyo = {
  name: 'Tokyo',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  cookiesSoldPerHour: [],
  totalCookies: 0,
};

const dubai = {
  name: 'Dubai',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  cookiesSoldPerHour: [],
  totalCookies: 0,
};

const paris = {
  name: 'Paris',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  cookiesSoldPerHour: [],
  totalCookies: 0,
};

const lima = {
  name: 'Lima',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  cookiesSoldPerHour: [],
  totalCookies: 0,
};

// Calculate and render sales data for each location
calculateAndRenderSales(seattle);
calculateAndRenderSales(tokyo);
calculateAndRenderSales(dubai);
calculateAndRenderSales(paris);
calculateAndRenderSales(lima);

