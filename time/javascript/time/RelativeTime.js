"use strict";

class RelativeTime {
	#timeData;
	#timeLanguage;

	constructor(timeData, timeLanguage) {
		this.#timeData = timeData;
		this.#timeLanguage = timeLanguage;
	}

	getRelativeTime() {
		const year = this.#timeData.getYear();
		const month = this.#timeData.getMonth();
		const week = this.#timeData.getWeek();
		const day = this.#timeData.getDay();
		const hour = this.#timeData.getHour();
		const minute = this.#timeData.getMinute();
		const second = this.#timeData.getSecond();

		if (year > 0) {
			return this.#getYearRelativeTime(year);
		}

		if (month > 0) {
			return this.#getMonthRelativeTime(month);
		}

		if (week > 0) {
			return this.#getWeekRelativeTime(week);
		}

		if (day > 0) {
			this.#getDayRelativeTime(day);
		}

		if (hour > 0) {
			return this.#getHourRelativeTime(hour);
		}

		if (minute > 0) {
			return this.#getMinuteRelativeTime(minute);
		}

		if (second > 0) {
			return this.#getSecondRelativeTime(second);
		}
	}

	#getYearRelativeTime(year) {
		return year === 1
			? this.#timeLanguage.getSingularRelativeMessage("year")
			: this.#timeLanguage.getPluralRelativeMessage("year", year);
	}

	#getMonthRelativeTime(month) {
		return month === 1
			? this.#timeLanguage.getSingularRelativeMessage("month")
			: this.#timeLanguage.getPluralRelativeMessage("month", month);
	}

	#getWeekRelativeTime(week) {
		return week === 1
			? this.#timeLanguage.getSingularRelativeMessage("week")
			: this.#timeLanguage.getPluralRelativeMessage("week", week);
	}

	#getDayRelativeTime(day) {
		return day === 1
			? this.#timeLanguage.getSingularRelativeMessage("day")
			: this.#timeLanguage.getPluralRelativeMessage("day", day);
	}

	#getHourRelativeTime(hour) {
		return hour === 1
			? this.#timeLanguage.getSingularRelativeMessage("hour")
			: this.#timeLanguage.getPluralRelativeMessage("hour", hour);
	}

	#getMinuteRelativeTime(minute) {
		return minute === 1
			? this.#timeLanguage.getSingularRelativeMessage("minute")
			: this.#timeLanguage.getPluralRelativeMessage("minute", minute);
	}

	#getSecondRelativeTime(second) {
		return second === 1
			? this.#timeLanguage.getSingularRelativeMessage("second")
			: this.#timeLanguage.getPluralRelativeMessage("second", second);
	}
}

export default RelativeTime;
