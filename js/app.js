'use strict';

class Location {  
  constructor(name, minCustomers, maxCustomers, avgCookiesPerCustomer, hours) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.hours = hours;
    this.cookiesSoldPerHour = [];
    this.totalCookies = 0;
  }

  randomCustomers() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }

  calculateSales() {
    for (let i = 0; i < this.hours.length; i++) {
      const hour = this.hours[i];
      const customers = this.randomCustomers();
      const cookies = Math.ceil(customers * this.avgCookiesPerCustomer);
      this.totalCookies += cookies;
      this.cookiesSoldPerHour.push({ hour, cookiesSold: cookies });
    }
  }

  render() {
    const salesTable = document.getElementById('sales-table');


    const row = document.createElement('tr');
    row.innerHTML = `<td>${this.name}</td>`;


    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      const data = this.cookiesSoldPerHour[i];
      row.innerHTML += `<td>${data.cookiesSold}</td>`;
    }

    // Add the daily location total to the last column
    row.innerHTML += `<td>${this.totalCookies}</td>`;

    // Append the row to the table
    salesTable.querySelector('tbody').appendChild(row);
  }
}

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const shopLocations = [
  new Location('Seattle', 23, 65, 6.3, storeHours),
  new Location('Tokyo', 3, 24, 1.2, storeHours),
  new Location('Dubai', 11, 38, 3.7, storeHours),
  new Location('Paris', 20, 38, 2.3, storeHours),
  new Location('Lima', 2, 16, 4.6, storeHours),
];

// Function to create the header row
function createHeaderRow() {
  const salesTable = document.getElementById('sales-table');
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `<th>Locations</th>`;

  for (const hour of storeHours) {
    headerRow.innerHTML += `<th>${hour}</th>`;
  }

  headerRow.innerHTML += `<th>Location Totals</th>`;
  salesTable.querySelector('thead').appendChild(headerRow);
}

// Function to create the footer row with hourly and grand totals
function createFooterRow() {
  const salesTable = document.getElementById('sales-table');
  const footerRow = document.createElement('tr');
  footerRow.innerHTML = `<th>Hourly Total for All Locations</th>`;

  let grandTotal = 0;

  for (const hour of storeHours) {
    let hourlyTotal = 0;
    for (let i = 0; i < shopLocations.length; i++) {
      for (let j = 0; j < shopLocations[i].cookiesSoldPerHour.length; j++) {
        if (shopLocations[i].cookiesSoldPerHour[j].hour === hour) {
          hourlyTotal += shopLocations[i].cookiesSoldPerHour[j].cookiesSold;
          break; // Stop
        }
      }
    }
    grandTotal += hourlyTotal;
    footerRow.innerHTML += `<td>${hourlyTotal}</td>`;
  } //+= appends content to the footer row without overriding the existing content

  footerRow.innerHTML += `<td>${grandTotal}</td>`;
  salesTable.querySelector('tfoot').appendChild(footerRow);
}

// Create header row
createHeaderRow();

// Calculate and render sales data for each location
for (let i = 0; i < shopLocations.length; i++) {
  const location = shopLocations[i];
  location.calculateSales();
  location.render();
}


createFooterRow();



/* Theeee Form */

// Event listener for the "Add Location" button
document.addEventListener("DOMContentLoaded", function () {

  const addButton = document.getElementById("add-location-button");
  addButton.addEventListener("click", addLocation);
});



function addLocation(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const minCustomers = parseFloat(document.getElementById("min-customers").value);
  const maxCustomers = parseFloat(document.getElementById("max-customers").value);
  const avgCookies = parseFloat(document.getElementById("avg-cookies").value);

  const newLocation = new Location(name, minCustomers, maxCustomers, avgCookies, storeHours);
  newLocation.calculateSales();
  newLocation.render();


  document.getElementById("name").value = "";
  document.getElementById("min-customers").value = "";
  document.getElementById("max-customers").value = "";
  document.getElementById("avg-cookies").value = "";

}




