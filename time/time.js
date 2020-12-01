"use strict";

class Time {
   constructor(date) {
      Object.defineProperty(this, "past", {
         value: new Date(date),
         writable: false,
         enumerable: true,
         configurable: false,
      });

      Object.defineProperty(this, "now", {
         value: new Date().getTime(),
         writable: false,
         enumerable: true,
         configurable: false,
      });
   }

   // using number of day in javascript date method
   getNameOfDay(numberOfDay) {
      const days = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday",
      ];
      return days[numberOfDay];
   }

   // using number of month in javascript date method
   getNameOfMonth(numberOfMonth) {
      const months = [
         "January",
         "February",
         "March",
         "April",
         "May",
         "June",
         "July",
         "August",
         "September",
         "October",
         "November",
         "December",
      ];
      return months[numberOfMonth];
   }

   /*
    * Levels :
    * hard => (Friday, April 6, 2020)
    * medium => (April 6, 2020)
    * easy => (April 2020)
    */
   format(level) {
      let date = this.past.getDate();
      let year = this.past.getFullYear();
      let day = this.getNameOfDay(this.past.getDay());
      let month = this.getNameOfMonth(this.past.getMonth());

      if (level === "easy") {
         return `${month} ${year}`;
      }

      if (level === "medium") {
         return `${month} ${date}, ${year}`;
      }

      if (level === "hard") {
         return `${day}, ${month} ${date}, ${year}`;
      }

      throw new Error("Level Not Found");
   }

   fromNow() {
      const difference = this.now / 1000 - this.past / 1000;
      const hour = Math.floor(difference / 3600);
      const diff = difference - hour * 3600;
      const minute = Math.floor(diff / 60);

      const day = Math.floor(hour / 24);
      const week = Math.floor(day / 7);
      const month = Math.floor(week / 4.345);
      const year = Math.floor(month / 12);

      if (year > 0) {
         return year === 1 ? "a year ago" : `${year} years ago`;
      }

      if (month > 0) {
         return month === 1 ? "a month ago" : `${month} months ago`;
      }

      if (week > 0) {
         return week === 1 ? "a week ago" : `${week} weeks ago`;
      }

      if (day > 0) {
         return day === 1 ? "a day ago" : `${day} days ago`;
      }

      if (hour > 0) {
         return hour === 1 ? "an hour ago" : `${hour} hours ago`;
      }

      if (minute > 0) {
         return minute === 1 ? "a minute ago" : `${minute} minutes ago`;
      }

      return "a few seconds ago";
   }
}

const time = new Time("2020-10-15T15:58:55.480Z");

console.log(time.fromNow());
console.log(time.format("hard"));
console.log(time.format("medium"));
console.log(time.format("easy"));
console.log(time.format("ultimate"));
