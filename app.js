var hoursOpen = ['', "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var pikePlace = {
  coffeeName: "Pike Place",
  pikeID: document.getElementById('pike'),
  minCustHr: 17,
  maxCustHr: 88,
  avgPerCust: 5.2,
  //openHours: 8,
  dailyTotal: 0,
  hourlyTotals: [],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  hourlyCookies: function(){
   for (var i = 0; i < hoursOpen.length; i++) {
      var hour = Math.floor(this.generateRandom() * this.avgPerCust);
      console.log('Hourly Totals: ' + hour);
      this.hourlyTotals.push(hour);
      this.dailyTotal += hour;
      console.log(i);
    }    
  },
  doMakeList: function(){
    this.hourlyCookies();

    for(var i = 0; i < hoursOpen.length; i++){
      var li = document.createElement('li');
      li.textContent = hoursOpen[i] + ' ' + this.hourlyTotals[i];
      pikeUl.appendChild(li);
    }

    var hour = document.getElementById('pike');
      this.dailyTotal += this.hourlyCookies[i];
      hour.innerHTML = 'Totals ' + this.dailyTotal;
      this.pikeID.className(hour);
  }
  

};
var pikeUl = document.getElementById('pike');
pikePlace.doMakeList();
