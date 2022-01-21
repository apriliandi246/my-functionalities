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
			medium: `${date} ${month} ${year}`,
			hard: `${day}, ${date} ${month} ${year}`,
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
			1: format === "normal" ? "Minggu" : "Min",
			2: format === "normal" ? "Senin" : "Sen",
			3: format === "normal" ? "Selasa" : "Sel",
			4: format === "normal" ? "Rabu" : "Rab",
			5: format === "normal" ? "Kamis" : "Kam",
			6: format === "normal" ? "Jumat" : "Jum",
			7: format === "normal" ? "Sabtu" : "Sab",
		};

		return days[numberOfDay + 1];
	}

	#getNameOfMonth(numberOfMonth, format) {
		if (["normal", "short"].includes(format) === false) {
			throw new Error("Format not found");
		}

		const months = {
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
			return `${this.hour}j`;
		}

		if (this.minute > 0) {
			return `${this.minute}m`;
		}

		return `${Math.floor(this.difference)}d`;
	}

	#getNormalRt() {
		if (this.year > 0) {
			return this.year === 1
				? "1 tahun yang lalu"
				: `${this.year} tahun yang lalu`;
		}

		if (this.month > 0) {
			return this.month === 1
				? "1 bulan yang lalu"
				: `${this.month} bulan yang lalu`;
		}

		if (this.week > 0) {
			return this.week === 1
				? "1 minggu yang lalu"
				: `${this.week} minggu yang lalu`;
		}

		if (this.day > 0) {
			return this.day === 1 ? "1 hari yang lalu" : `${this.day} hari yang lalu`;
		}

		if (this.hour > 0) {
			return this.hour === 1 ? "1 jam yang lalu" : `${this.hour} jam yang lalu`;
		}

		if (this.minute > 0) {
			return this.minute === 1
				? "1 menit yang lalu"
				: `${this.minute} menit yang lalu`;
		}

		return "Baru saja";
	}
}

const time = new Time("2022-01-21T16:19:13.041Z");

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
