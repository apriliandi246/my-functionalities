"use strict";

class FormatTime {
	#timeData;
	#levelFormats;
	#timeLanguage;
	#lenghtFormats;

	constructor(timeData, timeLanguage) {
		this.#timeData = timeData;
		this.#timeLanguage = timeLanguage;
		this.#lenghtFormats = ["normal", "short"];
		this.#levelFormats = ["easy", "medium", "hard"];
	}

	getFormatTime(formatLevel, formatDate) {
		this.#checkFormatLevelInput(formatLevel);
		this.#checkFormatDateInput(formatDate);

		const year = this.#timeData.getYear();
		const previousTime = this.#timeData.getPreviousTime();

		const day = this.#timeLanguage.getNameOfTheDay(
			this.#timeData.getPreviousDay(),
			formatDate
		);

		const month = this.#timeLanguage.getNameOfTheMonth(
			this.#timeData.getMonth(),
			formatDate
		);

		const formatDateResults = {
			easy: `${month} ${year}`,
			medium: `${month} ${previousTime}, ${year}`,
			hard: `${day}, ${month} ${previousTime}, ${year}`,
		};

		return formatDateResults[formatLevel];
	}

	#checkFormatLevelInput(formatLevel) {
		const isFormatLevelFound = this.#levelFormats.includes(formatLevel);

		if (isFormatLevelFound === false) {
			throw new Error(`${formatLevel} level format does not exist`);
		}
	}

	#checkFormatDateInput(formatDate) {
		const isFormatDateFound = this.#lenghtFormats.includes(formatDate);

		if (isFormatDateFound === false) {
			throw new Error(`${formatDate} date format does not exist`);
		}
	}
}

export default FormatTime;
