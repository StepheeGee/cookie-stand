'use strict';

class Location {  //used class based approach instead of prototyping
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

    // Create a new row for this location
    const row = document.createElement('tr');
    row.innerHTML = `<td>${this.name}</td>`;

    // Calculate and render sales data for each hour
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

  headerRow.innerHTML += `<th>Daily Location Totals</th>`;
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
  }

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

// Create footer row
createFooterRow();




/* Lab 06 improvement
class Location { // Used a class (blueprint) instead of a function because it automatically creates a function constructor
  constructor(name, minCustomers, maxCustomers, avgCookiesPerCustomer, hours) { // Initialized properties based on these parameters
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.hours = hours; // Hours is now a shared array
    this.cookiesSoldPerHour = [];
    this.totalCookies = 0;
  } // 'this' is a keyword that refers to the current instance of the class

  // randomCustomers is a method of the Location class in the form of a function
  randomCustomers() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }

  // calculateSales is another method of the Location class
  calculateSales() {
    for (let i = 0; i < this.hours.length; i++) {
      const hour = this.hours[i];
      const customers = this.randomCustomers();
      const cookies = Math.ceil(customers * this.avgCookiesPerCustomer);
      this.totalCookies += cookies;
      this.cookiesSoldPerHour.push({ hour, cookiesSold: cookies });
    }
  }

  // First calculate (above), then render the sales data for the Location class
  renderSales() {
    const ulElement = document.getElementById(`${this.name.toLowerCase()}-sales`);
    ulElement.innerHTML = ''; // Get - retrieves the element by ID and then clears its contents

    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
      const data = this.cookiesSoldPerHour[i];
      const li = document.createElement('li');
      li.textContent = `${data.hour}: ${data.cookiesSold} cookies`;
      ulElement.appendChild(li); // For each hour's data, it creates a list item (<li>) in the HTML and appends it to the unordered list (<ul>) element
    }

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.totalCookies} cookies`;
    ulElement.appendChild(totalLi); // Creates a list item for the total cookies sold and appends it to the unordered list
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

for (let i = 0; i < shopLocations.length; i++) {
  const location = shopLocations[i];
  location.calculateSales();
  location.renderSales();
}

*/
/* Change elements in the document using objects and properties in js
DOM combines js and html and gives js control of the webpage
The html element is converted to a js object
document.title - changes the title of the page
document.body - gets the body html element and puts it in the js code
document.body.innerHTML - controls all the html inside the body

method = functions that are saved inside an object
document.querySelector() lets us get any element from the page an put it inside your js



*/