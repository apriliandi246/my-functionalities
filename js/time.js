"use strict";

class Time {
   constructor(input) {
      this.past = new Date(input);
      this.now = new Date().getTime();
   }

   // using number of day in javascript
   getDay(numberOfDay) {
      const days = ["Sunday", "Moday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[numberOfDay];
   }

   // using number of month in javascript
   getMonth(numberOfMonth) {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[numberOfMonth];
   }

   /*
    * Levels :
    * hard => (Friday, April 6, 2020)
    * medium => (April 6, 2020)
    * easy => (April 2020)
    */
   format(level) {
      if (level === "hard") return `${this.getDay(this.past.getDay())}, ${this.getMonth(this.past.getMonth())} ${this.past.getDate()}, ${this.past.getFullYear()}`;
      if (level === "medium") return `${this.getMonth(this.past.getMonth())} ${this.past.getDate()}, ${this.past.getFullYear()}`;
      if (level === "easy") return `${this.getMonth(this.past.getMonth())} ${this.past.getFullYear()}`;
      return new Error("Level Not Found");
   }

   fromNow() {
      let result;

      let difference = (this.now / 1000) - (this.past.getTime() / 1000);

      let hour = Math.floor(difference / 3600);
      let diff = difference - (hour * 3600);
      let minute = Math.floor(diff / 60);

      let day = Math.floor(hour / 24);
      let month = Math.floor(day / 30.417);
      let year = Math.floor(month / 12);

      if (year > 0) return result = (year === 1 ? "a year ago" : `${year} years ago`);
      if (month > 0) return result = (month === 1 ? "a month ago" : `${month} months ago`);
      if (day > 0) return result = (day === 1 ? "a day ago" : `${day} days ago`);
      if (hour > 0) return result = (hour === 1 ? "an hour ago" : `${hour} hours ago`);
      if (minute > 0) return result = (minute === 1 ? "a minute ago" : `${minute} minutes ago`);

      return "a few seconds ago";
   }
}


const time = new Time("2020-01-01");

console.log(time.fromNow());
console.log(time.format("hard"));
console.log(time.format("medium"));
console.log(time.format("easy"));
console.log(time.format("ultimate"));