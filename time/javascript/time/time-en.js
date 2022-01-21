"use strict";

class Time {
	constructor(date) {
		this.now = new Date();
		this.past = new Date(date);
		this.difference = this.now.getTime() / 1000 - this.past.getTime() / 1000;
		this.hour = Math.floor(this.difference / 3600);
		this.diff = this.difference - this.hour * 3600;
		this.minute = Math.floor(this.diff / 60);
		this.day = Math.floor(this.hour / 24);
		this.week = Math.floor(this.day / 7);
		this.month = Math.floor(this.week / 4.345);
		this.year = Math.floor(this.month / 12);
	}

	format(level, format) {
		if (["easy", "medium", "hard"].includes(level) === false) {
			throw new Error("Level not found");
		}

		if (["normal", "short"].includes(format) === false) {
			throw new Error("Format not found");
		}

		const date = this.past.getDate();
		const year = this.past.getFullYear();
		const day = this.#getNameOfDay(this.past.getDay(), format);
		const month = this.#getNameOfMonth(this.past.getMonth(), format);

		const formatDate = {
			easy: `${month} ${year}`,
			medium: `${month} ${date}, ${year}`,
			hard: `${day}, ${month} ${date}, ${year}`,
		};

		return formatDate[level];
	}

	fromNow(format) {
		if (["normal", "short"].includes(format) === false) {
			throw new Error("Format not found");
		}

		if (format === "short") {
			return this.#getShortRt();
		}

		if (format === "normal") {
			return this.#getNormalRt();
		}
	}

	#getNameOfDay(numberOfDay, format) {
		if (["normal", "short"].includes(format) === false) {
			throw new Error("Format not found");
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

	#getNameOfMonth(numberOfMonth, format) {
		if (["normal", "short"].includes(format) === false) {
			throw new Error("Format not found");
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

	#getShortRt() {
		if (this.now.getFullYear() !== this.past.getFullYear()) {
			return `${this.#getNameOfMonth(
				this.past.getMonth(),
				"short"
			)} ${this.past.getDate()}, ${this.past.getFullYear()}`;
		}

		if (this.month > 0 || this.day > 0) {
			return `${this.#getNameOfMonth(
				this.past.getMonth(),
				"short"
			)} ${this.past.getDate()}`;
		}

		if (this.hour > 0) {
			return `${this.hour}h`;
		}

		if (this.minute > 0) {
			return `${this.minute}m`;
		}

		return `${Math.floor(this.difference)}s`;
	}

	#getNormalRt() {
		if (this.year > 0) {
			return this.year === 1 ? "a year ago" : `${this.year} years ago`;
		}

		if (this.month > 0) {
			return this.month === 1 ? "a month ago" : `${this.month} months ago`;
		}

		if (this.week > 0) {
			return this.week === 1 ? "a week ago" : `${this.week} weeks ago`;
		}

		if (this.day > 0) {
			return this.day === 1 ? "a day ago" : `${this.day} days ago`;
		}

		if (this.hour > 0) {
			return this.hour === 1 ? "an hour ago" : `${this.hour} hours ago`;
		}

		if (this.minute > 0) {
			return this.minute === 1 ? "a minute ago" : `${this.minute} minutes ago`;
		}

		return "Just now";
	}
}

const time = new Time("2022-01-18");

console.log(time.format("easy", "short"));
console.log(time.format("medium", "short"));
console.log(time.format("hard", "short"));

console.log("\n");

console.log(time.format("easy", "normal"));
console.log(time.format("medium", "normal"));
console.log(time.format("hard", "normal"));

console.log("\n");

console.log(time.fromNow("short"));
console.log(time.fromNow("normal"));
