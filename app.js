var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var locations = [];

function CookieStand(storeLocations, minCustHr, maxCustHr, avgPerCust) {
  this.storeLocations = storeLocations;
  this.minCustHr = minCustHr;
  this.maxCustHr =  maxCustHr;
  this.avgPerCust = avgPerCust;
  this.hourlySales = [];
  this.dailyTotal = 0;
  locations.push(this);

  this.custCalc = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  };

  this.calcHourlySales = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.floor(this.avgPerCust * this.custCalc()));
      this.dailyTotal += this.hourlySales[i];
    }
  };
  this.displayData = function() {
    this.calcHourlySales();

    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.storeLocations;
    row.appendChild(location);

    for(var i = 0; i < hours.length; i++){
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourlySales[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
    var totalCookie = document.createElement('tr');
      totalCookie.textContent = this.dailyTotal;
      row.appendChild(totalCookie);
      tbl.appendChild(row);
  }
};
var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac = new CookieStand("SeaTac Airport", 6, 44, 1.2);
var southCenter = new CookieStand("South Center Mall", 11, 38, 1.9);
var bellevueSquare = new CookieStand("Bellevue Square Mall", 20, 48, 3.3);
var alki = new CookieStand("Alki Beach", 3, 24, 2.6);

// this is where the table is made
var tbl = document.createElement('table');
var headerRow = document.createElement('thead');
//Makes an empty cell
var emptyCell = document.createElement('td');
    headerRow.appendChild(emptyCell);
//Hours are put in the top row...
for (var i = 0; i < hours.length; i++) {
  var td = document.createElement('td');
  td.className = 'cell';
  td.innerHTML = hours[i];
  headerRow.appendChild(td);
};
// Makes the word 'Total' in the top row
var dailyTotal = document.createElement('th');
dailyTotal.textContent = "Total";
headerRow.appendChild(dailyTotal);
tbl.appendChild(headerRow);
function displayAllLocations(){
  for (var i = 0; i < locations.length; i++) {
    locations[i].displayData();
  }
}
displayAllLocations();
document.body.appendChild(tbl);

var newForm = document.getElementById("new-cookie-stand");
var handlerEvent = function(event) {
  event.preventDefault();

   if (!event.target.locations.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
   return alert('Make sure to fill out the empty fields!');
   }
  var location = event.target.locations.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = Number(event.target.avg.value);

  var newStandForm = new CookieStand(location, min, max, avg);

  event.target.locations.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;

  locations.push(newStandForm);
  newStandForm.displayData();
};
newForm.addEventListener('submit', handlerEvent);