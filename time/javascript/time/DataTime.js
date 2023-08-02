"use strict";

class DataTime {
	#day;
	#hour;
	#diff;
	#week;
	#year;
	#month;
	#minute;
	#elapse;
	#currentTime;
	#previousTime;

	constructor(previousDate) {
		this.#currentTime = new Date();
		this.#previousTime = new Date(previousDate);
		this.#elapse = this.#currentTime.getTime() / 1000 - this.#previousTime.getTime() / 1000;
		this.#hour = Math.floor(this.#elapse / 3600);
		this.#diff = this.#elapse - this.#hour * 3600;
		this.#minute = Math.floor(this.#diff / 60);
		this.#day = Math.floor(this.#hour / 24);
		this.#week = Math.floor(this.#day / 7);
		this.#month = Math.floor(this.#week / 4.345);
		this.#year = Math.floor(this.#month / 12);
	}

	getYear() {
		return this.#year;
	}

	getMonth() {
		return this.#month;
	}

	getWeek() {
		return this.#week;
	}

	getDay() {
		return this.#week;
	}

	getHour() {
		return this.#hour;
	}

	getMinute() {
		return this.#minute;
	}

	getSecond() {
		return Math.floor(this.#elapse);
	}

	getPreviousTime() {
		return this.#previousTime.getDate();
	}

	getPreviousYear() {
		return this.#previousTime.getFullYear();
	}

	getPreviousDay() {
		return this.#previousTime.getDay();
	}

	getPreviousMonth() {
		return this.#previousTime.getMonth();
	}

	getCurrentYear() {
		return this.#currentTime.getFullYear();
	}
}

export default DataTime;