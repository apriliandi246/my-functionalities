"use strict";

class LanguageMessage {
	#dayFormats;
	#monthFormats;
	#currentLanguage;
	#relativeMessages;

	constructor(currentLanguage) {
		this.#currentLanguage = currentLanguage;

		this.#dayFormats = {
			en: [
				{ short: "Sun", normal: "Sunday" },
				{ short: "Mon", normal: "Monday" },
				{ short: "Tues", normal: "Tuesday" },
				{ short: "Wed", normal: "Wednesday" },
				{ short: "Thu", normal: "Thursday" },
				{ short: "Fri", normal: "Friday" },
				{ short: "Sat", normal: "Saturday" },
			],

			id: [
				{ short: "Min", normal: "Minggu" },
				{ short: "Sen", normal: "Senin" },
				{ short: "Sel", normal: "Selasa" },
				{ short: "Rab", normal: "Rabu" },
				{ short: "Kam", normal: "Kamis" },
				{ short: "Jum", normal: "Jumat" },
				{ short: "Sab", normal: "Sabtu" },
			],
		};

		this.#monthFormats = {
			en: [
				{ short: "Jan", normal: "January" },
				{ short: "Feb", normal: "February" },
				{ short: "Mar", normal: "March" },
				{ short: "Apr", normal: "April" },
				{ short: "May", normal: "May" },
				{ short: "Jun", normal: "June" },
				{ short: "Jul", normal: "July" },
				{ short: "Aug", normal: "August" },
				{ short: "Sep", normal: "September" },
				{ short: "Oct", normal: "October" },
				{ short: "Nov", normal: "November" },
				{ short: "Dec", normal: "December" },
			],

			id: [
				{ short: "Jan", normal: "Januari" },
				{ short: "Feb", normal: "Februari" },
				{ short: "Mar", normal: "Maret" },
				{ short: "Apr", normal: "April" },
				{ short: "Mei", normal: "Mei" },
				{ short: "Jun", normal: "Juni" },
				{ short: "Jul", normal: "Juli" },
				{ short: "Agt", normal: "Agustus" },
				{ short: "Sep", normal: "September" },
				{ short: "Okt", normal: "Oktober" },
				{ short: "Nov", normal: "November" },
				{ short: "Des", normal: "Desember" },
			],
		};

		this.#relativeMessages = {
			en: {
				year: {
					singular: "a year ago",
					plural: "years ago",
				},

				month: {
					singular: "a month ago",
					plural: "months ago",
				},

				week: {
					singular: "a week ago",
					plural: "weeks ago",
				},

				day: {
					singular: "a day ago",
					plural: "days ago",
				},

				hour: {
					singular: "a hour ago",
					plural: "hours ago",
				},

				minute: {
					singular: "a minute ago",
					plural: "minutes ago",
				},

				second: {
					singular: "just now",
					plural: "seconds ago",
				},
			},

			id: {
				year: {
					singular: "1 tahun yang lalu",
					plural: "tahun yang lalu",
				},

				month: {
					singular: "1 bulan yang lalu",
					plural: "bulan yang lalu",
				},

				week: {
					singular: "1 minggu yang lalu",
					plural: "minggu yang lalu",
				},

				day: {
					singular: "1 hari yang lalu",
					plural: "hari yang lalu",
				},

				hour: {
					singular: "1 jam yang lalu",
					plural: "jam yang lalu",
				},

				minute: {
					singular: "1 menit yang lalu",
					plural: "menit yang lalu",
				},

				second: {
					singular: "baru saja",
					plural: "detik yang lalu",
				},
			},
		};
	}

	getNameOfTheDay(numberOfDay, formatDate) {
		return this.#dayFormats[this.#currentLanguage][numberOfDay][formatDate];
	}

	getNameOfTheMonth(numberOfMonth, formatDate) {
		return this.#monthFormats[this.#currentLanguage][numberOfMonth][formatDate];
	}

	getSingularRelativeMessage(dateType) {
		return this.#relativeMessages[this.#currentLanguage][dateType]["singular"];
	}

	getPluralRelativeMessage(dateType, entityValue) {
		const message = `${entityValue} ${
			this.#relativeMessages[this.#currentLanguage][dateType]["plural"]
		}`;

		return message;
	}
}

export default LanguageMessage;
