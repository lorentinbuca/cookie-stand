var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var pikePlace = {
  coffeeName: "Pike Place",
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
   for (i = 0; i < hoursOpen.length; i++) {
      var hour = this.generateRandom() * this.avgPerCust;
      this.hourlyTotals.push(Math.ceil(hour));
      console.log(i);
  }
  displayDays: function(){
    var nextQuestion = document.createElement('answer1');
    nextQuestion.innerHTML = hoursOpen;
    document.body.appendChild(nextQuestion);
  }

  }

};

pikePlace.hourlyCookies();
console.log(pikePlace.hourlyTotals);
pikePlace.displayDays();

//calRand function();
//calHourly function();
//calcDaily function();
//display function();

