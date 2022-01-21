"use strict";

class Time {
	constructor(date, lang) {
		this.lang = lang;
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

		let date, year, day, month, formatDate;

		if (this.lang === "id") {
			date = this.past.getDate();
			year = this.past.getFullYear();
			day = this.#getNameOfDay(this.past.getDay(), format);
			month = this.#getNameOfMonth(this.past.getMonth(), format);

			formatDate = {
				easy: `${month} ${year}`,
				medium: `${date} ${month} ${year}`,
				hard: `${day}, ${date} ${month} ${year}`,
			};
		}

		if (this.lang === "en") {
			date = this.past.getDate();
			year = this.past.getFullYear();
			day = this.#getNameOfDay(this.past.getDay(), format);
			month = this.#getNameOfMonth(this.past.getMonth(), format);

			formatDate = {
				easy: `${month} ${year}`,
				medium: `${month} ${date}, ${year}`,
				hard: `${day}, ${month} ${date}, ${year}`,
			};
		}

		return formatDate[level];
	}

	fromNow(format) {
		if (["normal", "short"].includes(format) === false) {
			throw new Error("Format not found");
		}

		if (format === "short") return this.#getShortRt();
		if (format === "normal") return this.#getNormalRt();
	}

	#getNameOfDay(numberOfDay, format) {
		if (["normal", "short"].includes(format) === false) {
			throw new Error("Format not found");
		}

		const DAYS_FORMAT = {
			id: {
				1: format === "normal" ? "Minggu" : "Min",
				2: format === "normal" ? "Senin" : "Sen",
				3: format === "normal" ? "Selasa" : "Sel",
				4: format === "normal" ? "Rabu" : "Rab",
				5: format === "normal" ? "Kamis" : "Kam",
				6: format === "normal" ? "Jumat" : "Jum",
				7: format === "normal" ? "Sabtu" : "Sab",
			},

			en: {
				1: format === "normal" ? "Sunday" : "Sun",
				2: format === "normal" ? "Monday" : "Mon",
				3: format === "normal" ? "Tuesday" : "Tues",
				4: format === "normal" ? "Wednesday" : "Wed",
				5: format === "normal" ? "Thursday" : "Thurs",
				6: format === "normal" ? "Friday" : "Fri",
				7: format === "normal" ? "Saturday" : "Sat",
			},
		};

		if (this.lang === "id") return DAYS_FORMAT.id[numberOfDay + 1];
		if (this.lang === "en") return DAYS_FORMAT.en[numberOfDay + 1];
	}

	#getNameOfMonth(numberOfMonth, format) {
		if (["normal", "short"].includes(format) === false) {
			throw new Error("Format not found");
		}

		const MONTHS_FORMAT = {
			id: {
				1: format === "normal" ? "Januari" : "Jan",
				2: format === "normal" ? "Februari" : "Feb",
				3: format === "normal" ? "Maret" : "Mar",
				4: format === "normal" ? "April" : "Apr",
				5: format === "normal" ? "Mei" : "Mei",
				6: format === "normal" ? "Juni" : "Jun",
				7: format === "normal" ? "Juli" : "Jul",
				8: format === "normal" ? "Augustus" : "Agu",
				9: format === "normal" ? "September" : "Sep",
				10: format === "normal" ? "Oktober" : "Oct",
				11: format === "normal" ? "November" : "Nov",
				12: format === "normal" ? "Desember" : "Des",
			},

			en: {
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
			},
		};

		if (this.lang === "id") return MONTHS_FORMAT.id[numberOfMonth + 1];
		if (this.lang === "en") return MONTHS_FORMAT.en[numberOfMonth + 1];
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
			if (this.lang === "id") {
				return `${this.hour}j`;
			}

			if (this.lang === "en") {
				return `${this.hour}h`;
			}
		}

		if (this.minute > 0) {
			return `${this.minute}m`;
		}

		if (this.lang === "id") {
			return `${Math.floor(this.difference)}d`;
		}

		if (this.lang === "en") {
			return `${Math.floor(this.difference)}s`;
		}
	}

	#getNormalRt() {
		if (this.year > 0) {
			if (this.lang === "id") {
				return this.year === 1
					? "1 tahun yang lalu"
					: `${this.year} tahun yang lalu`;
			}

			if (this.lang === "en") {
				return this.year === 1 ? "a year ago" : `${this.year} years ago`;
			}
		}

		if (this.month > 0) {
			if (this.lang === "id") {
				return this.month === 1
					? "1 bulan yang lalu"
					: `${this.month} bulan yang lalu`;
			}

			if (this.lang === "en") {
				return this.month === 1 ? "a month ago" : `${this.month} months ago`;
			}
		}

		if (this.week > 0) {
			if (this.lang === "id") {
				return this.week === 1
					? "1 minggu yang lalu"
					: `${this.week} minggu yang lalu`;
			}

			if (this.lang === "en") {
				return this.week === 1 ? "a week ago" : `${this.week} weeks ago`;
			}
		}

		if (this.day > 0) {
			if (this.lang === "id") {
				return this.day === 1
					? "1 hari yang lalu"
					: `${this.day} hari yang lalu`;
			}

			if (this.lang === "en") {
				return this.day === 1 ? "a day ago" : `${this.day} days ago`;
			}
		}

		if (this.hour > 0) {
			if (this.lang === "id") {
				return this.hour === 1
					? "1 jam yang lalu"
					: `${this.hour} jam yang lalu`;
			}

			if (this.lang === "en") {
				return this.hour === 1 ? "an hour ago" : `${this.hour} hours ago`;
			}
		}

		if (this.minute > 0) {
			if (this.lang === "id") {
				return this.minute === 1
					? "1 menit yang lalu"
					: `${this.minute} menit yang lalu`;
			}

			if (this.lang === "en") {
				return this.minute === 1
					? "a minute ago"
					: `${this.minute} minutes ago`;
			}
		}

		if (this.lang === "id") {
			return "Baru saja";
		}

		if (this.lang === "en") {
			return "Just now";
		}
	}
}

const time = new Time("2022-01-21T17:00:31.314Z", "id");

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

console.log("\n");
console.log("-----------------------------------------");
console.log("\n");

const time2 = new Time("2022-01-21", "en");

console.log(time2.format("easy", "short"));
console.log(time2.format("medium", "short"));
console.log(time2.format("hard", "short"));

console.log("\n");

console.log(time2.format("easy", "normal"));
console.log(time2.format("medium", "normal"));
console.log(time2.format("hard", "normal"));

console.log("\n");

console.log(time2.fromNow("short"));
console.log(time2.fromNow("normal"));
