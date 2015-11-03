var hoursOpen = ['', "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var pikePlace = {
  coffeeName: "Pike Place",
  pikeID: document.getElementById('pike')
  minCustHr: 17,
  maxCustHr: 88,
  avgPerCust: 5.2,
  openHours: 8,
  dailyTotal: 0,
  hourlyTotals: [],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  hourlyCookies: function(){
    var dayTotal = 0;
   for (i = 0; i < hoursOpen.length; i++) {
      var hour = this.generateRandom() * this.avgPerCust;
      this.hourlyTotals.push(Math.ceil(hour));
      this.dailyTotal += this.hourlyCookies[i];
      console.log(i);
    }    
  },
  display: function(){
    var hour = document.getElementById('pike');
      this.dailyTotal += this.hourlyCookies(i);
      //console.log("hour" +(10+1) + " hourly amount is " + this.hour.innerHTML= hoursOpen[i] + this.hourlyTotals[i]);
      hour.innerHTML = 'Totals ' + this.dailyTotal;
      this.pikeID.className(hour);
  },
  makeList: function(){
    this.hourlyCookies();
    var tbl = document.createElement('table');

    var trElemet = document.createElement('tr');
    for(var i = 0; i < hour.length; i++){
      var thElement = document.createElement('th');
      thElement.textElement = hour[i];
      trElemet.appendChild(tdElement);
    }
    tbl.appendChild(trElemet);
    document.body.appendChild('tbl');
  }

};
pikePlace.hourlyCookies();
