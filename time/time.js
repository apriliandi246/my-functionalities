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

   getNameOfDay(numberOfDay, format) {
      if (["normal", "short"].includes(format) === false) {
         throw new Error("Format Not Found");
      }

      const days = {
         1: format === "normal" ? "Sunday" : "Sun",
         2: format === "normal" ? "Monday" : "Mon",
         3: format === "normal" ? "Tuesday" : "Tues",
         4: format === "normal" ? "Wednesday" : "Wed",
         5: format === "normal" ? "Thursday" : "Thurs",
         6: format === "normal" ? "Friday" : "Fri",
         7: format === "normal" ? "Saturday" : "Sat",
      };

      return days[numberOfDay + 1];
   }

   getNameOfMonth(numberOfMonth, format) {
      if (["normal", "short"].includes(format) === false) {
         throw new Error("Format Not Found");
      }

      const months = {
         1: format === "normal" ? "January" : "Jan",
         2: format === "normal" ? "February" : "Feb",
         3: format === "normal" ? "March" : "Mar",
         4: format === "normal" ? "April" : "Apr",
         5: format === "normal" ? "May" : "May",
         6: format === "normal" ? "June" : "Jun",
         7: format === "normal" ? "July" : "Jul",
         8: format === "normal" ? "August" : "Aug",
         9: format === "normal" ? "September" : "Sept",
         10: format === "normal" ? "October" : "Oct",
         11: format === "normal" ? "November" : "Nov",
         12: format === "normal" ? "December" : "Dec",
      };

      return months[numberOfMonth + 1];
   }

   getShortRt() {
      const difference = this.now / 1000 - this.past / 1000;
      const hour = Math.floor(difference / 3600);
      const diff = difference - hour * 3600;
      const minute = Math.floor(diff / 60);
      const day = Math.floor(hour / 24);
      const month = Math.floor(day / 30.417);
      const year = Math.floor(month / 12);

      if (year > 0)
         return `${this.getAbbreviationOfMonth(
            this.past.getMonth()
         )} ${this.past.getDate()}, ${this.past.getFullYear()}`;

      if (month > 0 || day > 0)
         return `${this.getAbbreviationOfMonth(
            this.past.getMonth()
         )} ${this.past.getDate()}`;

      if (hour > 0) return `${hour}h`;
      if (minute > 0) return `${minute}m`;

      return Math.floor(difference) > 4
         ? `${Math.floor(difference)} seconds ago`
         : "a few seconds ago";
   }

   getNormalRt() {
      const difference = this.now / 1000 - this.past / 1000;
      const hour = Math.floor(difference / 3600);
      const diff = difference - hour * 3600;
      const minute = Math.floor(diff / 60);
      const day = Math.floor(hour / 24);
      const week = Math.floor(day / 7);
      const month = Math.floor(week / 4.345);
      const year = Math.floor(month / 12);

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

   format(level, format) {
      if (["easy", "medium", "hard"].includes(level) === false) {
         throw new Error("Level Not Found");
      }

      if (["normal", "short"].includes(format) === false) {
         throw new Error("Format Not Found");
      }

      const date = this.past.getDate();
      const year = this.past.getFullYear();
      const day = this.getNameOfDay(this.past.getDay(), format);
      const month = this.getNameOfMonth(this.past.getMonth(), format);

      const formatDate = {
         easy: `${month} ${year}`,
         medium: `${month} ${date}, ${year}`,
         hard: `${day}, ${month} ${date}, ${year}`,
      };

      return formatDate[level];
   }

   fromNow(format) {
      if (["normal", "short"].includes(format) === false) {
         throw new Error("Format Not Found");
      }
      if (format === "short") return this.getShortRt();
      if (format === "normal") return this.getNormalRt();
   }
}

const time = new Time("2020-12-13T07:36:54.941Z");

console.log(time.fromNow("normal"));
console.log(time.format("hard", "short"));
console.log(time.format("medium", "short"));
console.log(time.format("easy", "short"));
