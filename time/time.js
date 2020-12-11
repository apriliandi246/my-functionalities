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

   getAbbreviationOfDay(numberOfDay) {
      const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
      return days[numberOfDay];
   }

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

   getAbbreviationOfMonth(numberOfMonth) {
      const months = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sept",
         "Oct",
         "Nov",
         "Dec",
      ];
      return months[numberOfMonth];
   }

   getAbbreviationOfTime(time) {
      const times = {
         second: "sec",
         minute: "min",
         hour: "hr",
      };
      return times[time];
   }

   /*
    * Levels :
    * hard => (Friday, April 6, 2020)
    * medium => (April 6, 2020)
    * easy => (April 2020)
    */
   getDateFormat(level, format) {
      if (["easy", "medium", "hard"].includes(level) === false) {
         throw new Error("Level Not Found");
      }

      if (["normal", "short"].includes(format) === false) {
         throw new Error("Format Not Found");
      }

      let date = this.past.getDate();
      let year = this.past.getFullYear();
      let day =
         format === "normal"
            ? this.getNameOfDay(this.past.getDay())
            : this.getAbbreviationOfDay(this.past.getDay());
      let month =
         format === "normal"
            ? this.getNameOfMonth(this.past.getMonth())
            : this.getAbbreviationOfMonth(this.past.getMonth());

      let formatDate = {
         easy: `${month} ${year}`,
         medium: `${month} ${date}, ${year}`,
         hard: `${day}, ${month} ${date}, ${year}`,
      };

      return formatDate[level];
   }

   fromNow() {
      let difference = this.now / 1000 - this.past / 1000;
      let hour = Math.floor(difference / 3600);
      let diff = difference - hour * 3600;
      let minute = Math.floor(diff / 60);

      let day = Math.floor(hour / 24);
      let week = Math.floor(day / 7);
      let month = Math.floor(week / 4.345);
      let year = Math.floor(month / 12);

      if (year > 0) return year === 1 ? "a year ago" : `${year} years ago`;
      if (month > 0) return month === 1 ? "a month ago" : `${month} months ago`;
      if (week > 0) return week === 1 ? "a week ago" : `${week} weeks ago`;
      if (day > 0) return day === 1 ? "a day ago" : `${day} days ago`;
      if (hour > 0) return hour === 1 ? "an hour ago" : `${hour} hours ago`;
      if (minute > 0)
         return minute === 1 ? "a minute ago" : `${minute} minutes ago`;

      return Math.floor(difference) > 4
         ? `${Math.floor(difference)} seconds ago`
         : "a few seconds ago";
   }
}

const time = new Time("2020-12-11T12:08:22.532Z");

console.log(time.fromNow());
console.log(time.getDateFormat("hard", "normal"));
console.log(time.getDateFormat("medium", "short"));
console.log(time.getDateFormat("easy", "short"));
